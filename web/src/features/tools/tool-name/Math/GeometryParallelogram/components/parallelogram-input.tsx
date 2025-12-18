"use client";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nParallelogramInput } from "../i18n/parallelogram-input";

interface ParallelogramInputProps {
  a: number;
  t: number;
  b: number;
  setA: Dispatch<SetStateAction<number>>;
  setT: Dispatch<SetStateAction<number>>;
  setB: Dispatch<SetStateAction<number>>;
}

export function ParallelogramInput({
  a,
  t,
  b,
  setA,
  setT,
  setB,
}: ParallelogramInputProps) {
  const locale = useLocale();
  const tI18n = i18nParallelogramInput[locale];

  return (
    <ToolCard>
      <div className="space-y-4">
        {/* Section title */}
        <SubHeading>{tI18n.title}</SubHeading>

        {/* Short explanation */}
        <p className="text-sm text-muted-foreground">
          {tI18n.description}
        </p>

        {/* Base */}
        <MathNumberInput
          label={tI18n.a.label}
          value={a}
          setValue={setA}
          description={tI18n.a.helper}
          unit="cm"
        />

        {/* Height */}
        <MathNumberInput
          label={tI18n.t.label}
          value={t}
          setValue={setT}
          description={tI18n.t.helper}
          unit="cm"
        />

        {/* Side */}
        <MathNumberInput
          label={tI18n.b.label}
          value={b}
          setValue={setB}
          description={tI18n.b.helper}
          unit="cm"
        />
      </div>
    </ToolCard>
  );
}
