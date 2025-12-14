"use client";

import { useState } from "react";
import { RhombusInput } from "./rhombus-input";
import { RhombusOutput } from "./rhombus-output";
import { RhombusSimulation } from "./rhombus-simulation";

export function GeometryRhombus() {
  const [d1, setD1] = useState(10);
  const [d2, setD2] = useState(8);
  const [s, setS] = useState(7);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RhombusInput
          d1={d1}
          d2={d2}
          s={s}
          setD1={setD1}
          setD2={setD2}
          setS={setS}
        />
        <RhombusOutput d1={d1} d2={d2} s={s} />
      </div>

      <RhombusSimulation />
    </div>
  );
}
