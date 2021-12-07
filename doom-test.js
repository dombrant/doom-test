import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";
import { readdir, stat } from "fs/promises";

const args = process.argv.slice(2);
const cwd = process.cwd();
const path = args[0] || "dist";

const getFileSize = async (file) => {
  const fileStats = await stat(`${cwd}/${path}/${file}`);
  return fileStats.size;
};

try {
  const files = await readdir(`${cwd}/${path}`);
  let bundleSize = 0;

  for (const file of files) {
    const fileSize = await getFileSize(file);
    bundleSize += fileSize;
  }

  console.log(bundleSize);
} catch (error) {
  console.log(`Promise failed: ${error}`);
}
