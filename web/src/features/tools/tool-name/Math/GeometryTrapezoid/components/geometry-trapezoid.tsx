"use client";

import { useState } from "react";
import { TrapezoidInput } from "./trapezoid-input";
import { TrapezoidOutput } from "./trapezoid-output";
import { TrapezoidSimulation } from "./trapezoid-simulation";

export function GeometryTrapezoid() {
  const [a, setA] = useState(8); // alas atas
  const [b, setB] = useState(14); // alas bawah
  const [t, setT] = useState(6); // tinggi
  const [c, setC] = useState(7); // sisi miring kiri
  const [d, setD] = useState(7); // sisi miring kanan

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TrapezoidInput
          a={a}
          b={b}
          t={t}
          c={c}
          d={d}
          setA={setA}
          setB={setB}
          setT={setT}
          setC={setC}
          setD={setD}
        />
        <TrapezoidOutput a={a} b={b} t={t} c={c} d={d} />
      </div>

      <TrapezoidSimulation />
    </div>
  );
}
