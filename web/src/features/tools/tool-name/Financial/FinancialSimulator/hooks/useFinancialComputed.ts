"use client";

import { useMemo } from "react";
import { useFinancialSimulator } from "../store/provider";

export function useFinancialComputed() {
  const { settings, transactions } = useFinancialSimulator();

  const summary = useMemo(() => {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const balance =
      settings.startingBalance + totalIncome - totalExpense;

    const recent = [...transactions]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);

    return {
      totalIncome,
      totalExpense,
      balance,
      recent,
    };
  }, [settings, transactions]);

  return summary;
}
