"use client";
import { ToolCard } from "@/components/tools/tool-card";
import { UUIDController } from "./uuid-controller";
import { UUIDFormat } from "./uuid-format";
import { UUIDOutput } from "./uuid-output";
import { useState } from "react";

export interface UUIDState {
  version: "v1" | "v4" | "v7";
  count: number;
  formatOptions: { withDash: boolean; uppercase: boolean };
}

const defaultState: UUIDState = {
  version: "v4",
  count: 1,
  formatOptions: { withDash: false, uppercase: false },
};

export function UUIDGenerator() {
  const [uuidState, setUuidState] = useState<UUIDState>(defaultState);
  const [uuids, setUuids] = useState<string[]>([]);

  return (
    <div className="space-y-4">
      <ToolCard>
        <UUIDController
          setUuidState={setUuidState}
          uuidState={uuidState}
          setUuids={setUuids}
        />
        <UUIDFormat
          setUuidState={setUuidState}
          uuidState={uuidState}
          uuids={uuids}
        />
        <UUIDOutput uuids={uuids} />
      </ToolCard>
    </div>
  );
}
