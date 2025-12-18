"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import {
  PercentageMode,
  PercentageResult,
} from "../types/percentage-types";
import { percentageOutputText } from "../i18n/percentage-output";

import { formatCurrency } from "@/utils/formatter/formatCurrency";

interface PercentageOutputProps {
  mode: PercentageMode;
  result: PercentageResult | null;

  /** Optional currency code (IDR, USD, etc) */
  currency?: string;
}

function formatNumber(value: number) {
  if (Number.isNaN(value)) return "–";
  return value.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
}

export function PercentageOutput({
  mode,
  result,
  currency,
}: PercentageOutputProps) {
  const locale = useLocale() as "en" | "id";
  const t = percentageOutputText[locale];

  const formattedResult =
    result && currency
      ? formatCurrency(result.result, currency, 0)
      : result
      ? formatNumber(result.result)
      : null;

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      {!result ? (
        <div className="mt-4 text-sm text-muted-foreground text-center">
          {t.empty}
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {/* ===================== */}
          {/* Main Result */}
          {/* ===================== */}
          <div className="text-center text-2xl font-semibold">
            {formattedResult}
          </div>

          <Separator />

          {/* ===================== */}
          {/* Additional Info */}
          {/* ===================== */}
          <div className="text-sm text-muted-foreground text-center">
            {mode === "percentage-of" && (
              <span>{t.percentageOfInfo}</span>
            )}

            {(mode === "increase" ||
              mode === "decrease") &&
              result.percentage !== undefined && (
                <span>
                  {t.changeLabel}:{" "}
                  <strong>
                    {formatNumber(result.percentage)}%
                  </strong>
                </span>
              )}

            {mode === "difference" &&
              result.percentage !== undefined && (
                <span>
                  {t.differenceLabel}:{" "}
                  <strong>
                    {formatNumber(result.percentage)}%
                  </strong>
                </span>
              )}
          </div>
        </div>
      )}
    </ToolCard>
  );
}
