"use client";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { InfoBlock } from "@/components/atoms/info-block";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { calculateSavingsGoal } from "../utils/calculate-savings-goal";
import { SavingsGoalInput } from "../types/input";
import { SavingsSummaryTable } from "./savings-summary-table";
import { useLocale } from "next-intl";
import { i18nSavingsOutput } from "../i18n/savings-output";

import { TrendingUp, PiggyBank, CircleDot } from "lucide-react";

interface Props {
  inputData: SavingsGoalInput;
}

export function SavingsGoalOutput({ inputData }: Props) {
  const locale = useLocale();
  const t = i18nSavingsOutput[locale];

  const result = calculateSavingsGoal(inputData);

  const currency = inputData.currency ?? "IDR";

  const isManualMonthly =
    inputData.monthlyContribution !== undefined &&
    inputData.monthlyContribution > 0;

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="space-y-6 mt-4">

        {/* 1. FINAL VALUE (if user entered monthly contribution) */}
        {isManualMonthly && (
          <InfoBlock
            icon={<PiggyBank className="w-5 h-5" />}
            title={t.finalValue.title}
          >
            <p className="text-lg font-semibold">
              {formatCurrency(result.finalValue, currency, 0)}
            </p>
            <p className="text-xs text-muted-foreground">
              {t.finalValue.description}
            </p>
          </InfoBlock>
        )}

        {/* 2. REQUIRED MONTHLY (if user DID NOT enter monthly contribution) */}
        {!isManualMonthly && (
          <InfoBlock
            icon={<CircleDot className="w-5 h-5" />}
            title={t.requiredMonthly.title}
          >
            <p className="text-lg font-semibold">
              {formatCurrency(result.requiredMonthly || 0, currency, 0)}
            </p>
            <p className="text-xs text-muted-foreground">
              {t.requiredMonthly.description}
            </p>
          </InfoBlock>
        )}

        {/* 3. Monthly Interest Rate */}
        <InfoBlock
          icon={<TrendingUp className="w-5 h-5" />}
          title={t.monthlyInterest.title}
        >
          <p className="text-lg font-semibold">
            {(result.monthlyInterestRate * 100).toFixed(3)}%
          </p>
          <p className="text-xs text-muted-foreground">
            {t.monthlyInterest.description}
          </p>
        </InfoBlock>

        {/* SUMMARY TABLE */}
        <div className="pt-4">
          <SubHeading className="text-base">{t.summary.title}</SubHeading>
          <SavingsSummaryTable input={inputData} result={result} />
        </div>
      </div>
    </ToolCard>
  );
}
