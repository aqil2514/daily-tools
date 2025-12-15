import { ToolRegistryItem } from "@/@types/Tools";
import { financialRegistry01 } from "./01-financial-registry";
import { financialRegistry02 } from "./02-financial-registry";
import { FinancialToolName } from "@/@types/tools/financial";

export const financialRegistry = {
  ...financialRegistry01,
  ...financialRegistry02,
} as Record<FinancialToolName, ToolRegistryItem>;

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];
