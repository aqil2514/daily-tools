"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { LengthUnit } from "../types/length-types";
import { lengthInputText } from "../i18n/length-input";

interface LengthInputProps {
  value: number;
  fromUnit: LengthUnit;
  toUnit: LengthUnit;
  onValueChange: (value: number) => void;
  onFromUnitChange: (unit: LengthUnit) => void;
  onToUnitChange: (unit: LengthUnit) => void;
}

export function LengthInput({
  value,
  fromUnit,
  toUnit,
  onValueChange,
  onFromUnitChange,
  onToUnitChange,
}: LengthInputProps) {
  const locale = useLocale() as "en" | "id";
  const t = lengthInputText[locale];

  const UNITS: { label: string; value: LengthUnit }[] = [
    { label: t.units.millimeter, value: "millimeter" },
    { label: t.units.centimeter, value: "centimeter" },
    { label: t.units.meter, value: "meter" },
    { label: t.units.kilometer, value: "kilometer" },
    { label: t.units.inch, value: "inch" },
    { label: t.units.foot, value: "foot" },
    { label: t.units.yard, value: "yard" },
    { label: t.units.mile, value: "mile" },
  ];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4">
        {/* Value */}
        <div className="space-y-1">
          <Label htmlFor="length-value">
            {t.valueLabel}
          </Label>
          <Input
            id="length-value"
            type="number"
            value={value}
            onChange={(e) =>
              onValueChange(Number(e.target.value))
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* From */}
          <div className="space-y-1">
            <Label>{t.fromLabel}</Label>
            <Select
              value={fromUnit}
              onValueChange={(value) =>
                onFromUnitChange(
                  value as LengthUnit
                )
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={
                    t.selectUnitPlaceholder
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-(--radix-select-trigger-width)">
                {UNITS.map((unit) => (
                  <SelectItem
                    key={unit.value}
                    value={unit.value}
                  >
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* To */}
          <div className="space-y-1">
            <Label>{t.toLabel}</Label>
            <Select
              value={toUnit}
              onValueChange={(value) =>
                onToUnitChange(
                  value as LengthUnit
                )
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={
                    t.selectUnitPlaceholder
                  }
                />
              </SelectTrigger>
              <SelectContent className="w-(--radix-select-trigger-width)">
                {UNITS.map((unit) => (
                  <SelectItem
                    key={unit.value}
                    value={unit.value}
                  >
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </ToolCard>
  );
}
