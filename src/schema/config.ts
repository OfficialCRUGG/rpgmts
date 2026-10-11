import { type PluginMetadata } from "./plugin.js";

export interface PluginConfig {
  entrypoint: string | string[];
  target: string;
  metadata: PluginMetadata;
  minify?: boolean;
  banner?: string | string[] | false;
}

export interface PluginConfigMultiple {
  plugins?: PluginConfig[];
}

export type RpgmtsConfig = PluginConfig | PluginConfigMultiple;
