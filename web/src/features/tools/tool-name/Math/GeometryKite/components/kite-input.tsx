"use client";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nKiteInput } from "../i18n/kite-input";

interface KiteInputProps {
  d1: number;
  d2: number;
  a: number;
  b: number;
  setD1: Dispatch<SetStateAction<number>>;
  setD2: Dispatch<SetStateAction<number>>;
  setA: Dispatch<SetStateAction<number>>;
  setB: Dispatch<SetStateAction<number>>;
}

export function KiteInput({
  d1,
  d2,
  a,
  b,
  setD1,
  setD2,
  setA,
  setB,
}: KiteInputProps) {
  const locale = useLocale();
  const t = i18nKiteInput[locale];

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

        {/* Equal sides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <MathNumberInput
            label={t.a.label}
            value={a}
            setValue={setA}
            description={t.a.helper}
            unit="cm"
          />

          <MathNumberInput
            label={t.b.label}
            value={b}
            setValue={setB}
            description={t.b.helper}
            unit="cm"
          />
        </div>
      </div>
    </ToolCard>
  );
}
