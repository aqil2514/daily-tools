"use client";

import { format } from "date-fns";
import { id as idLocale, enUS } from "date-fns/locale";
import { useLocale } from "next-intl";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { NextBirthdayResult } from "../utils/calculateNextBirthday";
import { ageCalculatorI18n } from "../i18n/age-output";

interface NextBirthdayInfoProps {
  data: NextBirthdayResult | null;
}

export function NextBirthdayInfo({ data }: NextBirthdayInfoProps) {
  const locale = useLocale() as "en" | "id";
  const t = ageCalculatorI18n[locale];

  if (!data) return null;

  const isTodayBirthday = data.daysLeft === 0;

  // 🎉 HAPPY BIRTHDAY STATE
  if (isTodayBirthday) {
    return (
      <ToolCard>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold text-primary">
            {t.happyBirthdayTitle}
          </h3>

          <p className="text-sm text-muted-foreground">
            {t.happyBirthdaySubtitle}
          </p>
        </div>
      </ToolCard>
    );
  }

  // NORMAL STATE
  return (
    <ToolCard>
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold">
          {t.nextBirthdayTitle}
        </h3>

        <div className="text-sm text-muted-foreground">
          {format(data.date, "PPP", {
            locale: locale === "id" ? idLocale : enUS,
          })}
        </div>

        <div className="text-xl font-bold">
          {t.nextBirthdayIn} {data.daysLeft} {t.nextBirthdayDays}
        </div>
      </div>
    </ToolCard>
  );
}
