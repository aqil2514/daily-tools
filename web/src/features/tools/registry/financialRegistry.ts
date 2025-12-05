import { FinancialToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const financialRegistry: Record<FinancialToolName, ToolRegistryItem> = {
  "cash-counter": {
    Component: dynamic(() => import("@/features/tools/Financial/CashCounter")),
    href: "/tools/cash-counter",
    title: "Cash Counter",
    description:
      "Quickly calculate cash totals, verify denominations, and check for discrepancies in your daily balance.",
    category: "financial",
    keywords: [
      "cash counter",
      "cash calculator",
      "cash reconciliation",
      "count money",
      "denomination calculator",
    ],
  },
};

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];