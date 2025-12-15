"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { useLocale } from "next-intl";
import { ageCalculatorI18n } from "../i18n/age-output";

interface TotalDaysAliveProps {
  days: number | null;
}

export function TotalDaysAlive({ days }: TotalDaysAliveProps) {
  const locale = useLocale() as "en" | "id";
  const t = ageCalculatorI18n[locale];

  const isEmpty = days === null;

  if(isEmpty) return null;

  return (
    <ToolCard>
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold">
          {t.totalDaysTitle}
        </h3>

        <div
          className={`text-3xl font-bold ${
            isEmpty ? "text-muted-foreground" : ""
          }`}
        >
          {isEmpty ? 0 : days.toLocaleString()}
        </div>

        <div className="text-sm text-muted-foreground">
          {t.totalDaysLabel}
        </div>
      </div>
    </ToolCard>
  );
}
