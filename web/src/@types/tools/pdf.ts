export const PDF_TOOLS = [
  "pdf-merge",
  "pdf-split",
  "pdf-generator",
] as const;

export type PDFToolName = typeof PDF_TOOLS[number];
