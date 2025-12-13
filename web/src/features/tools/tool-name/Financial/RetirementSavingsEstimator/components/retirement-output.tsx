"use client";

import { ToolCard } from "@/components/tools/tool-card";
import { SubHeading } from "@/components/atoms/subHeading";
import { InfoBlock } from "@/components/atoms/info-block";
import {
  Calendar,
  Wallet,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";
import {
  RetirementCalculationStatus,
  RetirementSavingsResult,
} from "../types/output";
import { formatCurrency } from "@/utils/formatCurrency";
import { useLocale } from "next-intl";
import { retirementOutputI18n } from "../i18n/output/retirement-output";

interface Props {
  result: RetirementSavingsResult | null;
  status?: RetirementCalculationStatus;
}

export function RetirementOutput({ result, status }: Props) {
  const locale = useLocale();
  const t = retirementOutputI18n[locale];

  if (!result) {
    return (
      <ToolCard>
        <div className="text-center text-muted-foreground text-sm py-8">
          {t.emptyState}
        </div>
      </ToolCard>
    );
  }

  const isOnTrack = status === "on-track";

  return (
    <ToolCard>
      <div className="space-y-6">
        <SubHeading className="mt-0">
          {t.sectionTitle}
        </SubHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PRIMARY */}
          <div className="md:col-span-2">
            {isOnTrack ? (
              <InfoBlock
                icon={<CheckCircle2 size={18} />}
                title={t.onTrackTitle}
              >
                <p className="text-lg font-semibold">
                  {t.onTrackHeadline}
                </p>
                <p className="text-muted-foreground">
                  {t.onTrackDesc}
                </p>
              </InfoBlock>
            ) : (
              <InfoBlock
                icon={<Wallet size={18} />}
                title={t.monthlySavingTitle}
              >
                <p className="text-lg font-semibold">
                  {formatCurrency(
                    result.requiredMonthlySaving,
                    "IDR"
                  )}
                </p>
                <p className="text-muted-foreground">
                  {t.monthlySavingDesc}
                </p>
              </InfoBlock>
            )}
          </div>

          {/* TIME */}
          <InfoBlock
            icon={<Calendar size={18} />}
            title={t.timeTitle}
          >
            <p>
              {result.yearsToRetirement} years (
              {result.monthsToRetirement} months)
            </p>
          </InfoBlock>

          {/* FUTURE VALUE */}
          <InfoBlock
            icon={<TrendingUp size={18} />}
            title={t.futureValueTitle}
          >
            <p>
              {formatCurrency(
                result.futureValueOfCurrentSavings,
                "IDR"
              )}
            </p>
            <p className="text-muted-foreground">
              {t.futureValueDesc}
            </p>
          </InfoBlock>

          {/* REMAINING */}
          <div className="md:col-span-2">
            <InfoBlock
              icon={<Target size={18} />}
              title={t.remainingTitle}
            >
              <p>
                {formatCurrency(
                  result.remainingTargetAmount,
                  "IDR"
                )}
              </p>
              <p className="text-muted-foreground">
                {t.remainingDesc}
              </p>
            </InfoBlock>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="pt-4 border-t text-xs text-muted-foreground leading-relaxed">
          {t.disclaimer}
        </div>
      </div>
    </ToolCard>
  );
}
