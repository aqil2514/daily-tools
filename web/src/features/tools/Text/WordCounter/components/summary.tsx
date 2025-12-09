import { SubHeading } from "@/components/atoms/subHeading";
import { useTranslations } from "next-intl";
import { useWordCounter } from "../store/provider";
import { formatNumber } from "@/utils/formatNumber";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Summary() {
  const t = useTranslations("tools-text.word-counter");
  const { summary } = useWordCounter();

  return (
    <div className="space-y-6">
      <SubHeading>{t("summary-title")}</SubHeading>
      <ScrollArea className="h-96">
        <div className="grid lg:grid-cols-2 gap-3">
          <SummaryItem summaryKey={t("summary.words")} value={summary.words} />

          <SummaryItem
            summaryKey={t("summary.characters")}
            value={summary.characters}
          />

          <SummaryItem
            summaryKey={t("summary.charactersNoSpace")}
            value={summary.charactersNoSpace}
          />

          <SummaryItem
            summaryKey={t("summary.sentences")}
            value={summary.sentences}
          />

          <SummaryItem
            summaryKey={t("summary.paragraphs")}
            value={summary.paragraphs}
          />

          {/* Waktu Membaca */}
          <SummaryItem
            summaryKey={t("summary.readingTime")}
            value={summary.readingTime}
          />

          {/* Waktu Bicara */}
          <SummaryItem
            summaryKey={t("summary.speakingTime")}
            value={summary.speakingTime}
          />

          {/* Kata Unik */}
          <SummaryItem
            summaryKey={t("summary.uniqueWords")}
            value={summary.uniqueWords}
          />

          {/* Rata-rata kata per kalimat */}
          <SummaryItem
            summaryKey={t("summary.avgWordsPerSentence")}
            value={summary.avgWordsPerSentence}
          />
        </div>
      </ScrollArea>
    </div>
  );
}

const SummaryItem: React.FC<{ summaryKey: string; value: string | number }> = ({
  summaryKey,
  value,
}) => {
  const display = typeof value === "number" ? formatNumber(value) : value;

  return (
    <div className="p-4 rounded-xl border bg-card shadow-sm">
      <p className="text-sm text-muted-foreground">{summaryKey}</p>
      <p className="text-2xl font-semibold mt-1">{display}</p>
    </div>
  );
};
