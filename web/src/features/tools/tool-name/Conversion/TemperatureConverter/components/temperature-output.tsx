"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { TemperatureUnit } from "../types/temperature-types";
import { temperatureOutputText } from "../i18n/temperature-output";

interface TemperatureOutputProps {
  value: number;
  fromUnit: TemperatureUnit;
  toUnit: TemperatureUnit;
  result: number;
}

function formatTemperature(value: number) {
  if (Number.isNaN(value)) return "–";
  return value.toLocaleString(undefined, {
    maximumFractionDigits: 4,
  });
}

function getUnitLabel(unit: TemperatureUnit) {
  switch (unit) {
    case "celsius":
      return "°C";
    case "fahrenheit":
      return "°F";
    case "kelvin":
      return "K";
    default:
      return "";
  }
}

function getUnitName(unit: TemperatureUnit) {
  switch (unit) {
    case "celsius":
      return "Celsius";
    case "fahrenheit":
      return "Fahrenheit";
    case "kelvin":
      return "Kelvin";
    default:
      return "";
  }
}

export function TemperatureOutput({
  value,
  fromUnit,
  toUnit,
  result,
}: TemperatureOutputProps) {
  const locale = useLocale() as "en" | "id";
  const t = temperatureOutputText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-3">
        {/* Main Result */}
        <div className="text-center text-2xl font-semibold">
          {formatTemperature(value)}{" "}
          {getUnitLabel(fromUnit)} ={" "}
          {formatTemperature(result)}{" "}
          {getUnitLabel(toUnit)}
        </div>

        <Separator />

        {/* Detail */}
        <div className="text-sm text-muted-foreground text-center">
          {t.convertedDetail
            .replace("{from}", getUnitName(fromUnit))
            .replace("{to}", getUnitName(toUnit))}
        </div>
      </div>
    </ToolCard>
  );
}
