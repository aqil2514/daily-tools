"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AddTransactionModal } from "../add-transaction";
import { useFinancialSimulator } from "../../store/provider";
import { useFinancialComputed } from "../../hooks/useFinancialComputed";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { useTranslations } from "next-intl";

export default function OverviewTab() {
  const { settings } = useFinancialSimulator();
  const { balance, totalIncome, totalExpense, recent } = useFinancialComputed();
  const t = useTranslations("tools-registry.financial.cash-counter")

  return (
    <div className="space-y-6">
      {/* BALANCE CARD */}
      <Card>
        <CardHeader>
          <CardTitle>{t("current-balance")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {formatCurrency(balance, settings.currency, settings.decimal)}
          </div>
        </CardContent>
      </Card>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{t("total-income")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-green-600">
              {formatCurrency(totalIncome, settings.currency, settings.decimal)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("total-expense")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-red-600">
              {formatCurrency(
                totalExpense,
                settings.currency,
                settings.decimal
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ADD TRANSACTION BUTTON */}
      <AddTransactionModal />

      {/* RECENT TRANSACTIONS */}
      <Card>
        <CardHeader>
          <CardTitle>{t("recent-transactions")}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {recent.length === 0 && (
            <p className="text-sm text-muted-foreground">
              {t("no-transaction")}
            </p>
          )}

          {recent.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium capitalize">{tx.category || "-"}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(tx.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div
                className={`font-bold ${
                  tx.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.type === "income" ? "+" : "-"}{" "}
                {formatCurrency(tx.amount, settings.currency, settings.decimal)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
