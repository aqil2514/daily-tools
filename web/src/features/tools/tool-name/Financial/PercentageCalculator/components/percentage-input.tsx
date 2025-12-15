"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { PercentageMode } from "../types/percentage-types";
import { percentageInputText } from "../i18n/percentage-input";
import { CurrencyField } from "@/components/molecules/input/currency-field";

interface PercentageInputProps {
  mode: PercentageMode;
  values: {
    percent?: number;
    value?: number;
    oldValue?: number;
    newValue?: number;
    a?: number;
    b?: number;
  };
  onChange: (values: PercentageInputProps["values"]) => void;
}

export function PercentageInput({
  mode,
  values,
  onChange,
}: PercentageInputProps) {
  const locale = useLocale() as "en" | "id";
  const t = percentageInputText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">{t.heading}</SubHeading>

      <div className="mt-4 space-y-6">
        {/* ===================== */}
        {/* Percentage of value */}
        {/* ===================== */}
        {mode === "percentage-of" && (
          <>
            <div className="space-y-1">
              <Label>{t.percentLabel}</Label>
              <Input
                type="number"
                min={0}
                step="0.01"
                value={values.percent ?? ""}
                onChange={(e) =>
                  onChange({
                    ...values,
                    percent: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="space-y-1">
              <Label>{t.valueLabel}</Label>
              <CurrencyField
                id="percentage-value"
                value={values.value}
                onValueChange={(value) =>
                  onChange({
                    ...values,
                    value,
                  })
                }
              />
            </div>
          </>
        )}

        {/* ===================== */}
        {/* Increase / Decrease */}
        {/* ===================== */}
        {(mode === "increase" || mode === "decrease") && (
          <>
            <div className="space-y-1">
              <Label>{t.originalValueLabel}</Label>
              <CurrencyField
                id="old-value"
                value={values.oldValue}
                onValueChange={(value) =>
                  onChange({
                    ...values,
                    oldValue: value,
                  })
                }
              />
            </div>

            <div className="space-y-1">
              <Label>{t.newValueLabel}</Label>
              <CurrencyField
                id="new-value"
                value={values.newValue}
                onValueChange={(value) =>
                  onChange({
                    ...values,
                    newValue: value,
                  })
                }
              />
            </div>
          </>
        )}

        {/* ===================== */}
        {/* Percentage difference */}
        {/* ===================== */}
        {mode === "difference" && (
          <>
            <div className="space-y-1">
              <Label>{t.firstValueLabel}</Label>
              <CurrencyField
                id="value-a"
                value={values.a}
                onValueChange={(value) =>
                  onChange({
                    ...values,
                    a: value,
                  })
                }
              />
            </div>

            <div className="space-y-1">
              <Label>{t.secondValueLabel}</Label>
              <CurrencyField
                id="value-b"
                value={values.b}
                onValueChange={(value) =>
                  onChange({
                    ...values,
                    b: value,
                  })
                }
              />
            </div>
          </>
        )}
      </div>
    </ToolCard>
  );
}
