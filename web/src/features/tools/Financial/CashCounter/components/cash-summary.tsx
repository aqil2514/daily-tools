"use client";

import { useCashCounter } from "../store/provider";
import { formatCurrency } from "@/utils/formatCurrency";
import { CashExport } from "./cash-export";

export function CashSummary() {
  const { totalCash, settings, difference } = useCashCounter();

  return (
    <div className="space-y-3 text-sm">
      {/* TOTAL CASH */}
      <div className="flex justify-between border-b pb-1">
        <span>Total Cash</span>
        <span className="font-semibold">
          {formatCurrency(totalCash, settings.currency.toUpperCase())}
        </span>
      </div>

      {/* RECEIVABLES */}
      <div className="flex justify-between border-b pb-1">
        <span>Receivables</span>
        <span>
          {formatCurrency(
            settings.receivables,
            settings.currency.toUpperCase()
          )}
        </span>
      </div>

      {/* OTHER PEOPLE CASH */}
      <div className="flex justify-between border-b pb-1">
        <span>Other People’s Cash</span>
        <span>
          {formatCurrency(
            settings.otherPeopleCash,
            settings.currency.toUpperCase()
          )}
        </span>
      </div>

      {/* CASH IN DATA / TARGET */}
      <div className="flex justify-between border-b pb-1">
        <span>Cash in Data</span>
        <span>
          {formatCurrency(settings.cashInData, settings.currency.toUpperCase())}
        </span>
      </div>

      {/* DIFFERENCE */}
      <div className="flex justify-between pt-2 text-sm font-semibold">
        <span>Difference</span>
        <span
          className={
            difference === 0
              ? "text-green-600"
              : difference > 0
              ? "text-blue-600"
              : "text-red-600"
          }
        >
          {formatCurrency(difference, settings.currency.toUpperCase())}
        </span>
      </div>

      <CashExport />
    </div>
  );
}
