"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { InvestmentReturnInput } from "../types/input";
import { calculateCAGR } from "../utils/calculate-cagr";
import { InvestmentSummaryTable } from "./investment-summary-table";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { useLocale } from "next-intl";
import { i18nInvestmentOutput } from "../i18n/investment-output";

import { InfoBlock } from "@/components/atoms/info-block";
import { TrendingUp, Layers, Wallet } from "lucide-react";

interface Props {
  inputData: InvestmentReturnInput;
}

export function InvestmentOutput({ inputData }: Props) {
  const result = calculateCAGR(inputData);
  const currency = inputData.currency ?? "IDR";

  const locale = useLocale();
  const t = i18nInvestmentOutput[locale];

  const growthAmount = inputData.finalValue - inputData.initialValue;

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="space-y-6 mt-4">

        {/* CAGR */}
        <InfoBlock icon={<TrendingUp size={20} />} title={t.cagr.label}>
          <p className="text-xl font-bold">{result.cagr.toFixed(2)}%</p>
          <p className="text-xs text-muted-foreground">
            {t.cagr.description}
          </p>
        </InfoBlock>

        {/* Growth Multiple */}
        <InfoBlock icon={<Layers size={20} />} title={t.growthMultiple.label}>
          <p className="text-lg font-semibold">
            {result.growthMultiple.toFixed(3)}×
          </p>
          <p className="text-xs text-muted-foreground">
            {t.growthMultiple.description}
          </p>
        </InfoBlock>

        {/* Total Gain */}
        <InfoBlock
          icon={<Wallet size={20} />}
          title={locale === "id" ? "Keuntungan Total" : "Total Gain"}
        >
          <p className="text-lg font-semibold">
            {formatCurrency(growthAmount, currency)}
          </p>
          <p className="text-xs text-muted-foreground">
            {locale === "id"
              ? "Selisih antara nilai akhir dan nilai awal."
              : "Difference between final and initial value."}
          </p>
        </InfoBlock>

        {/* Final Value */}
        <InfoBlock icon={<Wallet size={20} />} title={t.finalValue.label}>
          <p className="text-lg font-semibold">
            {formatCurrency(inputData.finalValue, currency)}
          </p>
        </InfoBlock>

        {/* Summary Table */}
        <div className="pt-4">
          <SubHeading className="text-base">{t.summary.title}</SubHeading>
          <InvestmentSummaryTable input={inputData} result={result} />
        </div>
      </div>
    </ToolCard>
  );
}
