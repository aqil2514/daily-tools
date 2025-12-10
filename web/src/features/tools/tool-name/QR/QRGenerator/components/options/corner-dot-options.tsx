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
import { CornerDotType } from "qr-code-styling";
import { useQRGenerator } from "../../store/provider";
import { ColorOption } from "./sub/color-element";
import { useLocale } from "next-intl";
import { i18nCornerDotOptions } from "../../i18n/options/corner-dot";

export function CornerDotOptions() {
  const locale = useLocale();
  const t = i18nCornerDotOptions[locale];

  return (
    <AccordionItem value="item-4">
      <AccordionTrigger>{t.sectionTitle}</AccordionTrigger>

      <AccordionContent className="space-y-4">
        {/* Dot Style */}
        <div className="space-y-4">
          <Label>{t.styleLabel}</Label>
          <CornerDotStyle />
        </div>

        {/* Dot Color */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>{t.colorLabel}</Label>
          </div>
          <ColorOption colorKey="cornersDotOptions" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

const CornerDotStyle = () => {
  const { options, setOptions } = useQRGenerator();

  const locale = useLocale();
  const t = i18nCornerDotOptions[locale];

  const styleItems = [
    { value: "rounded", label: t.styles.rounded },
    { value: "dot", label: t.styles.dot },
    { value: "dots", label: t.styles.dots },
    { value: "classy", label: t.styles.classy },
    { value: "classy-rounded", label: t.styles.classyRounded },
    { value: "extra-rounded", label: t.styles.extraRounded },
    { value: "square", label: t.styles.square },
  ];

  return (
    <Select
      value={options.cornersDotOptions?.type}
      onValueChange={(e) => {
        setOptions((prev) => ({
          ...prev,
          cornersDotOptions: { ...prev.cornersDotOptions, type: e as CornerDotType },
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
