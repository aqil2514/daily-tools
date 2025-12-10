import fs from "fs";

function extractInfoFromFile(content: string) {
  const titleEn = content.match(/title:\s*{\s*en:\s*"([^"]+)"/)?.[1] || null;
  const descriptionId =
    content.match(/description:\s*{[\s\S]*?id:\s*"([^"]+)"/)?.[1] || null;

  return { titleEn, descriptionId };
}

export function extractFromFiles(filePaths: string[]) {
  return filePaths.map((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    const { titleEn, descriptionId } = extractInfoFromFile(content);

    return {
      filePath,
      titleEn,
      descriptionId,
    };
  });
}

export function extractAllTools(content: string, pathFile: string) {
  const toolRegex = /"([^"]+)"\s*:\s*{([\s\S]*?)}\s*,/g;
  const results = [];

  let match;
  while ((match = toolRegex.exec(content)) !== null) {
    const key = match[1];
    const block = match[2];

    const titleEn =
      block.match(/title:\s*{[\s\S]*?en:\s*"([^"]+)"/)?.[1] || null;

    const titleId =
      block.match(/title:\s*{[\s\S]*?id:\s*"([^"]+)"/)?.[1] || null;

    results.push({
      pathFile,
      key,
      titleEn,
      titleId,
    });
  }

  return results;
}
