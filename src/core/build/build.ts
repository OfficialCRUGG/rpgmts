import { type PluginConfig } from "../../schema/config.js";
import * as esbuild from "esbuild";
import { mkdirSync, writeFileSync } from "node:fs";
import { assembleHeader } from "./header.js";
import { dirname } from "node:path";

export async function buildPlugin(pluginConfig: PluginConfig) {
  const result = await esbuild.build(createBuildOptions(pluginConfig));

  let output = result.outputFiles?.[0]?.text;

  if (!output) throw new Error("Build failed: no output generated.");

  output = transformOutput(output);

  const header = assembleHeader(pluginConfig.metadata);
  output = header + "\n" + output;

  output = getBanner(pluginConfig.banner) + output;

  mkdirSync(dirname(pluginConfig.target), { recursive: true });

  writeFileSync(pluginConfig.target, output, "utf-8");
}

function createBuildOptions(pluginConfig: PluginConfig): esbuild.BuildOptions {
  return {
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
  };
}

function transformOutput(output: string): string {
  return output.replace(
    /^"use strict";\n\(\(\) => \{/,
    '(() => {\n  "use strict";',
  );
}

function getBanner(banner?: PluginConfig["banner"]) {
  if (banner === false) return "";
  const banners = Array.isArray(banner)
    ? banner
    : [banner ?? "Compiled by rpgmts"];
  return (
    banners
      .filter(Boolean)
      .map((b) => `// ${b}`)
      .join("\n") + "\n"
  );
}
