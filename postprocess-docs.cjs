const fs = require("fs");

function fixPackage(packageName) {
  let materialStyleCss = fs.readFileSync(
    `docs/${packageName}/assets/material-style.css`,
    "utf-8",
  );

  // Remove any @import lines
  materialStyleCss = materialStyleCss.replace(/@import.+;$/g, "");

  // Change fonts
  materialStyleCss = materialStyleCss.replace(
    /--font-sans:[^;]+;/g,
    "--font-sans: 'Segoe UI', sans-serif;",
  );
  materialStyleCss = materialStyleCss.replace(
    /--font-mono:[^;]+;/g,
    "--font-mono: monospace;",
  );

  fs.writeFileSync(
    `docs/${packageName}/assets/material-style.css`,
    materialStyleCss,
    "utf-8",
  );

  function fixHtmlPage(fileName) {
    let htmlContent = fs.readFileSync(
      `docs/${packageName}/${fileName}`,
      "utf-8",
    );

    // Replace "assets/" with "/<packageName>/assets/"
    htmlContent = htmlContent.replace(/assets\//g, `/${packageName}/assets/`);

    fs.writeFileSync(`docs/${packageName}/${fileName}`, htmlContent, "utf-8");
  }

  fixHtmlPage("index.html");
  fixHtmlPage("hierarchy.html");
}

fs.readdirSync("docs").forEach((packageName) => {
  if (fs.statSync(`docs/${packageName}`).isDirectory()) {
    fixPackage(packageName);
  }
});
