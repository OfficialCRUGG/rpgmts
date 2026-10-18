const fs = require("node:fs");
const path = require("node:path");

const typesDir = path.resolve(__dirname, "types");
const progressFile = path.resolve(__dirname, "PROGRESS.md");

const MARKERS = {
  any: "ANY_TYPES",
  allMembersDefined: "ALL_MEMBERS_DEFINED",
};

// Get the content for a section in markdown
function getSection(markdown, name) {
  const marker = MARKERS[name];
  const [start, end] = marker
    ? [`<!-- START: ${marker} -->`, `<!-- END: ${marker} -->`]
    : [];

  const startIndex = markdown.indexOf(start);
  const endIndex = markdown.indexOf(end);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`Missing or invalid markers for ${name}`);
  }

  return markdown.slice(startIndex + start.length, endIndex);
}

// Replace a section content in markdown
function replaceSection(markdown, name, content) {
  const marker = MARKERS[name];
  const [start, end] = marker
    ? [`<!-- START: ${marker} -->`, `<!-- END: ${marker} -->`]
    : [];

  const startIndex = markdown.indexOf(start);
  const endIndex = markdown.indexOf(end);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`Missing or invalid markers for ${name}`);
  }

  return (
    markdown.slice(0, startIndex + start.length) +
    "\n" +
    content.trimEnd() +
    "\n" +
    markdown.slice(endIndex)
  );
}

// Calculate a percentage based on how much is done out of a total
function percentage(done, total) {
  return total === 0 ? 100 : Math.round((done / total) * 100);
}

// Get the amount of "any" type assignments in a source code
function getAnyCount(source) {
  // Strip all comments from the source code
  let code = source.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");

  // Strip all bodies of strings or template literals
  code = code.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "");

  // Count occurrences of the "any" type (: + optional whitespace + any)
  const matches = code.match(/:\s*any\b/g);
  return matches ? matches.length : 0;
}

// Gets a list of declared names in a source code
function getDeclarationNames(source) {
  const names = [];
  const regex = /^\s*declare\s+(?:function|class)\s+([a-zA-Z0-9_$]+)/gm;

  for (const match of source.matchAll(regex)) {
    if (!match[1] || names.includes(match[1])) continue;
    names.push(match[1]);
  }

  return names;
}

// Reads the baseline for "any" progress
// i.e. the first tracked amount of "any" type assignments
function readAnyBaseline(section) {
  const baselines = [];
  const pattern = /^\s*-\s+([^:\n]+):\s*\d+%\s*\(\d+\/(\d+)\)/gm;

  for (const match of section.matchAll(pattern)) {
    baselines.push({
      name: match[1].trim(),
      baseline: Number(match[2]),
    });
  }

  return baselines;
}

// Checks which symbols have been marked as checked in the section
// Returns an array of [file, symbol] pairs for each checked symbol
function readCheckedSymbols(section) {
  const checked = [];
  let currentFile = null;

  for (const line of section.split(/\r?\n/)) {
    const fileMatch = line.match(/^- ([^:]+): \d+% \(\d+\/\d+\)\s*$/);

    if (fileMatch) {
      currentFile = fileMatch[1].trim();
      continue;
    }

    const symbolMatch = line.match(/^\s+- \[([ xX])\] (.+?)\s*$/);

    if (currentFile && symbolMatch && symbolMatch[1].toLowerCase() === "x") {
      checked.push([currentFile, symbolMatch[2].replace(/^\*(.*?)\*$/, "$1")]);
    }
  }

  return checked;
}

// Returns all .d.ts files inside the type directory (non-recursive)
// They get sorted alphabetically by file name
function getTypeFiles() {
  return fs
    .readdirSync(typesDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".d.ts") &&
        entry.name !== "index.d.ts",
    )
    .map((entry) => ({
      basename: entry.name.replace(/\.d\.ts$/, ""),
      path: path.join(typesDir, entry.name),
    }))
    .sort((a, b) => a.basename.localeCompare(b.basename));
}

// Regenerates the ANY_TYPES section
function updateAnySection(files, oldSection) {
  const oldBaselines = readAnyBaseline(oldSection);
  const results = [];

  for (const file of files) {
    const source = fs.readFileSync(file.path, "utf-8");
    const remaining = getAnyCount(source);
    const previous = oldBaselines.find((entry) => entry.name === file.basename);
    const baseline = previous ? previous.baseline : remaining;

    results.push({
      name: file.basename,
      baseline,
      eliminated: baseline - remaining,
    });
  }

  const totalBaseline = results.reduce((sum, file) => sum + file.baseline, 0);
  const totalEliminated = results.reduce(
    (sum, file) => sum + file.eliminated,
    0,
  );

  return [
    `**Total: ${percentage(totalEliminated, totalBaseline)}% (${totalEliminated}/${totalBaseline})**`,
    ...results.map(
      (file) =>
        `- ${file.name}: ${percentage(file.eliminated, file.baseline)}% (${file.eliminated}/${file.baseline})`,
    ),
  ].join("\n");
}

// Regenerates the ALL_MEMBERS_DEFINED section
function updateMembersSection(files, oldSection) {
  const allSymbols = [];
  const checked = readCheckedSymbols(oldSection);
  console.log("Old section:\n", oldSection);
  console.log("Parsed checked symbols:", JSON.stringify(checked, null, 2));
  const lines = [];
  const unmappedGlobalsSymbol = "Unmapped globals";

  for (const file of files) {
    const source = fs.readFileSync(file.path, "utf-8");
    const symbols = getDeclarationNames(source);
    allSymbols.push(...symbols);
    const unmappedGlobalsChecked = checked.some(
      ([f, s]) => f === file.basename && s === unmappedGlobalsSymbol,
    );
    const completed =
      symbols.filter((symbol) =>
        checked.some(([f, s]) => f === file.basename && s === symbol),
      ).length + (unmappedGlobalsChecked ? 1 : 0);

    const symbolCount = symbols.length + 1;

    lines.push(
      `- ${file.basename}: ${percentage(completed, symbolCount)}% (${completed}/${symbolCount})`,
    );

    lines.push(
      `  - [${unmappedGlobalsChecked ? "x" : " "}] *${unmappedGlobalsSymbol}*`,
    );

    for (const symbol of symbols) {
      const isChecked = checked.some(
        ([f, s]) => f === file.basename && s === symbol,
      );
      lines.push(`  - [${isChecked ? "x" : " "}] ${symbol}`);
    }
  }

  return [
    `**Total: ${percentage(checked.length, allSymbols.length)}% (${checked.length}/${allSymbols.length})**`,
    ...lines,
  ].join("\n");
}

function main() {
  if (!fs.existsSync(typesDir))
    throw new Error(`Types directory not found: ${typesDir}`);

  if (!fs.existsSync(progressFile))
    throw new Error(`Progress file not found: ${progressFile}`);

  const files = getTypeFiles();
  let markdown = fs.readFileSync(progressFile, "utf-8");

  markdown = replaceSection(
    markdown,
    "any",
    updateAnySection(files, getSection(markdown, "any")),
  );

  markdown = replaceSection(
    markdown,
    "allMembersDefined",
    updateMembersSection(files, getSection(markdown, "allMembersDefined")),
  );

  fs.writeFileSync(progressFile, markdown, "utf-8");

  console.log(
    `Processed ${files.length} declaration files. Updated ${progressFile}.`,
  );
}

main();
