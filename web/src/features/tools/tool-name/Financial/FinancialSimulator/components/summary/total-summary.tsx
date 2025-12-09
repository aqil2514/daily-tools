import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SummaryRow } from "./summary-row";
import { formatCurrency } from "@/utils/formatCurrency";
import { useFinancialSimulator } from "../../store/provider";
import { useFinancialComputed } from "../../hooks/useFinancialComputed";
import { Button } from "@/components/ui/button";
import { createSummaryPdf } from "../../utils/createSummaryPdf";
import { computeCategoryTotals } from "./helper";
import { useTranslations } from "next-intl";

export function TotalSummary() {
  const t = useTranslations("tools-registry.financial.financial-simulator");
  const { settings, transactions } = useFinancialSimulator();
  const { balance, totalIncome, totalExpense } = useFinancialComputed();
  const netChange = totalIncome - totalExpense;
  const categories = computeCategoryTotals(transactions);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("financial-summary")}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
      <Button
        size="sm"
        onClick={async () => {
          const pdfBytes = await createSummaryPdf({
            settings,
            balance,
            totalIncome,
            totalExpense,
            netChange,
            categories,
          });

          const array = pdfBytes.slice().buffer;

          const blob = new Blob([array], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = url;
          a.download = "financial-summary.pdf";
          a.click();

          URL.revokeObjectURL(url);
        }}
      >
        {t("export-pdf")}
      </Button>
        <SummaryRow
          label={t("starting-balance")}
          value={formatCurrency(
            settings.startingBalance,
            settings.currency,
            settings.decimal
          )}
        />

        <SummaryRow
          label={t("total-income")}
          value={formatCurrency(
            totalIncome,
            settings.currency,
            settings.decimal
          )}
          color="text-green-600"
        />

        <SummaryRow
          label={t("total-expense")}
          value={formatCurrency(
            totalExpense,
            settings.currency,
            settings.decimal
          )}
          color="text-red-600"
        />

        <SummaryRow
          label={t("net-change")}
          value={formatCurrency(netChange, settings.currency, settings.decimal)}
          color={netChange >= 0 ? "text-green-600" : "text-red-600"}
        />

        <SummaryRow
          label={t("current-balance")}
          value={formatCurrency(balance, settings.currency, settings.decimal)}
          bold
        />
      </CardContent>
    </Card>
  );
}
