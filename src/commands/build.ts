import { loadConfig } from "c12";
import { defineCommand } from "citty";
import { type RpgmtsConfig, type PluginConfig } from "../schema/config.js";
import { buildPlugin } from "../lib/build.js";
import { consola } from "consola";

export const buildCommand = defineCommand({
  meta: {
    name: "build",
    description: "Build the project",
  },
  args: {
    directory: {
      type: "positional",
      description: "Directory",
      required: false,
    },
  },
  async run({ args }) {
    consola.start("Building...");
    const { config } = await loadConfig<RpgmtsConfig>({
      cwd: args.directory ?? undefined,
      name: "rpgmts",
      rcFile: false,
      packageJson: true,
      defaults: {},
    });

    try {
      if ("plugins" in config) {
        for (const plugin of config.plugins ?? []) {
          await buildPlugin(plugin);
        }
      } else {
        await buildPlugin(config as PluginConfig);
      }
      consola.success("Build completed successfully.");
    } catch (error) {
      consola.error(error);
    }
  },
});
