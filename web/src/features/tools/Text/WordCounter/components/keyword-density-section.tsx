import { useWordCounter } from "../store/provider";
import { SubHeading } from "@/components/atoms/subHeading";
import { useTranslations } from "next-intl";
import { formatNumber } from "@/utils/formatNumber";
import { useState } from "react";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function KeywordDensitySection() {
  const t = useTranslations("tools-text.word-counter");
  const { summary } = useWordCounter();

  // kata yang di-hide user
  const [hiddenWords, setHiddenWords] = useState<string[]>([]);

  if (!summary.keywordDensity.length) return null;

  // filter kata berdasarkan hiddenWords
  const filteredItems = summary.keywordDensity.filter(
    (item) => !hiddenWords.includes(item.word)
  );

  return (
    <div className="space-y-4 mt-10">
      <SubHeading>{t("keyword-density-title")}</SubHeading>

      <ScrollArea className="h-96">

      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground border-b">
              <th className="py-2 text-left">{t("keyword-density-word")}</th>
              <th className="py-2 text-left">{t("keyword-density-count")}</th>
              <th className="py-2 text-left">{t("keyword-density-density")}</th>
              <th className="py-2"></th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item.word}
                className="border-b last:border-0 group hover:bg-muted/40 transition-colors"
              >
                <td className="py-2 font-medium">{item.word}</td>

                <td className="py-2">{formatNumber(item.count)}</td>

                <td className="py-2">{item.density}%</td>

                {/* Tombol hide (X) muncul saat hover) */}
                <td className="py-2 text-right w-8">
                  <button
                    onClick={() =>
                      setHiddenWords((prev) => [...prev, item.word])
                    }
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-red-500"
                  >
                    <X size={16} strokeWidth={2} />
                  </button>
                </td>
              </tr>
            ))}

            {/* Jika semua keyword tersembunyi */}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 text-center text-muted-foreground">
                  {t("keyword-density-no-data")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </ScrollArea>

    </div>
  );
}
