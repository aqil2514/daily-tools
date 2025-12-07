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
  financial: Object.values(toolsRegistry).filter(
    (t) => t.category === "financial"
  ),
};

export const sidebarSections = [
  {
    sectionTitle: "tools.category.financial-tool",
    sectionCategory: "financial",
    sectionItem: toolList.financial,
  },
  {
    sectionTitle: "tools.category.image-tool",
    sectionCategory: "image",
    sectionItem: toolList.image,
  },
  {
    sectionTitle: "tools.category.pdf-tool",
    sectionCategory: "pdf",
    sectionItem: toolList.pdf,
  },
  {
    sectionTitle: "tools.category.qr-tool",
    sectionCategory: "qr",
    sectionItem: toolList.qr,
  },
] as const;
