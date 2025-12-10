import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools"; // Asumsi path
import { financialRegistry01 } from "./01-financial-registry";

export const financialRegistry: Record<FinancialToolName, ToolRegistryItem> = {
  ...financialRegistry01,
};

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];
