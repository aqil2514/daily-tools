"use client";

import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { HexColorPicker } from "react-colorful";

import { usePlaceholderImageContext } from "../store/provider";
import { i18nPlaceholderInput } from "../i18n/placeholder-input";

export function PlaceholderInput() {
  const { state, setState } = usePlaceholderImageContext();
  const locale = useLocale();
  const t = i18nPlaceholderInput[locale];

  return (
    <ToolCard>
      <div className="space-y-6">
        <SubHeading>{t.heading}</SubHeading>

        {/* Dimensions */}
        <div className="space-y-3">
          <Label>{t.sections.dimensions}</Label>

          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder={t.placeholders.width}
              value={state.width}
              onChange={(e) =>
                setState((s) => ({ ...s, width: e.target.value }))
              }
            />
            <Input
              placeholder={t.placeholders.height}
              value={state.height}
              onChange={(e) =>
                setState((s) => ({ ...s, height: e.target.value }))
              }
            />
          </div>
        </div>

        <Separator />

        {/* Colors */}
        <div className="space-y-6">
          <Label>{t.sections.colors}</Label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label className="text-sm text-muted-foreground">
                {t.labels.backgroundColor}
              </Label>

              <HexColorPicker
                color={state.backgroundColor}
                onChange={(color) =>
                  setState((s) => ({ ...s, backgroundColor: color }))
                }
              />

              <Input
                placeholder={t.placeholders.backgroundColor}
                value={state.backgroundColor}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    backgroundColor: e.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm text-muted-foreground">
                {t.labels.textColor}
              </Label>

              <HexColorPicker
                color={state.textColor}
                onChange={(color) =>
                  setState((s) => ({ ...s, textColor: color }))
                }
              />

              <Input
                placeholder={t.placeholders.textColor}
                value={state.textColor}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    textColor: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Text */}
        <div className="space-y-3">
          <Label>{t.sections.text}</Label>
          <Input
            placeholder={t.placeholders.text}
            value={state.text}
            onChange={(e) =>
              setState((s) => ({ ...s, text: e.target.value }))
            }
          />
        </div>

        <Separator />

        {/* Typography */}
        <div className="space-y-3">
          <Label>{t.sections.typography}</Label>

          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder={t.placeholders.fontSize}
              value={state.fontSize}
              onChange={(e) =>
                setState((s) => ({ ...s, fontSize: e.target.value }))
              }
            />

            <Select
              value={state.textPosition}
              onValueChange={(value) =>
                setState((s) => ({
                  ...s,
                  textPosition: value as typeof state.textPosition,
                }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t.labels.textPosition} />
              </SelectTrigger>
              <SelectContent className="w-(--radix-select-trigger-width)">
                <SelectItem value="center">
                  {t.options.textPosition.center}
                </SelectItem>
                <SelectItem value="top">
                  {t.options.textPosition.top}
                </SelectItem>
                <SelectItem value="bottom">
                  {t.options.textPosition.bottom}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        {/* Shape */}
        <div className="space-y-3">
          <Label>{t.sections.shape}</Label>

          <Input
            placeholder={t.placeholders.borderRadius}
            value={state.borderRadius}
            onChange={(e) =>
              setState((s) => ({ ...s, borderRadius: e.target.value }))
            }
          />
        </div>

        <Separator />

        {/* Format */}
        <div className="space-y-3">
          <Label>{t.sections.format}</Label>

          <Select
            value={state.format}
            onValueChange={(value) =>
              setState((s) => ({
                ...s,
                format: value as typeof state.format,
              }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t.placeholders.imageFormat} />
            </SelectTrigger>
            <SelectContent className="w-(--radix-select-trigger-width)">
              <SelectItem value="png">
                {t.options.format.png}
              </SelectItem>
              <SelectItem value="jpg">
                {t.options.format.jpg}
              </SelectItem>
              <SelectItem value="svg">
                {t.options.format.svg}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ToolCard>
  );
}
