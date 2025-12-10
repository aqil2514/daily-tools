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
import { CornerSquareType } from "qr-code-styling";
import { useQRGenerator } from "../../store/provider";
import { ColorOption } from "./sub/color-element";
import { useLocale } from "next-intl";
import { i18nCornerSquareOptions } from "../../i18n/options/corner-square";

export function CornerSquareOptions() {
  const locale = useLocale();
  const t = i18nCornerSquareOptions[locale];

  return (
    <AccordionItem value="item-3">
      <AccordionTrigger>{t.sectionTitle}</AccordionTrigger>

      <AccordionContent className="space-y-4">
        {/* Style */}
        <div className="space-y-4">
          <Label>{t.styleLabel}</Label>
          <CornerSquareStyle />
        </div>

        {/* Color */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>{t.colorLabel}</Label>
          </div>
          <ColorOption colorKey="cornersSquareOptions" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

const CornerSquareStyle = () => {
  const { options, setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nCornerSquareOptions[locale];

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
      value={options.cornersSquareOptions?.type}
      onValueChange={(e) => {
        setOptions((prev) => ({
          ...prev,
          cornersSquareOptions: {
            ...prev.cornersSquareOptions,
            type: e as CornerSquareType,
          },
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
