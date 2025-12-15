export const TOOL_CATEGORIES = [
  "developer",
  "financial",
  "image",
  "pdf",
  "qr",
  "text",
  "math",
] as const;

export type ToolCategory = typeof TOOL_CATEGORIES[number];
