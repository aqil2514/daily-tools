"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { useQRGenerator } from "../../store/provider";
import { Input } from "@/components/ui/input";
import { TypeNumber } from "qr-code-styling";

import { useLocale } from "next-intl";
import { i18nQROptions } from "../../i18n/options/qr";

export function QRInnerOptions() {
  const locale = useLocale();
  const t = i18nQROptions[locale];

  return (
    <AccordionItem value="item-7">
      <AccordionTrigger>{t.sectionTitle}</AccordionTrigger>
      <AccordionContent className="space-y-4 px-4">
        <TypeNumberComp />
      </AccordionContent>
    </AccordionItem>
  );
}

const TypeNumberComp = () => {
  const { options, setOptions } = useQRGenerator();

  const locale = useLocale();
  const t = i18nQROptions[locale];

  return (
    <div className="space-y-4">
      <Label>{t.typeNumberLabel}</Label>

      <Input
        type="number"
        max={40}
        value={options.qrOptions?.typeNumber}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            qrOptions: {
              ...prev.qrOptions,
              typeNumber: e.target.valueAsNumber as TypeNumber,
            },
          }))
        }
      />
    </div>
  );
};
