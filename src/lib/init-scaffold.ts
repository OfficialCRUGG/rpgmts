import { basename, join } from "path";
import type { InitOptions } from "./init-wizard.js";
import {
  copyFile,
  mkdir,
  readdir,
  readFile,
  stat,
  writeFile,
} from "fs/promises";
import Handlebars from "handlebars";
import consola from "consola";

const TEMPLATE_DIRECTORY = join(import.meta.dirname, "../../templates");

export async function scaffoldProject(options: InitOptions): Promise<void> {
  consola.start("Setting up project...");
  const templateDirectory = join(TEMPLATE_DIRECTORY, options.starter);

  await ensureDirectory(templateDirectory);

  await renderDirectory(
    templateDirectory,
    options.path,
    createTemplateContext(options),
  );
  consola.success("Project setup complete.");
}

interface TemplateContext {
  name: string;
  target: InitOptions["target"];
  packageManager: InitOptions["packageManager"];

  isMV: boolean;
  isMZ: boolean;
}
function createTemplateContext(options: InitOptions): TemplateContext {
  return {
    name: options.name,
    target: options.target,
    packageManager: options.packageManager,

    isMV: options.target === "mv",
    isMZ: options.target === "mz",
  };
}

async function renderDirectory(
  sourceDirectory: string,
  destinationDirectory: string,
  context: TemplateContext,
): Promise<void> {
  await mkdir(destinationDirectory, { recursive: true });

  const entries = await readdir(sourceDirectory, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = join(sourceDirectory, entry.name);

    if (entry.isDirectory()) {
      const destinationPath = join(destinationDirectory, entry.name);

      await renderDirectory(sourcePath, destinationPath, context);
    } else if (entry.isFile()) {
      await renderFile(sourcePath, destinationDirectory, context);
    }
  }
}

async function renderFile(
  sourcePath: string,
  destinationDirectory: string,
  context: TemplateContext,
): Promise<void> {
  const filename = basename(sourcePath);

  if (!filename.endsWith(".hbs")) {
    await copyFile(sourcePath, join(destinationDirectory, filename));

    return;
  }

  const template = await readFile(sourcePath, "utf-8");
  const output = Handlebars.compile(template)(context);

  const destinationFilename = filename.replace(/\.hbs$/, "");

  await writeFile(
    join(destinationDirectory, destinationFilename),
    output,
    "utf-8",
  );
}

async function ensureDirectory(path: string): Promise<void> {
  const info = await stat(path).catch(() => undefined);

  if (!info) {
    throw new Error(`Template directory does not exist: ${path}`);
  }

  if (!info.isDirectory()) {
    throw new Error(`Template path is not a directory: ${path}`);
  }
}
