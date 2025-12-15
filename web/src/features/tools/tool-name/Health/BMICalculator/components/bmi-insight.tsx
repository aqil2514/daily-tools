"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Separator } from "@/components/ui/separator";

import { bmiInsightText } from "../i18n/bmi-insight";

export function BMIInsight() {
  const locale = useLocale() as "en" | "id";
  const t = bmiInsightText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4 text-sm">
        {/* What is BMI */}
        <div>
          <p className="font-medium">
            {t.whatIsTitle}
          </p>
          <p className="mt-1 text-muted-foreground">
            {t.whatIsDescription}
          </p>
        </div>

        <Separator />

        {/* Categories */}
        <div>
          <p className="font-medium">
            {t.categoriesTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            {t.categories.map((item, index) => (
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

        <Separator />

        {/* Sources */}
        <div>
          <p className="font-medium">
            {t.sourcesTitle}
          </p>
          <ul className="mt-2 list-disc list-inside text-muted-foreground">
            <li>
              <a
                href="https://www.who.int/toolkits/child-growth-standards/standards/body-mass-index-for-age-bmi-for-age"
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
