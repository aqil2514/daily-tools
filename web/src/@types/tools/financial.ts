export const FINANCIAL_TOOLS = [
  "cash-counter",
  "cogs-margin-tool",
  "financial-simulator",
  "product-hpp-calculator",
  "loan-calculator",
  "investment-return-calculator",
  "savings-goal-calculator",
  "retirement-savings-estimator",
  "asset-allocation-calculator",
] as const;

export type FinancialToolName = typeof FINANCIAL_TOOLS[number];
