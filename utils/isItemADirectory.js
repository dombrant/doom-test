import { statSync } from "fs";

const isItemADirectory = (path) => {
  const cwd = process.cwd();

  const pathItemsStat = statSync(`${cwd}/${path}`);
  return pathItemsStat.isDirectory();
};

export { isItemADirectory };
