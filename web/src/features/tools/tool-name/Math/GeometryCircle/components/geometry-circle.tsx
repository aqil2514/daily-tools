"use client";

import { useState } from "react";
import { CircleInput } from "./circle-input";
import { CircleOutput } from "./circle-output";
import { CircleSimulation } from "./circle-simulation";

export function GeometryCircle() {
  const [radius, setRadius] = useState<number>(7);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CircleInput radius={radius} setRadius={setRadius} />
        <CircleOutput radius={radius} />
      </div>

      <CircleSimulation />
    </div>
  );
}
