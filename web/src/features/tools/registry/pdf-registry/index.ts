import { PDFToolName, ToolRegistryItem } from "@/@types/Tools";
import { pdfRegistry01 } from "./01-pdf-registry";

export const pdfRegistry: Record<PDFToolName, ToolRegistryItem> = {
  ...pdfRegistry01,
};

export const pdfToolNames = Object.keys(pdfRegistry) as PDFToolName[];
