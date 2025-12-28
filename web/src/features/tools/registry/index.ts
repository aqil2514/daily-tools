import { ToolRegistry } from "@/@types/Tools";
import { imageRegistry } from "./image-registry";
import { pdfRegistry } from "./pdf-registry";
import { qrRegistry } from "./qr-registry";
import { financialRegistry } from "./financial-registry";
import { developerRegistry } from "./developer-registry";
import { textRegistry } from "./text-registry";
import { mathRegistry } from "./math-registry";
import { utilityRegistry } from "./utility-registry";
import { conversionRegistry } from "./conversion-registry";
import { healthRegistry } from "./health-registry";
import { dataRegistry } from "./data-registry";

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...dataRegistry,
  ...developerRegistry,
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
  ...financialRegistry,
  ...textRegistry,
  ...mathRegistry,
  ...utilityRegistry,
  ...conversionRegistry,
  ...healthRegistry,
};
