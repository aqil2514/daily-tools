import { useLocale } from "next-intl";

import { useCompoundSummary } from "./use-compound-summary";
import { formatCurrency } from "@/utils/formatter/formatCurrency";
import { i18nCompoundInsight } from "../i18n/compound-insight";
import { interpolate } from "@/utils/interpolate";

export function useCompoundInsight() {
  const locale = useLocale() as "en" | "id";
  const t = i18nCompoundInsight[locale];

  const {
    futureValue,
    totalInvested,
    interestEarned,
    returnPercentage,
    avgMonthlyGain,
    mode,
  } = useCompoundSummary();

  const values = {
    futureValue: formatCurrency(futureValue, "IDR"),
    totalInvested: formatCurrency(totalInvested, "IDR"),
    interestEarned: formatCurrency(interestEarned, "IDR"),
    avgMonthlyGain:
      avgMonthlyGain !== null
        ? formatCurrency(avgMonthlyGain, "IDR")
        : "",
    returnPercentage: returnPercentage.toFixed(2),
  };

  /**
   * ======================
   * ONCE MODE
   * ======================
   */
  if (mode === "once") {
    const isPositive = interestEarned > 0;
    const copy = isPositive
      ? t.once.positive
      : t.once.neutral;

    return {
      primary: interpolate(copy.primary, values),
      secondary: interpolate(copy.secondary, values),
    };
  }

  /**
   * ======================
   * MONTHLY MODE
   * ======================
   */
  const isPositive = interestEarned > 0;
  const copy = isPositive
    ? t.monthly.positive
    : t.monthly.neutral;

  const highlights: string[] = [];

  if (isPositive && avgMonthlyGain && avgMonthlyGain > 0) {
    highlights.push(
      interpolate(
        t.monthly.positive.highlights.avgMonthlyGain,
        values
      )
    );
  }

  if (isPositive && returnPercentage > 0) {
    highlights.push(
      interpolate(
        t.monthly.positive.highlights.returnPercentage,
        values
      )
    );
  }

  return {
    primary: interpolate(copy.primary, values),
    secondary: interpolate(copy.secondary, values),
    highlights: highlights.length > 0 ? highlights : undefined,
  };
}
