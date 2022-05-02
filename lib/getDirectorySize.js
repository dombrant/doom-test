import { getFileSize } from "./getFileSize.js";
import { isItemADirectory } from "./isItemADirectory.js";
import { readdir } from "fs/promises";

const getDirectorySize = async (path) => {
  const cwd = process.cwd();
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

export { getDirectorySize };
