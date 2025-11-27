"use client";

interface Props {
  quality: number;
  setQuality: (q: number) => void;
}

export function QualitySelector({ quality, setQuality }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Compression Quality ({quality}%)</label>
      <input
        type="range"
        min={1}
        max={100}
        value={quality}
        onChange={(e) => setQuality(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
