"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nRectangleInput } from "../i18n/rectangle-input";

interface RectangleInputProps {
  length: number;
  width: number;
  setLength: Dispatch<SetStateAction<number>>;
  setWidth: Dispatch<SetStateAction<number>>;
}

export function RectangleInput({
  length,
  width,
  setLength,
  setWidth,
}: RectangleInputProps) {
  const locale = useLocale();
  const t = i18nRectangleInput[locale];

  return (
    <ToolCard>
      <div className="space-y-4">
        {/* Section title */}
        <SubHeading>{t.title}</SubHeading>

        {/* Short explanation */}
        <p className="text-sm text-muted-foreground">
          {t.description}
        </p>

        {/* Input panjang */}
        <MathNumberInput
          label={t.length.label}
          value={length}
          setValue={setLength}
          description={t.length.helper}
          unit="cm"
        />

        {/* Input lebar */}
        <MathNumberInput
          label={t.width.label}
          value={width}
          setValue={setWidth}
          description={t.width.helper}
          unit="cm"
        />
      </div>
    </ToolCard>
  );
}
