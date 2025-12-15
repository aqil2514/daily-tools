"use client";

import { useMemo, useState } from "react";

import { convertLength } from "../utils/convert-length";
import { LengthUnit } from "../types/length-types";
import { LengthInput } from "./length-input";
import { LengthOutput } from "./length-output";
import { LengthInsight } from "./length-insight";
import { LengthReferenceTable } from "./length-reference-table";

export function LengthConverter() {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<LengthUnit>("meter");
  const [toUnit, setToUnit] = useState<LengthUnit>("kilometer");
  const result = useMemo(() => {
    return convertLength(value, fromUnit, toUnit);
  }, [value, fromUnit, toUnit]);

  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-2 gap-4">
        <LengthInput
          value={value}
          fromUnit={fromUnit}
          toUnit={toUnit}
          onValueChange={setValue}
          onFromUnitChange={setFromUnit}
          onToUnitChange={setToUnit}
        />

        <LengthOutput
          value={value}
          fromUnit={fromUnit}
          toUnit={toUnit}
          result={result}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <LengthInsight />
        <LengthReferenceTable />
      </div>
    </div>
  );
}
