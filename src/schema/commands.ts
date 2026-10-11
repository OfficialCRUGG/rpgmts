import { type PluginParameter } from "./parameters.js";

export interface PluginCommand {
  name: string;
  text: string;
  desc?: string;
  args?: PluginParameter[];
}
