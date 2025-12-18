"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Check, Copy } from "lucide-react";

import { ToolCard } from "@/components/molecules/card/tool-card";
import { SubHeading } from "@/components/atoms/text/subHeading";
import { Button } from "@/components/ui/button";

import { ColorValue } from "../types/color-types";
import { colorOutputText } from "../i18n/color-output";

interface ColorOutputProps {
  color: ColorValue;
}

function formatRGB(r: number, g: number, b: number) {
  return `rgb(${r}, ${g}, ${b})`;
}

function formatHSL(h: number, s: number, l: number) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function ColorOutput({ color }: ColorOutputProps) {
  const locale = useLocale() as "en" | "id";
  const t = colorOutputText[locale];

  const [copied, setCopied] = useState<string | null>(null);

  const hex = color.hex?.toUpperCase() ?? "";
  const rgb = color.rgb
    ? formatRGB(color.rgb.r, color.rgb.g, color.rgb.b)
    : "";
  const hsl = color.hsl
    ? formatHSL(color.hsl.h, color.hsl.s, color.hsl.l)
    : "";

  const handleCopy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <ToolCard>
      <SubHeading className="mt-0">
        {t.heading}
      </SubHeading>

      <div className="mt-4 space-y-4">
        {/* ===================== */}
        {/* HEX */}
        {/* ===================== */}
        <div className="flex items-center justify-between gap-3 rounded-md border bg-muted px-3 py-2">
          <code className="font-mono text-sm">
            {hex}
          </code>

          <Button
            variant="ghost"
            size="icon"
            aria-label={t.copy}
            onClick={() => handleCopy(hex, "hex")}
          >
            {copied === "hex" ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* ===================== */}
        {/* RGB */}
        {/* ===================== */}
        <div className="flex items-center justify-between gap-3 rounded-md border bg-muted px-3 py-2">
          <code className="font-mono text-sm">
            {rgb}
          </code>

          <Button
            variant="ghost"
            size="icon"
            aria-label={t.copy}
            onClick={() => handleCopy(rgb, "rgb")}
          >
            {copied === "rgb" ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* ===================== */}
        {/* HSL */}
        {/* ===================== */}
        <div className="flex items-center justify-between gap-3 rounded-md border bg-muted px-3 py-2">
          <code className="font-mono text-sm">
            {hsl}
          </code>

          <Button
            variant="ghost"
            size="icon"
            aria-label={t.copy}
            onClick={() => handleCopy(hsl, "hsl")}
          >
            {copied === "hsl" ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </ToolCard>
  );
}
