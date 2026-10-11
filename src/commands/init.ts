import { defineCommand } from "citty";
import { initWizard } from "../lib/init-wizard.js";
import { scaffoldProject } from "../lib/init-scaffold.js";
import { installProject } from "../lib/init-install.js";

export const initCommand = defineCommand({
  meta: {
    name: "init",
    description: "Initialize a new rpgmts project",
  },
  args: {
    path: {
      type: "positional",
      description: "Directory to initialize the project in",
      required: false,
    },
  },

  async run({ args }) {
    const data = await initWizard(args.path);
    await scaffoldProject(data);
    await installProject(data.packageManager, data.path);
  },
});
