"use client";

import { useState } from "react";
import { TriangleInput } from "./triangle-input";
import { TriangleOutput } from "./triangle-output";
import { TriangleSimulation } from "./triangle-simulation";

export function GeometryTriangle() {
  const [base, setBase] = useState<number>(10);
  const [height, setHeight] = useState<number>(6);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TriangleInput
          base={base}
          height={height}
          setBase={setBase}
          setHeight={setHeight}
        />

        <TriangleOutput base={base} height={height} />
      </div>

      <TriangleSimulation />
    </div>
  );
}
