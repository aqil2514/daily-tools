"use client";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Dispatch, SetStateAction } from "react";

interface MathNumberInputProps {
  label: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  description?: string;
}

export function MathNumberInput({
  label,
  value,
  setValue,
  min = 0,
  max = 100,
  step = 1,
  unit,
  description,
}: MathNumberInputProps) {
  return (
    <ToolCard>
      <div className="space-y-4">
        <Label>
          {label}
          {unit && (
            <span className="ml-1 text-xs text-muted-foreground">
              ({unit})
            </span>
          )}
        </Label>

        <Input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            const val = e.target.valueAsNumber;
            setValue(Number.isNaN(val) ? min : val);
          }}
        />

        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={(val) => setValue(val[0])}
        />

        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </ToolCard>
  );
}
