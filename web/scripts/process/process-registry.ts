import fs from "fs";
import { extractAllTools } from "../extract/extract-from-file";

export function processRegistryFiles(registryFiles: { file: string; fullPath: string }[]) {
  return registryFiles.map(({ file, fullPath }) => {
    const text = fs.readFileSync(fullPath, "utf8");
    const tools = extractAllTools(text, file);

    return {
      [file]: tools,
    };
  });
}
