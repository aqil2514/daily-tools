import { ToolName, ToolRegistry } from "@/@types/Tools";
import { imageRegistry, imageToolNames } from "./imageRegistry";
import { pdfRegistry, pdfToolNames } from "./pdfRegistry";
import { qrRegistry, qrToolNames } from "./qrRegistry";
import { financialRegistry, financialToolNames } from "./financialRegistry";
import { developerRegistry, developerToolNames } from "./developerRegistry";

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...developerRegistry,
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
  ...financialRegistry,
};

export const allToolNames = [
  ...developerToolNames,
  ...imageToolNames,
  ...pdfToolNames,
  ...qrToolNames,
  ...financialToolNames,
] as ToolName[];

export const toolList = {
  developer: Object.values(toolsRegistry).filter(
    (t) => t.category === "developer"
  ),
  financial: Object.values(toolsRegistry).filter(
    (t) => t.category === "financial"
  ),
  image: Object.values(toolsRegistry).filter((t) => t.category === "image"),
  pdf: Object.values(toolsRegistry).filter((t) => t.category === "pdf"),
  qr: Object.values(toolsRegistry).filter((t) => t.category === "qr"),
};

export const sidebarSections = [
  {
    sectionTitle: "tools.category.developer-tool",
    sectionCategory: "developer",
    sectionItem: toolList.developer,
  },
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
