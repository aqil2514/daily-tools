"use client";

import { useLocale } from "next-intl";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/subHeading";

import { ColorValue } from "../types/color-types";
import { colorPreviewText } from "../i18n/color-preview";

interface ColorPreviewProps {
  color: ColorValue;
}

export function ColorPreview({ color }: ColorPreviewProps) {
  const locale = useLocale() as "en" | "id";
  const t = colorPreviewText[locale];

  const hex = color.hex ?? "#000000";

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4">
        {/* ===================== */}
        {/* Swatch */}
        {/* ===================== */}
        <div
          className="
            relative h-32 w-full rounded-lg border
            bg-[linear-gradient(45deg,#ccc_25%,transparent_25%),linear-gradient(-45deg,#ccc_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#ccc_75%),linear-gradient(-45deg,transparent_75%,#ccc_75%)]
            bg-size-[20px_20px]
            bg-position-[0_0,0_10px,10px_-10px,-10px_0px]
            overflow-hidden
          "
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: hex }}
            aria-label={`${t.previewing}: ${hex}`}
          />
        </div>

        {/* ===================== */}
        {/* Quick Info */}
        {/* ===================== */}
        <div className="text-center text-sm text-muted-foreground">
          {t.previewing}:{" "}
          <span className="font-mono text-foreground">
            {hex.toUpperCase()}
          </span>
        </div>
      </div>
    </ToolCard>
  );
}
