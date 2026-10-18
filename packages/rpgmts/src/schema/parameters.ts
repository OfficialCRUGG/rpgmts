export interface PluginParameterBase {
  name: string;
  text: string;
  desc?: string;
  parent?: string;
}

export interface PluginNumberParameter extends PluginParameterBase {
  default?: number;
  type: "number";
  min?: number;
  max?: number;
  decimals?: number;
}
export interface PluginNumberArrayParameter extends PluginParameterBase {
  default?: number[];
  type: "number[]";
  min?: number;
  max?: number;
  decimals?: number;
}

export interface PluginFileParameter extends PluginParameterBase {
  default?: string;
  type: "file";
  you?: string;
}
export interface PluginFileArrayParameter extends PluginParameterBase {
  default?: string[];
  type: "file[]";
  you?: string;
}

export interface PluginBooleanParameter extends PluginParameterBase {
  default?: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
export interface PluginBooleanArrayParameter extends PluginParameterBase {
  default?: boolean[];
  type: "boolean[]";
  on?: string;
  off?: string;
}

export interface PluginSelectParameter extends PluginParameterBase {
  default?: string;
  type: "select";
  options?: string[];
  values?: string[];
}
export interface PluginSelectArrayParameter extends PluginParameterBase {
  default?: string[];
  type: "select[]";
  options?: string[];
  values?: string[];
}

export interface PluginComboParameter extends PluginParameterBase {
  default?: string;
  type: "combo";
  options?: string[];
}
export interface PluginComboArrayParameter extends PluginParameterBase {
  default?: string[];
  type: "combo[]";
  options?: string[];
}

/**
 * multiline_string is only available in MZ.
 */
export interface PluginStringParameter extends PluginParameterBase {
  default?: string;
  type: "string" | "multiline_string";
}
export interface PluginStringArrayParameter extends PluginParameterBase {
  default?: string[];
  type: "string[]" | "multiline_string[]";
}

export interface PluginNoteParameter extends PluginParameterBase {
  default?: string;
  type: "note";
}
export interface PluginNoteArrayParameter extends PluginParameterBase {
  default?: string[];
  type: "note[]";
}

export interface PluginDatabaseIdParameter extends PluginParameterBase {
  default?: number;
  type:
    | "actor"
    | "class"
    | "skill"
    | "item"
    | "weapon"
    | "armor"
    | "enemy"
    | "troop"
    | "state"
    | "animation"
    | "tiled"
    | "common_event"
    | "map"
    | "switch"
    | "variable";
}
export interface PluginDatabaseIdArrayParameter extends PluginParameterBase {
  default?: number[];
  type:
    | "actor[]"
    | "class[]"
    | "skill[]"
    | "item[]"
    | "weapon[]"
    | "armor[]"
    | "enemy[]"
    | "troop[]"
    | "state[]"
    | "animation[]"
    | "tiled[]"
    | "common_event[]"
    | "map[]"
    | "switch[]"
    | "variable[]";
}

export interface PluginStructParameter extends PluginParameterBase {
  default?: Record<string, unknown>;
  type: `struct<${string}>`;
}
export interface PluginStructArrayParameter extends PluginParameterBase {
  default?: Record<string, unknown>[];
  type: `struct<${string}>[]`;
}

/**
 * Only available in MZ.
 */
export interface PluginLocationParameter extends PluginParameterBase {
  default?: { mapId: number; x: number; y: number };
  type: "location";
}
/**
 * Only available in MZ.
 */
export interface PluginLocationArrayParameter extends PluginParameterBase {
  default?: { mapId: number; x: number; y: number }[];
  type: "location[]";
}

/**
 * Only available in MZ.
 */
export interface PluginColorParameter extends PluginParameterBase {
  default?: string;
  type: "color";
}
/**
 * Only available in MZ.
 */
export interface PluginColorArrayParameter extends PluginParameterBase {
  default?: string[];
  type: "color[]";
}

/**
 * Only available in MZ.
 */
export interface PluginIconParameter extends PluginParameterBase {
  default?: number;
  type: "icon";
}
/**
 * Only available in MZ.
 */
export interface PluginIconArrayParameter extends PluginParameterBase {
  default?: number[];
  type: "icon[]";
}

export type PluginParameter =
  | PluginNumberParameter
  | PluginNumberArrayParameter
  | PluginFileParameter
  | PluginFileArrayParameter
  | PluginBooleanParameter
  | PluginBooleanArrayParameter
  | PluginSelectParameter
  | PluginSelectArrayParameter
  | PluginComboParameter
  | PluginComboArrayParameter
  | PluginStringParameter
  | PluginStringArrayParameter
  | PluginDatabaseIdParameter
  | PluginDatabaseIdArrayParameter
  | PluginStructParameter
  | PluginStructArrayParameter
  | PluginNoteParameter
  | PluginNoteArrayParameter
  | PluginColorParameter
  | PluginColorArrayParameter
  | PluginLocationParameter
  | PluginLocationArrayParameter
  | PluginIconParameter
  | PluginIconArrayParameter;
