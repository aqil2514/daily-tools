"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useImageResizer } from "../provider";

export function ResizerSetting() {
  const { setResizerSettings, resizerSettings, previewUrl } = useImageResizer();
  const { width, height, keepRatio, ratio } = resizerSettings;

  // Handler Width
  const handleWidthChange = (value: number) => {
    if (!keepRatio) {
      setResizerSettings((prev) => ({ ...prev, width: value }));
      return;
    }

    // Keep ratio ON
    const newHeight = Math.round(value / ratio);
    setResizerSettings((prev) => ({
      ...prev,
      width: value,
      height: newHeight,
    }));
  };

  // Handler Height
  const handleHeightChange = (value: number) => {
    if (!keepRatio) {
      setResizerSettings((prev) => ({ ...prev, height: value }));
      return;
    }

    // Keep ratio ON
    const newWidth = Math.round(value * ratio);
    setResizerSettings((prev) => ({
      ...prev,
      height: value,
      width: newWidth,
    }));
  };

  // Toggle keep ratio
  const toggleRatio = () => {
    setResizerSettings((prev) => ({
      ...prev,
      keepRatio: !prev.keepRatio,
    }));
  };

  return (
    <div className="space-y-4 mt-2 px-4">
      <p className="font-semibold">Pengaturan Dimensi</p>

      <div className="grid grid-cols-2 gap-4">
        {/* WIDTH */}
        <div className="space-y-2">
          <Label>Width</Label>
          <Input
            type="number"
            value={width}
            onChange={(e) => {
              const val = e.target.valueAsNumber;
              if (!isNaN(val)) handleWidthChange(val);
            }}
            disabled={!previewUrl}
            placeholder="Width Image..."
          />
        </div>

        {/* HEIGHT */}
        <div className="space-y-2">
          <Label>Height</Label>
          <Input
            type="number"
            value={height}
            onChange={(e) => {
              const val = e.target.valueAsNumber;
              if (!isNaN(val)) handleHeightChange(val);
            }}
            disabled={!previewUrl}
            placeholder="Height Image..."
          />
        </div>
      </div>

      {/* KEEP RATIO CHECKBOX */}
      <div className="flex gap-2 items-center">
        <input
          id="ratio-setting"
          type="checkbox"
          checked={keepRatio}
          onChange={toggleRatio}
          disabled={!previewUrl}
        />
        <Label htmlFor="ratio-setting">Keep Ratio</Label>
      </div>
    </div>
  );
}
