"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { PercentageMode } from "../types/percentage-types";
import { percentageInsightText } from "../i18n/percentage-insight";

interface PercentageInsightProps {
  mode: PercentageMode;
}

export function PercentageInsight({
  mode,
}: PercentageInsightProps) {
  const locale = useLocale() as "en" | "id";
  const t = percentageInsightText[locale];

  const content =
    mode === "percentage-of"
      ? t.percentageOf
      : mode === "increase"
      ? t.increase
      : mode === "decrease"
      ? t.decrease
      : t.difference;

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4 text-sm">
        <div>
          <p className="font-medium">
            {content.title}
          </p>
          <p className="mt-1 text-muted-foreground">
            {content.description}
          </p>
        </div>

        <Separator />

        <div>
          <p className="font-medium">
            {content.formulaLabel}
          </p>
          <p className="mt-1 font-mono bg-muted px-3 py-2 rounded">
            {content.formula}
          </p>
        </div>
      </div>
    </ToolCard>
  );
}
