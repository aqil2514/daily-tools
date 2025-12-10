import { TextToolName, ToolRegistryItem } from "@/@types/Tools";
import { textRegistry01 } from "./01-text-registry";

export const textRegistry: Record<TextToolName, ToolRegistryItem> = {
  ...textRegistry01,
};

export const textToolName = Object.keys(textRegistry) as TextToolName[];
