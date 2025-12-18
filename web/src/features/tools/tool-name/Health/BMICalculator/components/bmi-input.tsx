"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { bmiInputText } from "../i18n/bmi-input";

interface BMIInputProps {
  weightKg: number;
  heightCm: number;
  onWeightChange: (value: number) => void;
  onHeightChange: (value: number) => void;
}

export function BMIInput({
  weightKg,
  heightCm,
  onWeightChange,
  onHeightChange,
}: BMIInputProps) {
  const locale = useLocale() as "en" | "id";
  const t = bmiInputText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4">
        {/* Weight */}
        <div className="space-y-1">
          <Label htmlFor="weight">
            {t.weightLabel}
          </Label>
          <Input
            id="weight"
            type="number"
            min={0}
            step="0.1"
            value={weightKg}
            onChange={(e) =>
              onWeightChange(Number(e.target.value))
            }
          />
        </div>

        {/* Height */}
        <div className="space-y-1">
          <Label htmlFor="height">
            {t.heightLabel}
          </Label>
          <Input
            id="height"
            type="number"
            min={0}
            step="0.1"
            value={heightCm}
            onChange={(e) =>
              onHeightChange(Number(e.target.value))
            }
          />
        </div>
      </div>
    </ToolCard>
  );
}
