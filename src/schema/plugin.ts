import { type PluginCommand } from "./commands.js";
import { type PluginParameter } from "./parameters.js";
import { type PluginStruct } from "./structs.js";

export interface PluginMetadataMz {
  target: "mz";
  plugindesc?: string;
  author?: string;
  help?: string;
  url?: string;
  base?: string | string[];
  orderAfter?: string | string[];
  orderBefore?: string | string[];
  requiredAssets?: string | string[];

  params?: PluginParameter[];
  commands?: PluginCommand[];
  structs?: PluginStruct[];
}

export interface PluginMetadataMv {
  plugindesc?: string;
  author?: string;
  help?: string;
  requiredAssets?: string | string[];

  params?: PluginParameter[];
  structs?: PluginStruct[];
}

export type PluginMetadata = PluginMetadataMz | PluginMetadataMv;
