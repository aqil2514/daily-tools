import { SearchableTool } from "../types";

export function flattenResults(
  grouped: Record<string, SearchableTool[]>
): SearchableTool[] {
  return Object.values(grouped).flat();
}
