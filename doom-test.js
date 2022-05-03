import { getDirectorySize } from "./lib/getDirectorySize.js";
import logSymbols from "log-symbols";
import chalk from "chalk";

const args = process.argv.slice(2);
const projectPath = args[0] || "dist";

try {
  // Convert bundle size from bytes to megabytes
  const bundleSize = (await getDirectorySize(projectPath)) / 1024 ** 2;
  if (bundleSize < 2.39) {
    console.log(`${chalk.green("Build passed")}: ${bundleSize.toFixed(2)}MB`);
  } else {
    console.log(`${chalk.red("Build failed")}: ${bundleSize.toFixed(2)}MB`);
  }
} catch (error) {
  console.error(`${chalk.red("Promise failed")}: ${error}`);
}
