"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";

import { SubHeading } from "@/components/atoms/text/subHeading";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { Button } from "@/components/ui/button";

import { usePlaceholderImageContext } from "../store/provider";
import { drawPlaceholder } from "../utils/draw-placeholder";
import { RenderPlaceholderSVG } from "../utils/render-placeholder-svg";
import { exportRasterImage } from "../utils/export-raster";
import { exportSVG } from "../utils/export-svg";

import { i18nPlaceholderOutput } from "../i18n/placeholder-output";

export function PlaceholderOutput() {
  const { state } = usePlaceholderImageContext();
  const locale = useLocale();
  const t = i18nPlaceholderOutput[locale];

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isSvg = state.format === "svg";

  useEffect(() => {
    if (!canvasRef.current || isSvg) return;
    drawPlaceholder(canvasRef.current, state);
  }, [state, isSvg]);

  return (
    <ToolCard>
      <div className="space-y-4">
        <SubHeading>{t.heading}</SubHeading>

        {/* Preview */}
        <div className="flex justify-center rounded-md border bg-muted p-6">
          {isSvg ? (
            <RenderPlaceholderSVG state={state} />
          ) : (
            <canvas
              ref={canvasRef}
              aria-label={t.preview.altCanvas}
              className="rounded-md border bg-background max-w-full"
            />
          )}
        </div>

        {/* Export */}
        <div className="flex flex-wrap gap-2">
          {isSvg ? (
            <Button
              variant="secondary"
              onClick={() => exportSVG(state)}
            >
              {t.export.svg}
            </Button>
          ) : (
            <>
              <Button
                variant="secondary"
                onClick={() => exportRasterImage(state, "png")}
              >
                {t.export.png}
              </Button>
              <Button
                variant="secondary"
                onClick={() => exportRasterImage(state, "jpg")}
              >
                {t.export.jpg}
              </Button>
            </>
          )}
        </div>
      </div>
    </ToolCard>
  );
}
