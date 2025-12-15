import {  ToolRegistryItem } from "@/@types/Tools";
import { qrRegistry01 } from "./01-qr-registry";
import { QRToolName } from "@/@types/tools/qr";

export const qrRegistry: Record<QRToolName, ToolRegistryItem> = {
  ...qrRegistry01
};

export const qrToolNames = Object.keys(qrRegistry) as QRToolName[];
