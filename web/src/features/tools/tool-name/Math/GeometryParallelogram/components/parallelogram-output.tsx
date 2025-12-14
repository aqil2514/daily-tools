"use client";

import { ParallelogramSVG } from "./parallelogram-svg";
import { calculateParallelogram } from "../utils/calculate-parallelogram";
import { SubHeading } from "@/components/atoms/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nParallelogramOutput } from "../i18n/parallelogram-output";

interface Props {
  a: number;
  t: number;
  b: number;
}

export function ParallelogramOutput({ a, t, b }: Props) {
  const locale = useLocale();
  const tI18n = i18nParallelogramOutput[locale];

  const { area, perimeter } = calculateParallelogram(a, t, b);

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{tI18n.title}</SubHeading>

        {/* SVG */}
        <div className="flex justify-center">
          <ParallelogramSVG a={a} t={t} b={b} />
        </div>

        {/* Info */}
        <MeasurementInfoRow
          label={tI18n.aInfo.label}
          value={formatMeasurement(a, { unit: "cm" })}
          description={tI18n.aInfo.description}
        />

        <MeasurementInfoRow
          label={tI18n.tInfo.label}
          value={formatMeasurement(t, { unit: "cm" })}
          description={tI18n.tInfo.description}
        />

        <MeasurementInfoRow
          label={tI18n.bInfo.label}
          value={formatMeasurement(b, { unit: "cm" })}
          description={tI18n.bInfo.description}
        />

        {/* Formula */}
        <FormulaList
          title={tI18n.formula.title}
          items={[
            {
              label: tI18n.formula.area,
              formula: "L = a × t",
            },
            {
              label: tI18n.formula.perimeter,
              formula: "K = 2 × (a + b)",
            },
          ]}
        />

        {/* Results */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <ResultCard
            label={tI18n.result.area}
            value={formatMeasurement(area, {
              unit: "cm2",
            })}
          />
          <ResultCard
            label={tI18n.result.perimeter}
            value={formatMeasurement(perimeter, {
              unit: "cm",
            })}
          />
        </div>
      </div>
    </ToolCard>
  );
}
