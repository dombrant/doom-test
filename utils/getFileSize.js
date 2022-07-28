import { stat } from "fs/promises";

const getFileSize = async (path, file) => {
  const cwd = process.cwd();

  const fileStats = await stat(`${cwd}/${path}/${file}`);
  return fileStats.size;
};

export { getFileSize };
