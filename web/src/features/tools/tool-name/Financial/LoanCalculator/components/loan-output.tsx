import { Banknote, Percent, Wallet, FileText } from "lucide-react";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { LoanSummaryTable } from "./loan-summary-table";
import { useLocale } from "next-intl";
import { i18nLoanOutput } from "../i18n/loan-output";
import { InfoBlock } from "@/components/atoms/info-block";
import { useLoanCalculator } from "../store/provider";

export function LoanOutput() {
  const { inputData, result } = useLoanCalculator();
  const currency = inputData.currency ?? "IDR";

  const locale = useLocale();
  const t = i18nLoanOutput[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="mt-6 space-y-6">
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

          <InfoBlock
            icon={<Wallet className="w-5 h-5" />}
            title={t.totalPayment}
          >
            <p className="text-lg font-semibold">
              {formatCurrency(result.totalPayment, currency, 0)}
            </p>
          </InfoBlock>
        </div>

        {/* Summary */}
        <div className="pt-2 space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <SubHeading className="text-base">{t.summary}</SubHeading>
          </div>

          <LoanSummaryTable />
        </div>
      </div>
    </ToolCard>
  );
}
