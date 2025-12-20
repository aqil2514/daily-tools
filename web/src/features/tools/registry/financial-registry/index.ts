import { ToolRegistryItem } from "@/@types/Tools";
import { financialRegistry01 } from "./01-financial-registry";
import { financialRegistry02 } from "./02-financial-registry";
import { FinancialToolName } from "@/@types/tools/financial";
import { financialRegistry03 } from "./03-financial-registry";

export const financialRegistry = {
  ...financialRegistry01,
  ...financialRegistry02,
  ...financialRegistry03
} as Record<FinancialToolName, ToolRegistryItem>;
