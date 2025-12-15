"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
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

import { TemperatureUnit } from "../types/temperature-types";
import { temperatureInputText } from "../i18n/temperature-input";

interface TemperatureInputProps {
  value: number;
  fromUnit: TemperatureUnit;
  toUnit: TemperatureUnit;
  onValueChange: (value: number) => void;
  onFromUnitChange: (unit: TemperatureUnit) => void;
  onToUnitChange: (unit: TemperatureUnit) => void;
}

export function TemperatureInput({
  value,
  fromUnit,
  toUnit,
  onValueChange,
  onFromUnitChange,
  onToUnitChange,
}: TemperatureInputProps) {
  const locale = useLocale() as "en" | "id";
  const t = temperatureInputText[locale];

  const UNITS: { label: string; value: TemperatureUnit }[] = [
    { label: t.units.celsius, value: "celsius" },
    { label: t.units.fahrenheit, value: "fahrenheit" },
    { label: t.units.kelvin, value: "kelvin" },
  ];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4">
        {/* Value */}
        <div className="space-y-1">
          <Label htmlFor="temperature-value">
            {t.valueLabel}
          </Label>
          <Input
            id="temperature-value"
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
                  value as TemperatureUnit
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
                  value as TemperatureUnit
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
