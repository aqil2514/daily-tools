import { ToolName, ToolRegistry } from "@/@types/Tools";
import { imageRegistry, imageToolNames } from "./imageRegistry";
import { pdfRegistry, pdfToolNames } from "./pdfRegistry";
import { qrRegistry, qrToolNames } from "./qrRegistry";
import { financialRegistry, financialToolNames } from "./financialRegistry";
import { developerRegistry, developerToolNames } from "./developerRegistry";
import { textRegistry, textToolName } from "./textRegistry";

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...developerRegistry,
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
  ...financialRegistry,
  ...textRegistry,
};

export const allToolNames = [
  ...developerToolNames,
  ...imageToolNames,
  ...pdfToolNames,
  ...qrToolNames,
  ...financialToolNames,
  ...textToolName,
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
  text: Object.values(textRegistry).filter((t) => t.category === "text"),
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
  {
    sectionTitle: "tools.category.text-tool",
    sectionCategory: "text",
    sectionItem: toolList.text,
  },
] as const;
