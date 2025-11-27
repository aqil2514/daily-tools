"use client";

interface Props {
  angle: number;
  setAngle: (v: number) => void;
}

export function RotateControls({ angle, setAngle }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Rotation (degrees)</label>
      <input
        type="range"
        min={0}
        max={360}
        value={angle}
        onChange={(e) => setAngle(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-sm text-center">{angle}°</p>
    </div>
  );
}
