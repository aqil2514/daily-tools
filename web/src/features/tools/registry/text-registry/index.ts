import { TextToolName, ToolRegistryItem } from "@/@types/Tools";
import { textRegistry01 } from "./01-text-registry";
import { textRegistry02 } from "./02-text-registry";

export const textRegistry: Record<TextToolName, ToolRegistryItem> = {
  ...textRegistry01,
  ...textRegistry02
};

export const textToolName = Object.keys(textRegistry) as TextToolName[];
