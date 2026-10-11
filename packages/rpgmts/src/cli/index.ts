#!/usr/bin/env node

import { defineCommand, runMain } from "citty";
import { buildCommand } from "./commands/build.js";
import { initCommand } from "./commands/init.js";

const main = defineCommand({
  meta: {
    name: "rpgmts",
    version: "1.0.0",
    description: "Toolkit for building RPG Maker MV/MZ plugins with TypeScript",
  },
  subCommands: {
    build: buildCommand,
    init: initCommand,
  },
});

runMain(main);
