import { getDirectorySize } from "./lib/getDirectorySize.js";
import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";

const args = process.argv.slice(2);
const projectPath = args[0] || "dist";

try {
  // Convert bundle size from bytes to megabytes
  const bundleSize = (await getDirectorySize(projectPath)) / 1024 ** 2;
  if (bundleSize < 2.39) {
    console.log(`${chalk.green("Build passed")}: ${bundleSize}MB`);
  } else {
    console.log(`${chalk.red("Build failed")}: ${bundleSize}MB`);
  }
} catch (error) {
  console.error(`${chalk.red("Promise failed")}: ${error}`);
}
