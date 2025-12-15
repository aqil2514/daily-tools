import { ToolRegistryItem } from "@/@types/Tools";
import { mathRegistry01 } from "./01-math-registry";
import { mathRegistry02 } from "./02-math-registry";

import { MathToolName } from "@/@types/tools/math";

export const mathRegistry = {
  ...mathRegistry01,
  ...mathRegistry02,
} as Record<MathToolName, ToolRegistryItem>;

export const mathToolNames = Object.keys(mathRegistry) as MathToolName[];
