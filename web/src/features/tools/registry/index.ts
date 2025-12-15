import {  ToolRegistry, ToolRegistryItem } from "@/@types/Tools";
import { imageRegistry, imageToolNames } from "./image-registry";
import { pdfRegistry, pdfToolNames } from "./pdf-registry";
import { qrRegistry, qrToolNames } from "./qr-registry";
import { financialRegistry, financialToolNames } from "./financial-registry";
import { developerRegistry, developerToolNames } from "./developer-registry";
import { textRegistry, textToolName } from "./text-registry";
import { mathRegistry, mathToolNames } from "./math-registry";
import { ToolName } from "@/@types/tools/index";

export const toolsCategory: ToolRegistryItem["category"][] = [
  "developer",
  "financial",
  "image",
  "pdf",
  "qr",
  "text",
];

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...developerRegistry,
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
  ...financialRegistry,
  ...textRegistry,
  ...mathRegistry
};

export const allToolNames = [
  ...developerToolNames,
  ...imageToolNames,
  ...pdfToolNames,
  ...qrToolNames,
  ...financialToolNames,
  ...textToolName,
  ...mathToolNames
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
  math: Object.values(mathRegistry).filter((t) => t.category === "math"),
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
  {
    sectionTitle: "tools.category.math-tools",
    sectionCategory: "math",
    sectionItem: toolList.math,
  },
] as const;
