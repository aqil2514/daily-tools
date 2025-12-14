"use client";

import { RectangleSVG } from "./rectangle-svg";
import { calculateRectangle } from "../utils/calculate-rectangle";
import { SubHeading } from "@/components/atoms/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nRectangleOutput } from "../i18n/rectangle-output";

interface Props {
  length: number;
  width: number;
}

export function RectangleOutput({ length, width }: Props) {
  const locale = useLocale();
  const t = i18nRectangleOutput[locale];

  const { area, perimeter } = calculateRectangle(length, width);

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{t.title}</SubHeading>

        {/* SVG Illustration */}
        <div className="flex justify-center">
          <RectangleSVG length={length} width={width} />
        </div>

        {/* Length Information */}
        <MeasurementInfoRow
          label={t.lengthInfo.label}
          value={formatMeasurement(length, { unit: "cm" })}
          description={t.lengthInfo.description}
        />

        {/* Width Information */}
        <MeasurementInfoRow
          label={t.widthInfo.label}
          value={formatMeasurement(width, { unit: "cm" })}
          description={t.widthInfo.description}
        />

        {/* Formula Section */}
        <FormulaList
          title={t.formula.title}
          items={[
            { label: t.formula.area, formula: "L = p × l" },
            {
              label: t.formula.perimeter,
              formula: "K = 2 × (p + l)",
            },
          ]}
        />

        {/* Calculation Results */}
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
