import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/tools/tool-card";
import { LoanCalculatorInput } from "../types/input";
import { calculateLoan } from "../utils/calculate-loan";
import { formatCurrency } from "@/utils/formatCurrency";
import { LoanSummaryTable } from "./loan-summary-table";
import { useLocale } from "next-intl";
import { i18nLoanOutput } from "../i18n/loan-output";

interface Props {
  inputData: LoanCalculatorInput;
}

export function LoanOutput({ inputData }: Props) {
  const result = calculateLoan(inputData);

  const currency = inputData.currency ?? "IDR";

  const locale = useLocale();
  const t = i18nLoanOutput[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="space-y-6 mt-4">
        {/* Monthly Installment */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {t.monthlyInstallment}
          </p>
          <p className="text-xl font-semibold">
            {formatCurrency(result.monthlyInstallment, currency, 0)}
          </p>
        </div>

        {/* Total Interest */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {t.totalInterest}
          </p>
          <p className="text-lg font-semibold">
            {formatCurrency(result.totalInterest, currency, 0)}
          </p>
        </div>

        {/* Total Payment */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {t.totalPayment}
          </p>
          <p className="text-lg font-semibold">
            {formatCurrency(result.totalPayment, currency, 0)}
          </p>
        </div>

        {/* Summary Placeholder */}
        <div className="pt-4">
          <SubHeading className="text-base">{t.summary}</SubHeading>
          <LoanSummaryTable input={inputData} result={result} />
        </div>
      </div>
    </ToolCard>
  );
}
