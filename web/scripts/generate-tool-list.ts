import { ToolCategoryName } from "@/@types/tools/categories";
import { toolsRegistry } from "@/features/tools/registry";
import fs from "fs";
import path from "path";

type Tool = {
  category: string;
  title: {
    en: string;
    id: string;
  };
};

const CATEGORY_ORDER:ToolCategoryName[] = [
  "conversion",
  "developer",
  "image",
  "financial",
  'health',
  "math",
  "pdf",
  "qr",
  "text",
  "utility"
];

const CATEGORY_LABEL: Record<string, string> = {
  developer: "Developer Tools",
  image: "Image Tools",
  pdf: "PDF Tools",
  qr: "QR Tools",
  financial: "Financial Tools",
  health: "Health Tools",
  text: "Text Tools",
  math: "Math Tools",
};

function groupByCategory(tools: Record<string, Tool>) {
  const grouped: Record<string, Tool[]> = {};

  Object.values(tools).forEach((tool) => {
    if (!grouped[tool.category]) {
      grouped[tool.category] = [];
    }
    grouped[tool.category].push(tool);
  });

  return grouped;
}

export function generateToolList() {
  const grouped = groupByCategory(toolsRegistry);
  const totalTools = Object.values(toolsRegistry).length;

  let md = `# Tool List (Internal)\n`;
  md += `Total tools: ${totalTools}\n\n`;

  CATEGORY_ORDER.forEach((category) => {
    const tools = grouped[category];
    if (!tools || tools.length === 0) return;

    const label = CATEGORY_LABEL[category] ?? category;
    md += `## ${label} (${tools.length})\n`;

    tools.forEach((tool, index) => {
      md += `${index + 1}. ${tool.title.en} | ${tool.title.id}\n`;
    });

    md += `\n`;
  });

  md += `---\n`;
  md += `⚠️ File ini dihasilkan secara otomatis.\n`;
  md += `Jangan diedit manual.\n`;

  const outputPath = path.join(process.cwd(), "tool-list.md");
  fs.writeFileSync(outputPath, md, "utf-8");

  console.info("✅ tool-list.md generated");
}
