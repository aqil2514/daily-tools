import { ColumnDef } from "@tanstack/react-table";
import { useLocale } from "next-intl";

import { useCompoundInterest } from "../store/provider";
import { breakdownCompound } from "../utils/breakdown-compound";
import { BreakdownCompound } from "../type/output";
import { formatCurrency } from "@/utils/formatter/formatCurrency";

import {
  breakdownCompoundMonthly,
  MonthlyCompoundBreakdownItem,
} from "../utils/breakdown-compound-monthly";

import { i18nCompoundBreakdown } from "../i18n/compound-breakdown";

export function useCompoundBreakdown() {
  const { parsedData } = useCompoundInterest();
  const locale = useLocale() as "en" | "id";
  const t = i18nCompoundBreakdown[locale];

  const breakdownDataOnce = breakdownCompound(parsedData);
  const breakdownDataMonthly =
    breakdownCompoundMonthly(parsedData);

  const breakdownDataOnceColumns: ColumnDef<BreakdownCompound>[] =
    [
      {
        accessorKey: "year",
        header: t.once.year,
      },
      {
        accessorKey: "startValue",
        header: t.once.startValue,
        cell: ({ row }) =>
          formatCurrency(
            row.original.startValue,
            "IDR"
          ),
      },
      {
        accessorKey: "interestEarned",
        header: t.once.interestEarned,
        cell: ({ row }) =>
          formatCurrency(
            row.original.interestEarned,
            "IDR"
          ),
      },
      {
        accessorKey: "value",
        header: t.once.value,
        cell: ({ row }) =>
          formatCurrency(row.original.value, "IDR"),
      },
    ];

  const breakdownDataMonthlyColumns: ColumnDef<MonthlyCompoundBreakdownItem>[] =
    [
      {
        accessorKey: "month",
        header: t.monthly.month,
      },
      {
        accessorKey: "totalInvested",
        header: t.monthly.totalInvested,
        cell: ({ row }) =>
          formatCurrency(
            row.original.totalInvested,
            "IDR"
          ),
      },
      {
        accessorKey: "monthlyInterest",
        header: t.monthly.monthlyInterest,
        cell: ({ row }) =>
          formatCurrency(
            row.original.monthlyInterest,
            "IDR"
          ),
      },
      {
        accessorKey: "interestEarned",
        header: t.monthly.interestEarned,
        cell: ({ row }) =>
          formatCurrency(
            row.original.interestEarned,
            "IDR"
          ),
      },
      {
        accessorKey: "value",
        header: t.monthly.value,
        cell: ({ row }) =>
          formatCurrency(row.original.value, "IDR"),
      },
    ];

  return {
    mode: parsedData.mode,
    once: {
      columns: breakdownDataOnceColumns,
      data: breakdownDataOnce,
    },
    monthly: {
      columns: breakdownDataMonthlyColumns,
      data: breakdownDataMonthly,
    },
  };
}
