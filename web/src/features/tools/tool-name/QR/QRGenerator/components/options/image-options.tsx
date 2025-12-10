"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useQRGenerator } from "../../store/provider";

import { useLocale } from "next-intl";
import { i18nImageOptions } from "../../i18n/options/image";

export function ImageOptions() {
  const locale = useLocale();
  const t = i18nImageOptions[locale];

  return (
    <AccordionItem value="item-6">
      <AccordionTrigger>{t.sectionTitle}</AccordionTrigger>

      <AccordionContent className="space-y-4 px-4">
        <HideBackgroundDots />
        <ImageSize />
        <Margin />
      </AccordionContent>
    </AccordionItem>
  );
}

const HideBackgroundDots = () => {
  const { options, setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nImageOptions[locale];

  return (
    <div className="flex gap-4">
      <Label htmlFor="switch-bg">{t.hideBackgroundDotsLabel}</Label>

      <Switch
        id="switch-bg"
        checked={options.imageOptions?.hideBackgroundDots}
        onCheckedChange={() =>
          setOptions((prev) => ({
            ...prev,
            imageOptions: {
              ...prev.imageOptions,
              hideBackgroundDots: !options.imageOptions?.hideBackgroundDots,
            },
          }))
        }
      />
    </div>
  );
};

const ImageSize = () => {
  const { options, setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nImageOptions[locale];

  return (
    <div className="space-y-4">
      <Label>{t.imageSizeLabel}</Label>

      <Input
        type="number"
        step={0.1}
        value={options.imageOptions?.imageSize}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            imageOptions: {
              ...prev.imageOptions,
              imageSize: e.target.valueAsNumber,
            },
          }))
        }
      />
    </div>
  );
};

const Margin = () => {
  const { options, setOptions } = useQRGenerator();
  const locale = useLocale();
  const t = i18nImageOptions[locale];

  return (
    <div className="space-y-4">
      <Label>{t.marginLabel}</Label>

      <Input
        type="number"
        value={options.imageOptions?.margin}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            imageOptions: {
              ...prev.imageOptions,
              margin: e.target.valueAsNumber,
            },
          }))
        }
      />
    </div>
  );
};
