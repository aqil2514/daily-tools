import { SearchableTool } from "../types";

export function groupByCategory(tools: SearchableTool[]) {
  return tools.reduce<Record<string, SearchableTool[]>>((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {});
}