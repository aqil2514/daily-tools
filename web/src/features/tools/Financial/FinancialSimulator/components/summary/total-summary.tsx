import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SummaryRow } from "./summary-row";
import { formatCurrency } from "@/utils/formatCurrency";
import { useFinancialSimulator } from "../../store/provider";
import { useFinancialComputed } from "../../hooks/useFinancialComputed";
import { Button } from "@/components/ui/button";
import { createSummaryPdf } from "../../utils/createSummaryPdf";
import { computeCategoryTotals } from "./helper";

export function TotalSummary() {
  const { settings, transactions } = useFinancialSimulator();
  const { balance, totalIncome, totalExpense } = useFinancialComputed();
  const netChange = totalIncome - totalExpense;
  const categories = computeCategoryTotals(transactions);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Summary</CardTitle>

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
          Export PDF
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <SummaryRow
          label="Starting Balance"
          value={formatCurrency(
            settings.startingBalance,
            settings.currency,
            settings.decimal
          )}
        />

        <SummaryRow
          label="Total Income"
          value={formatCurrency(
            totalIncome,
            settings.currency,
            settings.decimal
          )}
          color="text-green-600"
        />

        <SummaryRow
          label="Total Expense"
          value={formatCurrency(
            totalExpense,
            settings.currency,
            settings.decimal
          )}
          color="text-red-600"
        />

        <SummaryRow
          label="Net Change"
          value={formatCurrency(netChange, settings.currency, settings.decimal)}
          color={netChange >= 0 ? "text-green-600" : "text-red-600"}
        />

        <SummaryRow
          label="Current Balance"
          value={formatCurrency(balance, settings.currency, settings.decimal)}
          bold
        />
      </CardContent>
    </Card>
  );
}
