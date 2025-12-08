"use client";

import zxcvbn from "zxcvbn";
import { useTranslations } from "next-intl";

const SCORE_COLORS = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-emerald-600",
];

export function StrengthMeter({ value }: { value: string }) {
  const t = useTranslations("tools-developer.password-generator");

  if (!value) return null;

  const result = zxcvbn(value);
  const score = result.score;

  return (
    <div className="space-y-2">
      {/* LABEL */}
      <p className="text-sm font-medium">
        {t("strengthLabel")}{" "}
        <span className="font-semibold">{t(`score.${score}`)}</span>
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
