export const TEXT_TOOLS = [
  "word-counter",
  "remove-duplicate-lines",
  "case-converter",
  "text-diff",
  "url-extractor",
  "slug-generator",
  "lorem-ipsum-generator",
] as const;

export type TextToolName = typeof TEXT_TOOLS[number];
