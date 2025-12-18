"use client";

import { KiteSVG } from "./kite-svg";
import { calculateKite } from "../utils/calculate-kite";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nKiteOutput } from "../i18n/kite-output";

interface Props {
  d1: number;
  d2: number;
  a: number;
  b: number;
}

export function KiteOutput({ d1, d2, a, b }: Props) {
  const locale = useLocale();
  const t = i18nKiteOutput[locale];

  const { area, perimeter } = calculateKite(d1, d2, a, b);

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{t.title}</SubHeading>

        {/* SVG */}
        <div className="flex justify-center">
          <KiteSVG d1={d1} d2={d2} />
        </div>

        {/* Info rows */}
        <MeasurementInfoRow
          label={t.d1Info.label}
          value={formatMeasurement(d1, { unit: "cm" })}
          description={t.d1Info.description}
        />
        <MeasurementInfoRow
          label={t.d2Info.label}
          value={formatMeasurement(d2, { unit: "cm" })}
          description={t.d2Info.description}
        />
        <MeasurementInfoRow
          label={t.aInfo.label}
          value={formatMeasurement(a, { unit: "cm" })}
          description={t.aInfo.description}
        />
        <MeasurementInfoRow
          label={t.bInfo.label}
          value={formatMeasurement(b, { unit: "cm" })}
          description={t.bInfo.description}
        />

        {/* Formula */}
        <FormulaList
          title={t.formula.title}
          items={[
            { label: t.formula.area, formula: "L = (d₁ × d₂) / 2" },
            { label: t.formula.perimeter, formula: "K = 2 × (a + b)" },
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
