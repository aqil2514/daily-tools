import { ToolRegistryItem } from "@/@types/Tools";
import { textRegistry01 } from "./01-text-registry";
import { textRegistry02 } from "./02-text-registry";
import { TextToolName } from "@/@types/tools/text";

export const textRegistry = {
  ...textRegistry01,
  ...textRegistry02,
} as Record<TextToolName, ToolRegistryItem>;

export const textToolName = Object.keys(textRegistry) as TextToolName[];
