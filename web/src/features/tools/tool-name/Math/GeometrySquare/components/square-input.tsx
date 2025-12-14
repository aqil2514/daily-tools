"use client";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { MathNumberInput } from "@/components/molecules/input/math-number-input";
import { Dispatch, SetStateAction } from "react";
import { useLocale } from "next-intl";
import { i18nSquareInput } from "../i18n/square-input";

interface SquareInputProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export function SquareInput({ value, setValue }: SquareInputProps) {
  const locale = useLocale();
  const t = i18nSquareInput[locale];

  return (
    <ToolCard>
      <div className="space-y-4">
        {/* Section title */}
        <SubHeading>{t.title}</SubHeading>

        {/* Short explanation */}
        <p className="text-sm text-muted-foreground">
          {t.description}
        </p>

        {/* Input */}
        <MathNumberInput
          label={t.side.label}
          value={value}
          setValue={setValue}
          description={t.side.helper}
          unit="cm"
        />
      </div>
    </ToolCard>
  );
}
