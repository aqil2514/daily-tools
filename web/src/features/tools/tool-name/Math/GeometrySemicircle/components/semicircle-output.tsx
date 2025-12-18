"use client";

import { SemicircleSVG } from "./semicircle-svg";
import { calculateSemicircle } from "../utils/calculate-semicircle";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nSemicircleOutput } from "../i18n/semicircle-output";

interface Props {
  radius: number;
}

export function SemicircleOutput({ radius }: Props) {
  const locale = useLocale();
  const t = i18nSemicircleOutput[locale];

  const { area, perimeter } = calculateSemicircle(radius);

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{t.title}</SubHeading>

        {/* SVG */}
        <div className="flex justify-center">
          <SemicircleSVG radius={radius} />
        </div>

        {/* Radius info */}
        <MeasurementInfoRow
          label={t.radiusInfo.label}
          value={formatMeasurement(radius, { unit: "cm" })}
          description={t.radiusInfo.description}
        />

        {/* Formula */}
        <FormulaList
          title={t.formula.title}
          items={[
            {
              label: t.formula.area,
              formula: "L = ½ × π × r²",
            },
            {
              label: t.formula.perimeter,
              formula: "K = π × r + 2 × r",
            },
          ]}
        />

        {/* Results */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <ResultCard
            label={t.result.area}
            value={formatMeasurement(area, { unit: "cm2" })}
          />
          <ResultCard
            label={t.result.perimeter}
            value={formatMeasurement(perimeter, { unit: "cm" })}
          />
        </div>
      </div>
    </ToolCard>
  );
}
