import { execFile, spawn } from "child_process";
import type { InitOptions } from "./wizard.js";
import path from "path";
import { access } from "fs/promises";

export async function installProject(
  packageManager: InitOptions["packageManager"],
  projectPath: string,
) {
  process.chdir(projectPath);

  /*
  await new Promise(async (resolve, reject) => {
    const child = spawn(packageManager, ["install"], { stdio: "inherit" });

    child.on("close", (code) => {
      if (code === 0) {
        resolve(true);
      } else {
        reject(new Error(`Installation failed with exit code ${code}`));
      }
    });
  });
  */
}
