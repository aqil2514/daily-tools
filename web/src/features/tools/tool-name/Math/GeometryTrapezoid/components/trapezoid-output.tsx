"use client";

import { TrapezoidSVG } from "./trapezoid-svg";
import { calculateTrapezoid } from "../utils/calculate-trapezoid";
import { SubHeading } from "@/components/atoms/subHeading";
import { formatMeasurement } from "@/utils/formatter/formatMeasurement";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { ResultCard } from "@/components/molecules/card/result-card";
import { MeasurementInfoRow } from "@/components/molecules/row/measurement-info-row";
import { FormulaList } from "@/components/molecules/list/formula-list";
import { useLocale } from "next-intl";
import { i18nTrapezoidOutput } from "../i18n/trapezoid-output";

interface Props {
  a: number;
  b: number;
  t: number;
  c: number;
  d: number;
}

export function TrapezoidOutput({
  a,
  b,
  t,
  c,
  d,
}: Props) {
  const locale = useLocale();
  const tI18n = i18nTrapezoidOutput[locale];

  const { area, perimeter } = calculateTrapezoid(
    a,
    b,
    t,
    c,
    d
  );

  return (
    <ToolCard>
      <div className="space-y-5">
        {/* Subheading */}
        <SubHeading>{tI18n.title}</SubHeading>

        {/* SVG Illustration */}
        <div className="flex justify-center">
          <TrapezoidSVG a={a} b={b} t={t} />
        </div>

        {/* Info rows */}
        <MeasurementInfoRow
          label={tI18n.aInfo.label}
          value={formatMeasurement(a, { unit: "cm" })}
          description={tI18n.aInfo.description}
        />

        <MeasurementInfoRow
          label={tI18n.bInfo.label}
          value={formatMeasurement(b, { unit: "cm" })}
          description={tI18n.bInfo.description}
        />

        <MeasurementInfoRow
          label={tI18n.tInfo.label}
          value={formatMeasurement(t, { unit: "cm" })}
          description={tI18n.tInfo.description}
        />

        <MeasurementInfoRow
          label={tI18n.cInfo.label}
          value={formatMeasurement(c, { unit: "cm" })}
          description={tI18n.cInfo.description}
        />

        <MeasurementInfoRow
          label={tI18n.dInfo.label}
          value={formatMeasurement(d, { unit: "cm" })}
          description={tI18n.dInfo.description}
        />

        {/* Formula */}
        <FormulaList
          title={tI18n.formula.title}
          items={[
            {
              label: tI18n.formula.area,
              formula: "L = (a + b) × t / 2",
            },
            {
              label: tI18n.formula.perimeter,
              formula: "K = a + b + c + d",
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
