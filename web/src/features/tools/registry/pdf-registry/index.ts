import { ToolRegistryItem } from "@/@types/Tools";
import { pdfRegistry01 } from "./01-pdf-registry";
import { PDFToolName } from "@/@types/tools/pdf";

export const pdfRegistry: Record<PDFToolName, ToolRegistryItem> = {
  ...pdfRegistry01,
};
