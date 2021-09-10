import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";
import { readdir, stat } from "fs/promises";

const args = process.argv.slice(2);
const cwd = process.cwd();
const path = args[0] || "dist";

try {
  const bundleFolder = await stat(`${cwd}/${path}`);

  console.log(bundleFolder.size);
} catch (error) {
  console.log("Promise failed");
}
