import { ToolRegistry } from "@/@types/Tools";
import { imageRegistry } from "./image-registry";
import { pdfRegistry } from "./pdf-registry";
import { qrRegistry } from "./qr-registry";
import { financialRegistry } from "./financial-registry";
import { developerRegistry } from "./developer-registry";
import { textRegistry } from "./text-registry";
import { mathRegistry } from "./math-registry";

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...developerRegistry,
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
  ...financialRegistry,
  ...textRegistry,
  ...mathRegistry,
};
