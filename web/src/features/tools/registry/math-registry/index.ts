import { MathToolName, ToolRegistryItem } from "@/@types/Tools";
import { mathRegistry01 } from "./01-math-registry";

export const mathRegistry = {
  ...mathRegistry01,
} as Record<MathToolName, ToolRegistryItem>;

export const mathToolNames = Object.keys(mathRegistry) as MathToolName[];