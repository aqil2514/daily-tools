"use client";

import { useCashCounter } from "../store/provider";
import { formatCurrency } from "@/utils/formatCurrency";
import { CashExport } from "./cash-export";
import { useTranslations } from "next-intl";

export function CashSummary() {
  const { totalCash, settings, difference } = useCashCounter();
  const t = useTranslations("tools-registry.financial.cash-counter")

  return (
    <div className="space-y-3 text-sm">
      {/* TOTAL CASH */}
      <div className="flex justify-between border-b pb-1">
        <span>{t("total-cash")}</span>
        <span className="font-semibold">
          {formatCurrency(totalCash, settings.currency.toUpperCase())}
        </span>
      </div>

      {/* RECEIVABLES */}
      <div className="flex justify-between border-b pb-1">
        <span>{t("receivables")}</span>
        <span>
          {formatCurrency(
            settings.receivables,
            settings.currency.toUpperCase()
          )}
        </span>
      </div>

      {/* OTHER PEOPLE CASH */}
      <div className="flex justify-between border-b pb-1">
        <span>{t("other-peoples-cash")}</span>
        <span>
          {formatCurrency(
            settings.otherPeopleCash,
            settings.currency.toUpperCase()
          )}
        </span>
      </div>

      {/* CASH IN DATA / TARGET */}
      <div className="flex justify-between border-b pb-1">
        <span>{t("cash-in-data")}</span>  
        <span>
          {formatCurrency(settings.cashInData, settings.currency.toUpperCase())}
        </span>
      </div>

      {/* DIFFERENCE */}
      <div className="flex justify-between pt-2 text-sm font-semibold">
        <span>{t("difference")}</span>
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
