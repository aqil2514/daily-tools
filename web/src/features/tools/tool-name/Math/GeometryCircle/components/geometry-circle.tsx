"use client";

import { useState } from "react";
import { CircleInput } from "./circle-input";
import { CircleOutput } from "./circle-output";
import { CircleSimulation } from "./circle-simulation";
import { RelatedToolSelect } from "@/components/molecules/select/related-tool-select";
import { geometryRelatedTools } from "../../misc";

export function GeometryCircle() {
  const [radius, setRadius] = useState<number>(7);

  return (
    <div className="space-y-6">
      <RelatedToolSelect relatedTools={geometryRelatedTools} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CircleInput radius={radius} setRadius={setRadius} />
        <CircleOutput radius={radius} />
      </div>

      <CircleSimulation />
    </div>
  );
}
