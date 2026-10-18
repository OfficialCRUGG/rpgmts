const { glob } = require("node:fs/promises");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

async function main() {
  const engineFiles = await Array.fromAsync(glob("src/*.js"));

  const inputs = [...engineFiles.map((file) => ({ file, patch: true }))];

  fs.mkdirSync("tmp_src", { recursive: true });

  const patched = inputs.map(({ file, patch }) => {
    let code = fs.readFileSync(file, "utf8");

    if (patch) {
      // Required fix for RPG Maker builtin JS files
      code = code.replace(
        /^(?=[A-Z][\w$]*\.[A-Z][\w$]*\s*=\s*(?:function|class)\b)/gm,
        "/** @type {any} */ ",
      );

      // Remove `require()` statements as they cause issues for whatever reason
      code = code.replace(/\brequire\([^)]*\)/g, "null");
    }

    const relativePath = path.relative("src", file);
    const out = path.join("tmp_src", relativePath);

    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, code);

    return out;
  });

  const result = spawnSync(
    "tsc",
    [
      "--allowJs",
      "--declaration",
      "--emitDeclarationOnly",
      "--outDir",
      "types",
      "--target",
      "ES2022",
      "--strict",
      "false",
      "--skipLibCheck",
      "--noEmitOnError",
      "false",
      "--moduleDetection",
      "legacy",
      ...patched,
    ],
    { stdio: "inherit", shell: process.platform === "win32" },
  );

  fs.rmSync("tmp_src", { recursive: true, force: true });

  process.exit(result.status ?? 1);
}

main();
