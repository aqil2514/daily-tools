"use client";

import { useLocale } from "next-intl";
import {
  HexColorPicker,
  HslColorPicker,
  RgbColorPicker,
} from "react-colorful";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { ColorFormat, RGB, HSL } from "../types/color-types";
import { colorInputText } from "../i18n/color-input";

interface ColorInputProps {
  activeFormat: ColorFormat;
  onFormatChange: (format: ColorFormat) => void;

  hex: string;
  rgb: RGB;
  hsl: HSL;

  onHexChange: (hex: string) => void;
  onRgbChange: (rgb: RGB) => void;
  onHslChange: (hsl: HSL) => void;
}

export function ColorInput({
  activeFormat,
  onFormatChange,
  hex,
  rgb,
  hsl,
  onHexChange,
  onRgbChange,
  onHslChange,
}: ColorInputProps) {
  const locale = useLocale() as "en" | "id";
  const t = colorInputText[locale];

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-6">
        {/* ===================== */}
        {/* Format Selector */}
        {/* ===================== */}
        <div className="space-y-1">
          <Label>{t.inputFormat}</Label>
          <Select
            value={activeFormat}
            onValueChange={(v) =>
              onFormatChange(v as ColorFormat)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="w-(--radix-select-trigger-width)">
              <SelectItem value="hex">
                {t.format.hex}
              </SelectItem>
              <SelectItem value="rgb">
                {t.format.rgb}
              </SelectItem>
              <SelectItem value="hsl">
                {t.format.hsl}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ===================== */}
        {/* Color Picker */}
        {/* ===================== */}
        <div className="space-y-2 flex flex-col items-center">
          <Label>{t.pickColor}</Label>

          {activeFormat === "hex" && (
            <HexColorPicker
              color={hex}
              onChange={onHexChange}
              className="w-full"
            />
          )}

          {activeFormat === "rgb" && (
            <RgbColorPicker
              color={rgb}
              onChange={onRgbChange}
              className="w-full"
            />
          )}

          {activeFormat === "hsl" && (
            <HslColorPicker
              color={hsl}
              onChange={onHslChange}
              className="w-full"
            />
          )}
        </div>

        {/* ===================== */}
        {/* HEX Input */}
        {/* ===================== */}
        {activeFormat === "hex" && (
          <div className="space-y-1">
            <Label>{t.hexLabel}</Label>
            <Input
              value={hex}
              onChange={(e) =>
                onHexChange(e.target.value)
              }
              placeholder={t.hexPlaceholder}
            />
          </div>
        )}

        {/* ===================== */}
        {/* RGB Input */}
        {/* ===================== */}
        {activeFormat === "rgb" && (
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label>{t.rgb.r}</Label>
              <Input
                type="number"
                min={0}
                max={255}
                value={rgb.r}
                onChange={(e) =>
                  onRgbChange({
                    ...rgb,
                    r: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <Label>{t.rgb.g}</Label>
              <Input
                type="number"
                min={0}
                max={255}
                value={rgb.g}
                onChange={(e) =>
                  onRgbChange({
                    ...rgb,
                    g: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <Label>{t.rgb.b}</Label>
              <Input
                type="number"
                min={0}
                max={255}
                value={rgb.b}
                onChange={(e) =>
                  onRgbChange({
                    ...rgb,
                    b: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        )}

        {/* ===================== */}
        {/* HSL Input */}
        {/* ===================== */}
        {activeFormat === "hsl" && (
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label>{t.hsl.h}</Label>
              <Input
                type="number"
                min={0}
                max={360}
                value={hsl.h}
                onChange={(e) =>
                  onHslChange({
                    ...hsl,
                    h: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <Label>{t.hsl.s}</Label>
              <Input
                type="number"
                min={0}
                max={100}
                value={hsl.s}
                onChange={(e) =>
                  onHslChange({
                    ...hsl,
                    s: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <Label>{t.hsl.l}</Label>
              <Input
                type="number"
                min={0}
                max={100}
                value={hsl.l}
                onChange={(e) =>
                  onHslChange({
                    ...hsl,
                    l: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </ToolCard>
  );
}
