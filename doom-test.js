import { getDirectorySize } from "./utils/getDirectorySize.js";
import logSymbols from "log-symbols";
import chalk from "chalk";
import prettyBytes from "pretty-bytes";

const doomTest = async () => {
  const args = process.argv.slice(2);
  const projectPath = args[0] || "dist";

  try {
    const bundleSize = await getDirectorySize(projectPath);
    // Use`1024 ** 2` to convert the value from bytes to megabytes;
    if (bundleSize / 1024 ** 2 < 2.39) {
      console.log(
        `${logSymbols.success} ${chalk.green("Build passed")}: ${prettyBytes(
          bundleSize
        )}`
      );
    } else {
      console.log(
        `${logSymbols.error} ${chalk.red("Build failed")}: ${prettyBytes(
          bundleSize
        )}`
      );
    }
  } catch (error) {
    console.error(`${chalk.red("Promise failed")}: ${error}`);
  }
};

export { doomTest };
