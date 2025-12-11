import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools"; // Asumsi path
import { financialRegistry01 } from "./01-financial-registry";

export const financialRegistry = {
  ...financialRegistry01,
} as Record<FinancialToolName, ToolRegistryItem>;

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];
