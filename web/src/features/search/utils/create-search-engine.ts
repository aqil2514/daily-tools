// src/features/search/utils/create-search-engine.ts
import Fuse from "fuse.js";
import { SearchableTool } from "../types";

export function createToolSearchEngine(tools: SearchableTool[]) {
  return new Fuse(tools, {
    keys: [
      { name: "title", weight: 0.5 },
      { name: "description", weight: 0.3 },
      { name: "keywords", weight: 0.2 },
    ],
    threshold: 0.3,
    ignoreLocation: true,
    includeScore: true,
  });
}
