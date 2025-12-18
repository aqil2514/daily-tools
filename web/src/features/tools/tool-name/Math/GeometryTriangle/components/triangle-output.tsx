"use client";

import { TriangleSVG } from "./triangle-svg";
import { calculateTriangle } from "../utils/calculate-triangle";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nTriangleOutput } from "../i18n/triangle-output";

interface Props {
  base: number;
  height: number;
}

export function TriangleOutput({ base, height }: Props) {
  const locale = useLocale();
  const t = i18nTriangleOutput[locale];

  const { area, hypotenuse, perimeter } =
    calculateTriangle(base, height);

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{t.title}</SubHeading>

        {/* SVG Illustration */}
        <div className="flex justify-center">
          <TriangleSVG base={base} height={height} />
        </div>

        {/* Base Info */}
        <MeasurementInfoRow
          label={t.baseInfo.label}
          value={formatMeasurement(base, { unit: "cm" })}
          description={t.baseInfo.description}
        />

        {/* Height Info */}
        <MeasurementInfoRow
          label={t.heightInfo.label}
          value={formatMeasurement(height, { unit: "cm" })}
          description={t.heightInfo.description}
        />

        {/* Hypotenuse Info */}
        <MeasurementInfoRow
          label={t.hypotenuseInfo.label}
          value={formatMeasurement(hypotenuse, { unit: "cm" })}
          description={t.hypotenuseInfo.description}
        />

        {/* Formula Section */}
        <FormulaList
          title={t.formula.title}
          items={[
            { label: t.formula.area, formula: "L = (a × t) / 2" },
            {
              label: t.formula.hypotenuse,
              formula: "c = √(a² + t²)",
            },
            {
              label: t.formula.perimeter,
              formula: "K = a + t + c",
            },
          ]}
        />

        {/* Results */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          <ResultCard
            label={t.result.area}
            value={formatMeasurement(area, { unit: "cm2" })}
          />

          <ResultCard
            label={t.result.hypotenuse}
            value={formatMeasurement(hypotenuse, { unit: "cm" })}
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
