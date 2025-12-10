"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { ColorOption } from "./sub/color-element";
import { useLocale } from "next-intl";
import { i18nBackgroundOptions } from "../../i18n/options/background";

export function BackgroundOptions() {
  const locale = useLocale();
  const t = i18nBackgroundOptions[locale];

  return (
    <AccordionItem value="item-5">
      <AccordionTrigger>{t.sectionTitle}</AccordionTrigger>

      <AccordionContent className="space-y-4 bg-slate-200 px-4 py-2">
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>{t.backgroundColor}</Label>
          </div>

          <ColorOption colorKey="backgroundOptions" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
