import { getDirectorySize } from "./lib/getDirectorySize.js";
import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";

const args = process.argv.slice(2);
const projectPath = args[0] || "dist";

const bundleSize = await getDirectorySize(projectPath);
console.log(bundleSize);

// try {
//   const files = await readdir(`${cwd}/${projectPath}`);
//   let bundleSize = 0;

//   for (const file of files) {
//     const fileSize = await getFileSize(projectPath, file);
//     bundleSize += fileSize;
//   }

//   console.log(bundleSize);
// } catch (error) {
//   console.log(`Promise failed: ${error}`);
// }
