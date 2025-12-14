"use client";

import { useState } from "react";
import { SemicircleInput } from "./semicircle-input";
import { SemicircleOutput } from "./semicircle-output";
import { SemicircleSimulation } from "./semicircle-simulation";

export function GeometrySemicircle() {
  const [radius, setRadius] = useState(7);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SemicircleInput
          radius={radius}
          setRadius={setRadius}
        />
        <SemicircleOutput radius={radius} />
      </div>

      <SemicircleSimulation />
    </div>
  );
}
