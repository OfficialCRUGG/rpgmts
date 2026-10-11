import { type PluginParameter } from "../schema/parameters.js";
import { type PluginMetadata } from "../schema/plugin.js";

export function assembleHeader(metadata: PluginMetadata): string {
  const headerLines: string[] = [];

  function pushLine(line: string) {
    headerLines.push(` * ${line}`);
  }

  function pushAnnotation(
    annotation: string,
    value?: string | string[] | number | number[] | boolean | boolean[],
  ) {
    if (Array.isArray(value)) {
      value.forEach((v) => pushLine(`@${annotation} ${v}`));
    } else if (value !== undefined) {
      pushLine(`@${annotation} ${value}`);
    } else {
      pushLine(`@${annotation}`);
    }
  }

  function pushSpacer(count: number = 1) {
    for (let i = 0; i < count; i++) {
      pushLine("");
    }
  }

  function pushParam(annotation: "param" | "arg", param: PluginParameter) {
    pushSpacer();
    pushAnnotation(annotation, param.name);
    pushAnnotation("text", param.text);

    if (param.desc) pushAnnotation("desc", param.desc);
    if (param.default) {
      if (
        param.type.startsWith("struct<") &&
        param.type.endsWith(">[]") &&
        Array.isArray(param.default)
      ) {
        pushAnnotation(
          "default",
          JSON.stringify(param.default.map((item) => JSON.stringify(item))),
        );
      } else {
        pushAnnotation(
          "default",
          typeof param.default === "string"
            ? param.default
            : JSON.stringify(param.default),
        );
      }
    }
    if (param.type) pushAnnotation("type", param.type);

    if ("min" in param && param.min !== undefined)
      pushAnnotation("min", param.min);
    if ("max" in param && param.max !== undefined)
      pushAnnotation("max", param.max);
    if ("decimals" in param && param.decimals !== undefined)
      pushAnnotation("decimals", param.decimals);
    if ("you" in param && param.you) pushAnnotation("you", param.you);
    if ("on" in param && param.on) pushAnnotation("on", param.on);
    if ("off" in param && param.off) pushAnnotation("off", param.off);
    if ("options" in param && param.options) {
      for (const option of param.options) {
        pushAnnotation("option", option);
        if (
          "values" in param &&
          param.values?.[param.options.indexOf(option)]
        ) {
          pushAnnotation("value", param.values[param.options.indexOf(option)]);
        }
      }
    }
    if (param.parent) pushAnnotation("parent", param.parent);
  }

  headerLines.push("/*:");

  // General Metadata
  if ("target" in metadata && metadata.target === "mz") {
    pushAnnotation("target", "mz");
  }
  if (metadata.plugindesc) pushAnnotation("plugindesc", metadata.plugindesc);
  if (metadata.author) pushAnnotation("author", metadata.author);
  if (metadata.help) {
    pushAnnotation("help");
    metadata.help.split("\n").forEach(pushLine);
  }
  if ("url" in metadata && metadata.url) pushAnnotation("url", metadata.url);
  if ("base" in metadata && metadata.base)
    pushAnnotation("base", metadata.base);
  if ("orderAfter" in metadata && metadata.orderAfter)
    pushAnnotation("orderAfter", metadata.orderAfter);
  if ("orderBefore" in metadata && metadata.orderBefore)
    pushAnnotation("orderBefore", metadata.orderBefore);
  if (metadata.requiredAssets)
    pushAnnotation("requiredAssets", metadata.requiredAssets);

  // Parameters
  if (metadata.params) {
    for (const param of metadata.params) {
      pushParam("param", param);
    }
  }

  // Commands
  if ("commands" in metadata && metadata.commands) {
    for (const command of metadata.commands) {
      pushSpacer(2);
      pushAnnotation("command", command.name);
      pushAnnotation("text", command.text);
      if (command.desc) pushAnnotation("desc", command.desc);

      if (command.args) {
        pushSpacer();
        for (const arg of command.args) {
          pushParam("arg", arg);
        }
      }
    }
  }

  headerLines.push(" */");

  // Structs
  if (metadata.structs) {
    for (const struct of metadata.structs) {
      headerLines.push(`/*~struct~${struct.name}:`);
      for (const param of struct.params) {
        pushParam("param", param);
      }
      headerLines.push(" */");
    }
  }

  return headerLines.join("\n");
}
