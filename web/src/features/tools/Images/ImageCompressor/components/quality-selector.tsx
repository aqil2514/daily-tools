"use client";
import { useImageCompressor } from "../provider";

export function QualitySelector() {
  const { quality, setQuality, previewUrl, fileMime } =
    useImageCompressor();

  if (!previewUrl) return null;

  const isLossy =
    fileMime.includes("jpeg") ||
    fileMime.includes("jpg") ||
    fileMime.includes("webp") ||
    fileMime.includes("avif");

  if (!isLossy) return null;

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Compression Quality ({quality}%)
      </label>
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
