"use client";

import { SquareSVG } from "./square-svg";
import { calculateSquare } from "../utils/calculate-square";
import { SubHeading } from "@/components/atoms/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nSquareOutput } from "../i18n/square-output";

interface Props {
  side: number;
}

export function SquareOutput({ side }: Props) {
  const locale = useLocale();
  const t = i18nSquareOutput[locale];

  const { area, perimeter } = calculateSquare(side);

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{t.title}</SubHeading>

        {/* SVG Illustration */}
        <div className="flex justify-center">
          <SquareSVG side={side} />
        </div>

        {/* Side Information */}
        <MeasurementInfoRow
          label={t.sideInfo.label}
          value={formatMeasurement(side, { unit: "cm" })}
          description={t.sideInfo.description}
        />

        {/* Formula Section */}
        <FormulaList
          title={t.formula.title}
          items={[
            { label: t.formula.area, formula: "L = s × s" },
            { label: t.formula.perimeter, formula: "K = 4 × s" },
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
