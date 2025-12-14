"use client";
import { useState } from "react";
import { SquareInput } from "./square-input";
import { SquareOutput } from "./square-output";
import { SquareSimulation } from "./square-simulation";

export function GeometrySquare() {
  const [value, setValue] = useState<number>(10);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SquareInput setValue={setValue} value={value} />
        <SquareOutput side={value} />
      </div>

      <SquareSimulation />
    </div>
  );
}
