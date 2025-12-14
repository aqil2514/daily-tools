"use client";

import { useState } from "react";
import { ParallelogramInput } from "./parallelogram-input";
import { ParallelogramOutput } from "./parallelogram-output";
import { ParallelogramSimulation } from "./parallelogram-simulation";
import { RelatedToolSelect } from "@/components/molecules/select/related-tool-select";
import { geometryRelatedTools } from "../../misc";

export function GeometryParallelogram() {
  const [a, setA] = useState(10); // alas
  const [t, setT] = useState(6); // tinggi
  const [b, setB] = useState(8); // sisi miring

  return (
    <div className="space-y-6">
      <RelatedToolSelect relatedTools={geometryRelatedTools} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ParallelogramInput
          a={a}
          t={t}
          b={b}
          setA={setA}
          setT={setT}
          setB={setB}
        />
        <ParallelogramOutput a={a} t={t} b={b} />
      </div>

      <ParallelogramSimulation />
    </div>
  );
}
