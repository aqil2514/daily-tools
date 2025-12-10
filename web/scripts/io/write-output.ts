import fs from "fs";
import path from "path";

export function writeOutput(dir: string, fileName: string, content: string) {
  const outPath = path.join(dir, fileName);
  fs.writeFileSync(outPath, content, "utf8");
  console.log(`README generated → ${outPath}`);
}
