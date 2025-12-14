"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nRhombusInput } from "../i18n/rhombus-input";

interface RhombusInputProps {
  d1: number;
  d2: number;
  s: number;
  setD1: Dispatch<SetStateAction<number>>;
  setD2: Dispatch<SetStateAction<number>>;
  setS: Dispatch<SetStateAction<number>>;
}

export function RhombusInput({
  d1,
  d2,
  s,
  setD1,
  setD2,
  setS,
}: RhombusInputProps) {
  const locale = useLocale();
  const t = i18nRhombusInput[locale];

  return (
    <ToolCard>
      <div className="space-y-4">
        {/* Section title */}
        <SubHeading>{t.title}</SubHeading>

        {/* Short explanation */}
        <p className="text-sm text-muted-foreground">
          {t.description}
        </p>

        {/* Diagonals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <MathNumberInput
            label={t.d1.label}
            value={d1}
            setValue={setD1}
            description={t.d1.helper}
            unit="cm"
          />

          <MathNumberInput
            label={t.d2.label}
            value={d2}
            setValue={setD2}
            description={t.d2.helper}
            unit="cm"
          />
        </div>

        {/* Side */}
        <MathNumberInput
          label={t.s.label}
          value={s}
          setValue={setS}
          description={t.s.helper}
          unit="cm"
        />
      </div>
    </ToolCard>
  );
}
