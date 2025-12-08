"use client";

import zxcvbn from "zxcvbn";

const SCORE_TEXT = [
  "Very Weak",
  "Weak",
  "Fair",
  "Strong",
  "Very Strong",
];

const SCORE_COLORS = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-emerald-600",
];

export function StrengthMeter({ value }: { value: string }) {
  if (!value) return null;

  const result = zxcvbn(value);
  const score = result.score;

  return (
    <div className="space-y-2">
      {/* LABEL */}
      <p className="text-sm font-medium">
        Password Strength:{" "}
        <span className="font-semibold">{SCORE_TEXT[score]}</span>
      </p>

      {/* BAR */}
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded ${
              i <= score ? SCORE_COLORS[score] : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
