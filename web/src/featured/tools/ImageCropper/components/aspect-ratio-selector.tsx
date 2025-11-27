"use client";

import { ASPECT_RATIOS } from "../types/aspect";

interface Props {
  aspect: number | null;
  setAspect: (v: number | null) => void;
}

export function AspectRatioSelector({ aspect, setAspect }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Aspect Ratio</label>
      <select
        className="border p-2 rounded-md w-full"
        value={aspect ?? "free"}
        onChange={(e) => {
          const v = e.target.value;
          setAspect(v === "free" ? null : Number(v));
        }}
      >
        {ASPECT_RATIOS.map((opt) => (
          <option
            key={opt.label}
            value={opt.value === null ? "free" : opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
