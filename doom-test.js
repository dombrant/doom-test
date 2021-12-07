import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";
import { readdir, stat } from "fs/promises";
import { statSync } from "fs";

const args = process.argv.slice(2);
const cwd = process.cwd();
const projectPath = args[0] || "dist";

const getFileSize = async (path, file) => {
  const fileStats = await stat(`${cwd}/${path}/${file}`);
  return fileStats.size;
};

const isItemADirectory = (path) => {
  const pathItemsStat = statSync(`${cwd}/${path}`);
  return pathItemsStat.isDirectory();
};

const getDirectorySize = async (path) => {
  let directorySize = 0;
  const pathItems = await readdir(`${cwd}/${path}`);

  for (const item of pathItems) {
    // If there is another folder within the folder "path", get the size of that folder
    // Otherwise, get the size of the item if it is a file
    if (isItemADirectory(`${path}/${item}`)) {
      const subDirectorySize = await getDirectorySize(item);
      directorySize += subDirectorySize;
    } else {
      const itemSize = await getFileSize(path, item);
      directorySize += itemSize;
    }
  }

  return directorySize;
};

await getDirectorySize("test").then((size) => console.log(size));

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
