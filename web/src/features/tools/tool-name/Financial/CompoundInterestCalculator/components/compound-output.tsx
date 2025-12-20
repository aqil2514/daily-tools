"use client";

import { Coins, TrendingUp } from "lucide-react";
import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { InfoBlock } from "@/components/atoms/info-block";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { formatCurrency } from "@/utils/formatter/formatCurrency";

import { CompoundBreakdown } from "./compound-breakdown";
import { useCompoundSummary } from "../hooks/use-compound-summary";
import { i18nCompoundOutput } from "../i18n/compound-output";

export function CompoundOutput() {
  const {
    futureValue,
    totalInvested,
    interestEarned,
    returnPercentage,
    avgMonthlyGain,
    mode,
  } = useCompoundSummary();

  const locale = useLocale() as "en" | "id";
  const t = i18nCompoundOutput[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.title}</SubHeading>

      <div className="grid grid-cols-2 gap-4">
        <InfoBlock icon={<Coins />} title={t.futureValue}>
          <p>{formatCurrency(futureValue, "IDR")}</p>
        </InfoBlock>

        <InfoBlock icon={<Coins />} title={t.totalInvested}>
          <p>{formatCurrency(totalInvested, "IDR")}</p>
        </InfoBlock>

        <InfoBlock icon={<Coins />} title={t.interestEarned}>
          <p>{formatCurrency(interestEarned, "IDR")}</p>
        </InfoBlock>

        <InfoBlock
          icon={<TrendingUp />}
          title={t.returnPercentage}
        >
          <p>{returnPercentage.toFixed(2)}%</p>
        </InfoBlock>

        {mode === "monthly-contribution" &&
          avgMonthlyGain !== null && (
            <div className="col-span-2">
              <InfoBlock
                icon={<TrendingUp />}
                title={t.avgMonthlyGain}
              >
                <p>
                  {formatCurrency(avgMonthlyGain, "IDR")}
                </p>
              </InfoBlock>
            </div>
          )}
      </div>

      <CompoundBreakdown />
    </ToolCard>
  );
}
