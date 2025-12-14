"use client";

import { useState } from "react";
import { RectangleInput } from "./rectangle-input";
import { RectangleOutput } from "./rectangle-output";
import { RectangleSimulation } from "./rectangle-simulation";

export function GeometryRectangle() {
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(8);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RectangleInput
          length={length}
          width={width}
          setLength={setLength}
          setWidth={setWidth}
        />

        <RectangleOutput length={length} width={width} />
      </div>

      <RectangleSimulation />
    </div>
  );
}
