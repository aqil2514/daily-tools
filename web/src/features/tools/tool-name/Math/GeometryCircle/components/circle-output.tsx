"use client";

import { CircleSVG } from "./circle-svg";
import { calculateCircle } from "../utils/calculate-circle";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nCircleOutput } from "../i18n/circle-output";

interface Props {
  radius: number;
}

export function CircleOutput({ radius }: Props) {
  const locale = useLocale();
  const t = i18nCircleOutput[locale];

  const { area, circumference } = calculateCircle(radius);

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{t.title}</SubHeading>

        {/* SVG Illustration */}
        <div className="flex justify-center">
          <CircleSVG radius={radius} />
        </div>

        {/* Radius Info */}
        <MeasurementInfoRow
          label={t.radiusInfo.label}
          value={formatMeasurement(radius, { unit: "cm" })}
          description={t.radiusInfo.description}
        />

        {/* Formula Section */}
        <FormulaList
          title={t.formula.title}
          items={[
            {
              label: t.formula.area,
              formula: "L = π × r²",
            },
            {
              label: t.formula.circumference,
              formula: "K = 2 × π × r",
            },
          ]}
        />

        {/* Results */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <ResultCard
            label={t.result.area}
            value={formatMeasurement(area, {
              unit: "cm2",
            })}
          />

          <ResultCard
            label={t.result.circumference}
            value={formatMeasurement(circumference, {
              unit: "cm",
            })}
          />
        </div>
      </div>
    </ToolCard>
  );
}
