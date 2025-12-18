"use client";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nSemicircleInput } from "../i18n/semicircle-input";

interface SemicircleInputProps {
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}

export function SemicircleInput({
  radius,
  setRadius,
}: SemicircleInputProps) {
  const locale = useLocale();
  const t = i18nSemicircleInput[locale];

  return (
    <ToolCard>
      <div className="space-y-4">
        {/* Section title */}
        <SubHeading>{t.title}</SubHeading>

        {/* Short explanation */}
        <p className="text-sm text-muted-foreground">
          {t.description}
        </p>

        {/* Radius input */}
        <MathNumberInput
          label={t.radius.label}
          value={radius}
          setValue={setRadius}
          description={t.radius.helper}
          unit="cm"
        />
      </div>
    </ToolCard>
  );
}
