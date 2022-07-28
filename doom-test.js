import { getDirectorySize } from "./utils/getDirectorySize.js";
import logSymbols from "log-symbols";
import chalk from "chalk";
import prettyBytes from "pretty-bytes";

const args = process.argv.slice(2);
const projectPath = args[0] || "dist";

try {
  const bundleSize = await getDirectorySize(projectPath);
  // Use`1024 ** 2` to convert the value from bytes to megabytes;
  if (bundleSize / 1024 ** 2 < 2.39) {
    console.log(
      `${chalk.green("Build passed")}: ${prettyBytes(bundleSize)} ${
        logSymbols.success
      }`
    );
  } else {
    console.log(
      `${chalk.red("Build failed")}: ${prettyBytes(bundleSize)} ${
        logSymbols.error
      }`
    );
  }
} catch (error) {
  console.error(`${chalk.red("Promise failed")}: ${error}`);
}
