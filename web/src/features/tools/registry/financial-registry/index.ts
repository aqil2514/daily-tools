import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools"; // Asumsi path
import { financialRegistry01 } from "./01-financial-registry";
import { financialRegistry02 } from "./02-financial-registry";

export const financialRegistry = {
  ...financialRegistry01,
  ...financialRegistry02
} as Record<FinancialToolName, ToolRegistryItem>;

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];
