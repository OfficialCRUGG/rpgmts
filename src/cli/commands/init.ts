import { defineCommand } from "citty";
import { initWizard } from "../../core/init/wizard.js";
import { scaffoldProject } from "../../core/init/scaffold.js";
import { installProject } from "../../core/init/install.js";

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
