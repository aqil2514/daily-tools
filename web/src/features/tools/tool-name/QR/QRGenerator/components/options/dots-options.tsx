"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DotType } from "qr-code-styling";
import { useQRGenerator } from "../../store/provider";
import { ColorOption } from "./sub/color-element";
import { useLocale } from "next-intl";
import { i18nDotsOptions } from "../../i18n/options/dots";

export function DotsOptions() {
  const locale = useLocale();
  const t = i18nDotsOptions[locale];

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>{t.sectionTitle}</AccordionTrigger>

      <AccordionContent className="space-y-4">
        {/* Dots Style */}
        <div className="space-y-4">
          <Label>{t.styleLabel}</Label>
          <DotsStyle />
        </div>

        {/* Dots Color */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>{t.colorLabel}</Label>
          </div>
          <ColorOption colorKey="dotsOptions" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

const DotsStyle = () => {
  const { options, setOptions } = useQRGenerator();

  const locale = useLocale();
  const t = i18nDotsOptions[locale];

  const styleItems = [
    { value: "rounded", label: t.styles.rounded },
    { value: "dots", label: t.styles.dots },
    { value: "classy", label: t.styles.classy },
    { value: "classy-rounded", label: t.styles.classyRounded },
    { value: "extra-rounded", label: t.styles.extraRounded },
    { value: "square", label: t.styles.square },
  ];

  return (
    <Select
      value={options.dotsOptions?.type}
      onValueChange={(e) => {
        setOptions((prev) => ({
          ...prev,
          dotsOptions: { ...prev.dotsOptions, type: e as DotType },
        }));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t.placeholder} />
      </SelectTrigger>

      <SelectContent>
        {styleItems.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
