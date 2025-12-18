"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { LengthUnit } from "../types/length-types";
import { lengthOutputText } from "../i18n/length-output";

interface LengthOutputProps {
  value: number;
  fromUnit: LengthUnit;
  toUnit: LengthUnit;
  result: number;
}

function formatLength(value: number) {
  if (Number.isNaN(value)) return "–";
  return value.toLocaleString(undefined, {
    maximumFractionDigits: 6,
  });
}

function getUnitLabel(unit: LengthUnit) {
  switch (unit) {
    case "millimeter":
      return "mm";
    case "centimeter":
      return "cm";
    case "meter":
      return "m";
    case "kilometer":
      return "km";
    case "inch":
      return "in";
    case "foot":
      return "ft";
    case "yard":
      return "yd";
    case "mile":
      return "mi";
    default:
      return "";
  }
}

// Nama unit (human-readable) untuk kalimat detail
function getUnitName(unit: LengthUnit) {
  switch (unit) {
    case "millimeter":
      return "Millimeter";
    case "centimeter":
      return "Centimeter";
    case "meter":
      return "Meter";
    case "kilometer":
      return "Kilometer";
    case "inch":
      return "Inch";
    case "foot":
      return "Foot";
    case "yard":
      return "Yard";
    case "mile":
      return "Mile";
    default:
      return "";
  }
}

export function LengthOutput({
  value,
  fromUnit,
  toUnit,
  result,
}: LengthOutputProps) {
  const locale = useLocale() as "en" | "id";
  const t = lengthOutputText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-3">
        {/* Main Result */}
        <div className="text-center text-2xl font-semibold">
          {formatLength(value)} {getUnitLabel(fromUnit)} ={" "}
          {formatLength(result)} {getUnitLabel(toUnit)}
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
