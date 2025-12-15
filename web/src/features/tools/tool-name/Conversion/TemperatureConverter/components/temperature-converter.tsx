"use client";

import { useMemo, useState } from "react";
import { convertTemperature } from "../utils/convert-temperature";
import { TemperatureUnit } from "../types/temperature-types";
import { TemperatureInput } from "./temperature-input";
import { TemperatureOutput } from "./temperature-output";
import { TemperatureInsight } from "./temperature-insight";
import { TemperatureReferenceTable } from "./temperature-reference-table";

export function TemperatureConverter() {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>("celsius");
  const [toUnit, setToUnit] = useState<TemperatureUnit>("fahrenheit");

  const result = useMemo(() => {
    return convertTemperature(value, fromUnit, toUnit);
  }, [value, fromUnit, toUnit]);

  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-2 gap-4">
        <TemperatureInput
          value={value}
          fromUnit={fromUnit}
          toUnit={toUnit}
          onValueChange={setValue}
          onFromUnitChange={setFromUnit}
          onToUnitChange={setToUnit}
        />

        <TemperatureOutput
          value={value}
          fromUnit={fromUnit}
          toUnit={toUnit}
          result={result}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <TemperatureInsight fromUnit={fromUnit} toUnit={toUnit} />
        <TemperatureReferenceTable />
      </div>
    </div>
  );
}
