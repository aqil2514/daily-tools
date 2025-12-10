"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQRGenerator } from "../../store/provider";
import { SourceSelection } from "@/components/molecules/source-selection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { useLocale } from "next-intl";
import { i18nMainOptions } from "../../i18n/options/main";

export function MainOptions() {
  const { options, setOptions } = useQRGenerator();
  const [srcKey, setSrcKey] = useState<number>(0);

  const locale = useLocale();
  const t = i18nMainOptions[locale];

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>{t.sectionTitle}</AccordionTrigger>

      <AccordionContent className="space-y-4 px-4">
        {/* SourceSelection or Delete Button */}
        {!options.image && (
          <SourceSelection
            key={srcKey}
            onFileSelected={(file) => {
              if (!file) return;
              setOptions((prev) => ({
                ...prev,
                image: URL.createObjectURL(file),
              }));
            }}
            onUrlSelected={(url) =>
              setOptions((prev) => ({ ...prev, image: url }))
            }
          />
        )}

        {options.image && (
          <Button
            variant="destructive"
            onClick={() => {
              setOptions((prev) => ({ ...prev, image: "" }));
              setSrcKey((prev) => prev + 1);
            }}
          >
            {t.deleteImage}
          </Button>
        )}

        {/* Width */}
        <div className="space-y-2">
          <Label htmlFor="width">{t.widthLabel}</Label>
          <Input
            id="width"
            type="number"
            value={options.width}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                width: e.target.valueAsNumber,
              }))
            }
          />
        </div>

        {/* Height */}
        <div className="space-y-2">
          <Label htmlFor="height">{t.heightLabel}</Label>
          <Input
            id="height"
            type="number"
            value={options.height}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                height: e.target.valueAsNumber,
              }))
            }
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
