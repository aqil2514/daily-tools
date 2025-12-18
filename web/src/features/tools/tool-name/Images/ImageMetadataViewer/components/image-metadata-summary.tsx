"use client";

import { useLocale } from "next-intl";
import { i18nImageMetadataSummary } from "../i18n/image-metadata-summary";

interface Summary {
  resolution: string | null;
  camera: string | null;
  date: string | null;
  size: string | null;
}

interface Props {
  summary: Summary | null;
}

export function ImageMetadataSummary({ summary }: Props) {
  const locale = useLocale();
  const t = i18nImageMetadataSummary[locale];

  if (!summary) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <SummaryItem label={t.resolution} value={summary.resolution} />
      <SummaryItem label={t.camera} value={summary.camera} />
      <SummaryItem label={t.date} value={summary.date} />
      <SummaryItem label={t.size} value={summary.size} />
    </div>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  if (!value) return null;

  return (
    <div className="rounded-lg border bg-muted/40 px-3 py-2">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-semibold leading-tight">{value}</div>
    </div>
  );
}
