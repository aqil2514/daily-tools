export * from "./developer";
export * from "./financial";
export * from "./image";
export * from "./pdf";
export * from "./qr";
export * from "./text";
export * from "./math";
export * from "./categories";

import type { DeveloperToolName } from "./developer";
import type { FinancialToolName } from "./financial";
import type { ImageToolName } from "./image";
import type { PDFToolName } from "./pdf";
import type { QRToolName } from "./qr";
import type { TextToolName } from "./text";
import type { MathToolName } from "./math";

export type ToolName =
  | DeveloperToolName
  | FinancialToolName
  | ImageToolName
  | PDFToolName
  | QRToolName
  | TextToolName
  | MathToolName;
