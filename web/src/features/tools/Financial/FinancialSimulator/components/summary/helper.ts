import { FinancialTransaction } from "../../types/interface";

export function computeCategoryTotals(transactions: FinancialTransaction[]) {
  const map: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (!tx.category) return;

    if (!map[tx.category]) {
      map[tx.category] = 0;
    }

    map[tx.category] += tx.type === "income" ? tx.amount : -tx.amount;
  });

  return map;
}

