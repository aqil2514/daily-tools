import fs from "fs";
import path from "path";

export function getRegistryFiles(dir: string, match: string) {
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.includes(match))
    .map((file) => ({
      file,
      fullPath: path.join(dir, file),
    }));
}
