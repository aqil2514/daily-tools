"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nTriangleInput } from "../i18n/triangle-input";

interface TriangleInputProps {
  base: number;
  height: number;
  setBase: Dispatch<SetStateAction<number>>;
  setHeight: Dispatch<SetStateAction<number>>;
}

export function TriangleInput({
  base,
  height,
  setBase,
  setHeight,
}: TriangleInputProps) {
  const locale = useLocale();
  const t = i18nTriangleInput[locale];

  return (
    <ToolCard>
      <div className="space-y-4">
        {/* Section title */}
        <SubHeading>{t.title}</SubHeading>

        {/* Short explanation */}
        <p className="text-sm text-muted-foreground">
          {t.description}
        </p>

        {/* Input alas */}
        <MathNumberInput
          label={t.base.label}
          value={base}
          setValue={setBase}
          description={t.base.helper}
          unit="cm"
        />

        {/* Input tinggi */}
        <MathNumberInput
          label={t.height.label}
          value={height}
          setValue={setHeight}
          description={t.height.helper}
          unit="cm"
        />
      </div>
    </ToolCard>
  );
}
