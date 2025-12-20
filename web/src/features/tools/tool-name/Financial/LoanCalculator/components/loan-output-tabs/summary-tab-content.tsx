import { InfoBlock } from "@/components/atoms/info-block";
import { TabsContent } from "@/components/ui/tabs";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { Banknote, Percent, Wallet } from "lucide-react";
import { LoanSummaryTable } from "../loan-summary-table";
import { useLoanCalculator } from "../../store/provider";
import { i18nLoanOutput } from "../../i18n/loan-output";
import { useLocale } from "next-intl";

export function SummaryTabContent() {
  const { inputData, result } = useLoanCalculator();
  const currency = inputData.currency ?? "IDR";
  const locale = useLocale();

  const t = i18nLoanOutput[locale];

  return (
    <TabsContent value="summary" className="space-y-6 mt-6">
      {/* Highlight Result */}
      <InfoBlock
        icon={<Banknote className="w-5 h-5" />}
        title={t.monthlyInstallment}
      >
        <p className="text-2xl font-bold text-primary">
          {formatCurrency(result.monthlyInstallment, currency, 0)}
        </p>
      </InfoBlock>

      {/* Secondary Results */}
      <div className="grid gap-4 sm:grid-cols-2">
        <InfoBlock
          icon={<Percent className="w-5 h-5" />}
          title={t.totalInterest}
        >
          <p className="text-lg font-semibold">
            {formatCurrency(result.totalInterest, currency, 0)}
          </p>
        </InfoBlock>

        <InfoBlock icon={<Wallet className="w-5 h-5" />} title={t.totalPayment}>
          <p className="text-lg font-semibold">
            {formatCurrency(result.totalPayment, currency, 0)}
          </p>
        </InfoBlock>
      </div>

      {/* Summary Table */}
      <LoanSummaryTable />
    </TabsContent>
  );
}
