"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { bmrInsightText } from "../i18n/bmr-insight";

export function BMRTDEEInsight() {
  const locale = useLocale() as "en" | "id";
  const t = bmrInsightText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4 text-sm">
        {/* What is BMR & TDEE */}
        <div>
          <p className="font-medium">
            {t.whatIsTitle}
          </p>
          <p className="mt-1 text-muted-foreground">
            {t.whatIsDescription}
          </p>
        </div>

        <Separator />

        {/* How to use */}
        <div>
          <p className="font-medium">
            {t.usageTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            {t.usageItems.map((item, index) => (
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
            {t.notesItems.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Sources */}
        <div>
          <p className="font-medium">
            {t.sourcesTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/1957828/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {t.whoLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ToolCard>
  );
}
