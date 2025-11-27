"use client";

interface Props {
  width: number | null;
  height: number | null;
  keepRatio: boolean;
  onWidthChange: (w: number) => void;
  onHeightChange: (h: number) => void;
  onToggleKeepRatio: () => void;
}

export function DimensionInput({
  width,
  height,
  keepRatio,
  onWidthChange,
  onHeightChange,
  onToggleKeepRatio,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Resize Dimensions</label>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          value={width ?? ""}
          onChange={(e) => onWidthChange(Number(e.target.value))}
          placeholder="Width"
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          value={height ?? ""}
          onChange={(e) => onHeightChange(Number(e.target.value))}
          placeholder="Height"
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={keepRatio}
          onChange={onToggleKeepRatio}
        />
        <span className="text-sm">Keep aspect ratio</span>
      </div>
    </div>
  );
}
