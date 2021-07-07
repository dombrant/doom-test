import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";
import { stat } from "fs/promises";

const args = process.argv.slice(2);
const directory = args[0] || "dist";
const cwd = process.cwd();

try {
  const bundleFolder = await stat(`${cwd}/${directory}`);

  console.log(bundleFolder.size);
} catch (error) {
  console.log("Promise failed");
}
