"use client";

import { useState } from "react";
import { KiteInput } from "./kite-input";
import { KiteOutput } from "./kite-output";
import { KiteSimulation } from "./kite-simulation";

export function GeometryKite() {
  const [d1, setD1] = useState(12);
  const [d2, setD2] = useState(8);
  const [a, setA] = useState(7); // sisi sama 1
  const [b, setB] = useState(5); // sisi sama 2

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <KiteInput
          d1={d1}
          d2={d2}
          a={a}
          b={b}
          setD1={setD1}
          setD2={setD2}
          setA={setA}
          setB={setB}
        />
        <KiteOutput d1={d1} d2={d2} a={a} b={b} />
      </div>

      <KiteSimulation />
    </div>
  );
}
