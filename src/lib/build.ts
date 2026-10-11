import { type PluginConfig } from "../schema/config.js";
import * as esbuild from "esbuild";
import { mkdirSync, writeFileSync } from "node:fs";
import { assembleHeader } from "./header.js";
import { dirname } from "node:path";

export async function buildPlugin(pluginConfig: PluginConfig) {
  const result = await esbuild.build({
    entryPoints:
      typeof pluginConfig.entrypoint === "string"
        ? [pluginConfig.entrypoint]
        : pluginConfig.entrypoint,
    bundle: true,
    outfile: pluginConfig.target,
    platform: "node",
    target: "es2020",
    format: "iife",
    sourcemap: false,
    minify: pluginConfig.minify ?? false,
    keepNames: true,
    write: false,
  });

  let output = result.outputFiles?.[0]?.text || "";

  output = output.replace(
    /^"use strict";\n\(\(\) => \{/,
    '(() => {\n  "use strict";',
  );

  const header = assembleHeader(pluginConfig.metadata);
  output = header + "\n" + output;

  if (pluginConfig.banner !== false) {
    if (pluginConfig.banner === undefined)
      pluginConfig.banner = "Compiled by rpgmts";
    const banners = Array.isArray(pluginConfig.banner)
      ? pluginConfig.banner
      : [pluginConfig.banner];
    output =
      banners
        .filter(Boolean)
        .map((banner) => `// ${banner}`)
        .join("\n") +
      "\n" +
      output;
  }

  mkdirSync(dirname(pluginConfig.target), { recursive: true });

  writeFileSync(pluginConfig.target, output, "utf-8");
}
