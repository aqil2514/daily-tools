"use client";

interface Props {
  quality: number;
  setQuality: (v: number) => void;
}

export function CompressSettings({ quality, setQuality }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Compression Quality ({Math.round(quality * 100)}%)
      </label>
      <input
        type="range"
        min={0.1}
        max={0.9}
        step={0.05}
        value={quality}
        onChange={(e) => setQuality(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
