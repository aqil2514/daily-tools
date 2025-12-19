// src/features/search/utils/build-search-index.ts
import { ToolRegistry } from "@/@types/Tools";
import { SearchableTool } from "../types";

export function buildSearchIndex(
  toolsRegistry: ToolRegistry,
  locale: "en" | "id"
): SearchableTool[] {
  return Object.entries(toolsRegistry).map(([name, tool]) => {
    const metadata = tool.seo.metadata;

    return {
      name,
      href: tool.href,
      category: tool.category,
      title: metadata.title[locale],
      description: metadata.description[locale],
      keywords: metadata.keywords?.[locale] ?? [],
    };
  });
}
