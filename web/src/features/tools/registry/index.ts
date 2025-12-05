import { ToolName, ToolRegistry } from "@/@types/Tools";
import { imageRegistry, imageToolNames } from "./imageRegistry";
import { pdfRegistry, pdfToolNames } from "./pdfRegistry";
import { qrRegistry, qrToolNames } from "./qrRegistry";
import { financialRegistry, financialToolNames } from "./financialRegistry";

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
  ...financialRegistry,
};

export const allToolNames = [
  ...imageToolNames,
  ...pdfToolNames,
  ...qrToolNames,
  ...financialToolNames,
] as ToolName[];

export const toolList = {
  image: Object.values(toolsRegistry).filter((t) => t.category === "image"),
  pdf: Object.values(toolsRegistry).filter((t) => t.category === "pdf"),
  qr: Object.values(toolsRegistry).filter((t) => t.category === "qr"),
  fiancial: Object.values(toolsRegistry).filter(
    (t) => t.category === "financial"
  ),
};

export const sidebarSections = [
  {
    sectionTitle: "tools.category.financial-tool",
    sectionItem: toolList.fiancial,
  },
  {
    sectionTitle: "tools.category.image-tool",
    sectionItem: toolList.image,
  },
  {
    sectionTitle: "tools.category.pdf-tool",
    sectionItem: toolList.pdf,
  },
  {
    sectionTitle: "tools.category.qr-tool",
    sectionItem: toolList.qr,
  },
] as const;
