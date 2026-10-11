import {
  cancel,
  confirm,
  intro,
  isCancel,
  outro,
  text,
  select,
} from "@clack/prompts";
import consola from "consola";
import { readdir, stat } from "fs/promises";
import { basename, resolve } from "path";

export interface InitOptions {
  path: string;
  starter: "single";
  target: "mv" | "mz";
  name: string;
  packageManager: "npm" | "yarn" | "pnpm" | "bun" | "deno" | "aube" | "nub";
}

const packageManagerOptions: InitOptions["packageManager"][] = [
  "npm",
  "yarn",
  "pnpm",
  "bun",
  "deno",
  "aube",
  "nub",
];

export async function initWizard(initialPath?: string): Promise<InitOptions> {
  intro("Create a new rpgmts project");

  const projectPath = await promptPath(initialPath);
  const starter = await promptStarter();
  const target = await promptTarget();
  const name = await promptName(projectPath, starter);
  // const packageManager = await promptPackageManager();
  const packageManager = "npm";

  outro("Project configuration complete.");

  return {
    path: projectPath,
    starter,
    target,
    name,
    packageManager,
  };
}

async function promptPath(initialPath?: string): Promise<string> {
  const result = await text({
    message: "Where should the project be created?",
    defaultValue: initialPath ?? process.cwd(),
    initialValue: initialPath ?? process.cwd(),

    validate(value) {
      if (!value?.trim()) {
        return "Please enter a path.";
      }
    },
  });

  if (isCancel(result)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const projectPath = resolve(result);

  const error = await validateProjectPath(projectPath);

  if (error) {
    consola.error(error);
    return promptPath(projectPath);
  }

  const entries = await readdir(projectPath).catch(() => []);

  if (entries.length > 0) {
    const proceed = await confirm({
      message:
        "The selected directory is not empty. Do you want to continue anyway?",
      initialValue: false,
    });

    if (isCancel(proceed)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

    if (!proceed) {
      return promptPath(projectPath);
    }
  }

  return projectPath;
}

async function validateProjectPath(
  projectPath: string,
): Promise<string | undefined> {
  try {
    const info = await stat(projectPath);

    if (!info.isDirectory()) {
      return "The selected path is a file.";
    }

    return;
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;

    if (code !== "ENOENT") {
      return "The path could not be accessed.";
    }
  }
}

async function promptStarter(): Promise<InitOptions["starter"]> {
  const result = await select<InitOptions["starter"]>({
    message: "Select a starter template",
    options: [
      { value: "single", label: "Single Plugin" },
      // { value: "multiple", label: "Multiple Plugins" },
    ],
    initialValue: "single",
  });

  if (isCancel(result)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return result;
}

async function promptTarget(): Promise<InitOptions["target"]> {
  const result = await select<InitOptions["target"]>({
    message: "Which release of RPG Maker are you targeting?",
    options: [
      { value: "mv", label: "RPG Maker MV" },
      { value: "mz", label: "RPG Maker MZ" },
    ],
    initialValue: "mz",
  });

  if (isCancel(result)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return result;
}

async function promptName(
  projectPath: string,
  starter: InitOptions["starter"],
): Promise<string> {
  const result = await text({
    message: `Enter a name for your ${starter === "single" ? "plugin" : "first plugin"}.`,
    defaultValue: basename(projectPath),
    initialValue: basename(projectPath),

    validate(value) {
      if (!value?.trim()) {
        return "Please enter a plugin name.";
      }
    },
  });

  if (isCancel(result)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return result;
}

async function promptPackageManager(): Promise<InitOptions["packageManager"]> {
  const result = await select<InitOptions["packageManager"]>({
    message: "Select a package manager to use for this project",
    options: packageManagerOptions.map((value) => ({ value, label: value })),
    initialValue: "npm",
  });

  if (isCancel(result)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return result;
}
