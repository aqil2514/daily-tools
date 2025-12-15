"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { TemperatureUnit } from "../types/temperature-types";
import { temperatureInsightText } from "../i18n/temperature-insight";

interface TemperatureInsightProps {
  fromUnit: TemperatureUnit;
  toUnit: TemperatureUnit;
}

function getFormula(from: TemperatureUnit, to: TemperatureUnit) {
  if (from === to) return null;

  if (from === "celsius" && to === "fahrenheit") {
    return "°F = (°C × 9/5) + 32";
  }
  if (from === "fahrenheit" && to === "celsius") {
    return "°C = (°F − 32) × 5/9";
  }
  if (from === "celsius" && to === "kelvin") {
    return "K = °C + 273.15";
  }
  if (from === "kelvin" && to === "celsius") {
    return "°C = K − 273.15";
  }
  if (from === "fahrenheit" && to === "kelvin") {
    return "K = (°F − 32) × 5/9 + 273.15";
  }
  if (from === "kelvin" && to === "fahrenheit") {
    return "°F = (K − 273.15) × 9/5 + 32";
  }

  return null;
}

export function TemperatureInsight({
  fromUnit,
  toUnit,
}: TemperatureInsightProps) {
  const locale = useLocale() as "en" | "id";
  const t = temperatureInsightText[locale];

  const formula = getFormula(fromUnit, toUnit);

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4 text-sm">
        {/* Formula */}
        {formula && (
          <>
            <div>
              <p className="font-medium">
                {t.formulaTitle}
              </p>
              <p className="mt-1 font-mono bg-muted px-3 py-2 rounded">
                {formula}
              </p>
            </div>

            <Separator />
          </>
        )}

        {/* Examples */}
        <div>
          <p className="font-medium">
            {t.examplesTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            {t.examples.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Notes */}
        <div>
          <p className="font-medium">
            {t.notesTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            {t.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </ToolCard>
  );
}
