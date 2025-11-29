"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { useEffect, useState } from "react";

export function QRSettings() {
  const { get, set } = useQueryParams();
  const paramSize = Number(get("size"));
  const paramFgColor = get("fg-color");
  const paramBgColor = get("bg-color");
  const paramLevel = get("level");

  const [size, setSize] = useState<number>(paramSize === 0 ? 260 : paramSize);
  const [fgColor, setFgColor] = useState<string>(paramFgColor ?? "#FFFFFF");
  const [bgColor, setBgColor] = useState<string>(paramBgColor ?? "#000000");
  const [level, setLevel] = useState<string>(paramLevel ?? "M");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if(!paramSize) return setSize(260)
  }, [paramSize])

  return (
    <div className="space-y-4">
      {/* Size Slider */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Ukuran: {size}px</label>
        <input
          type="range"
          min={100}
          max={600}
          value={size}
          onMouseUp={() => set("size", String(size))}
          onChange={(e) => setSize(e.target.valueAsNumber)}
          className="w-full"
        />
      </div>

      {/* Colors */}
      <div className="flex gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Foreground</label>
          <input
            type="color"
            value={paramFgColor ?? "#FFFFFF"}
            onBlur={() => set("fg-color", fgColor)}
            onChange={(e) => setFgColor(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Background</label>
          <input
            type="color"
            onBlur={() => set("bg-color", bgColor)}
            value={paramBgColor ?? "#000000"}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
      </div>

      {/* Level */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Error Correction</label>
        <select
          value={level}
          onChange={(e) => {
            setLevel(e.target.value as "L" | "M" | "Q" | "H");
            set("level", e.target.value);
          }}
          className="border rounded-md p-2 text-sm"
        >
          <option value="L">L (Low)</option>
          <option value="M">M (Medium)</option>
          <option value="Q">Q (Quartile)</option>
          <option value="H">H (High)</option>
        </select>
      </div>
    </div>
  );
}
