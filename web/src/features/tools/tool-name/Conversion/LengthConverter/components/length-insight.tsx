"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { lengthInsightText } from "../i18n/length-insight";

export function LengthInsight() {
  const locale = useLocale() as "en" | "id";
  const t = lengthInsightText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4 text-sm">
        {/* Concept */}
        <div>
          <p className="font-medium">
            {t.conceptTitle}
          </p>
          <p className="mt-1 text-muted-foreground">
            {t.conceptDescription}
          </p>
        </div>

        <Separator />

        {/* Examples */}
        <div>
          <p className="font-medium">
            {t.examplesTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            {t.examples.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Notes */}
        <div>
          <p className="font-medium">
            {t.notesTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            {t.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </ToolCard>
  );
}
