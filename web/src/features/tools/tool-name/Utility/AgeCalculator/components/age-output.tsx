"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { useLocale } from "next-intl";
import { AgeResult } from "../utils/calculateAge";
import { ageCalculatorI18n } from "../i18n/age-output";

interface AgeOutputProps {
  result: AgeResult | null;
}

export function AgeOutput({ result }: AgeOutputProps) {
  const locale = useLocale() as "en" | "id";
  const t = ageCalculatorI18n[locale];

  const years = result?.years ?? 0;
  const months = result?.months ?? 0;
  const days = result?.days ?? 0;

  const isEmpty = !result;

  return (
    <ToolCard>
      <div className="space-y-4 text-center">
        <h3 className="text-lg font-semibold">
          {t.resultTitle}
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <ResultItem
            value={years}
            label={t.years}
            muted={isEmpty}
          />
          <ResultItem
            value={months}
            label={t.months}
            muted={isEmpty}
          />
          <ResultItem
            value={days}
            label={t.days}
            muted={isEmpty}
          />
        </div>

        {isEmpty && (
          <p className="text-sm text-muted-foreground">
            {t.helper}
          </p>
        )}
      </div>
    </ToolCard>
  );
}

function ResultItem({
  value,
  label,
  muted,
}: {
  value: number;
  label: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        muted ? "bg-muted/20 text-muted-foreground" : "bg-muted/40"
      }`}
    >
      <div className="text-3xl font-bold">
        {value}
      </div>
      <div className="text-sm">
        {label}
      </div>
    </div>
  );
}
