"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nTrapezoidInput } from "../i18n/trapezoid-input";

interface TrapezoidInputProps {
  a: number;
  b: number;
  t: number;
  c: number;
  d: number;
  setA: Dispatch<SetStateAction<number>>;
  setB: Dispatch<SetStateAction<number>>;
  setT: Dispatch<SetStateAction<number>>;
  setC: Dispatch<SetStateAction<number>>;
  setD: Dispatch<SetStateAction<number>>;
}

export function TrapezoidInput({
  a,
  b,
  t,
  c,
  d,
  setA,
  setB,
  setT,
  setC,
  setD,
}: TrapezoidInputProps) {
  const locale = useLocale();
  const tI18n = i18nTrapezoidInput[locale];

  return (
    <ToolCard>
      <div className="space-y-4">
        {/* Section title */}
        <SubHeading>{tI18n.title}</SubHeading>

        {/* Short explanation */}
        <p className="text-sm text-muted-foreground">
          {tI18n.description}
        </p>

        {/* Bases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <MathNumberInput
            label={tI18n.a.label}
            value={a}
            setValue={setA}
            description={tI18n.a.helper}
            unit="cm"
          />

          <MathNumberInput
            label={tI18n.b.label}
            value={b}
            setValue={setB}
            description={tI18n.b.helper}
            unit="cm"
          />
        </div>

        {/* Height */}
        <MathNumberInput
          label={tI18n.t.label}
          value={t}
          setValue={setT}
          description={tI18n.t.helper}
          unit="cm"
        />

        {/* Non-parallel sides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <MathNumberInput
            label={tI18n.c.label}
            value={c}
            setValue={setC}
            description={tI18n.c.helper}
            unit="cm"
          />

          <MathNumberInput
            label={tI18n.d.label}
            value={d}
            setValue={setD}
            description={tI18n.d.helper}
            unit="cm"
          />
        </div>
      </div>
    </ToolCard>
  );
}
