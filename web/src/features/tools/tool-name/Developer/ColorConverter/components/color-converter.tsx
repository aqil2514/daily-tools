"use client";

import { useMemo, useState } from "react";

import {
  ColorFormat,
  RGB,
  HSL,
  ColorValue,
} from "../types/color-types";

import {
  convertFromHex,
  convertFromRgb,
  convertFromHsl,
} from "../utils/convert-color";

import { ColorInput } from "./color-input";
import { ColorOutput } from "./color-output";
import { ColorPreview } from "./color-preview";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { ToolCard } from "@/components/molecules/card/tool-card";

export function ColorConverter() {
  const [activeFormat, setActiveFormat] =
    useState<ColorFormat>("hex");

  const [hex, setHex] = useState("#ff0000");
  const [rgb, setRgb] = useState<RGB>({
    r: 255,
    g: 0,
    b: 0,
  });
  const [hsl, setHsl] = useState<HSL>({
    h: 0,
    s: 100,
    l: 50,
  });

 

  const color: ColorValue | null = useMemo(() => {
    switch (activeFormat) {
      case "hex":
        return convertFromHex(hex);
      case "rgb":
        return convertFromRgb(rgb);
      case "hsl":
        return convertFromHsl(hsl);
      default:
        return null;
    }
  }, [activeFormat, hex, rgb, hsl]);
  

  const syncedColor = color ?? { hex, rgb, hsl };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* LEFT — INPUT */}
      <ColorInput
        activeFormat={activeFormat}
        onFormatChange={setActiveFormat}
        hex={hex}
        rgb={rgb}
        hsl={hsl}
        onHexChange={setHex}
        onRgbChange={setRgb}
        onHslChange={setHsl}
      />

      {/* RIGHT — PREVIEW / OUTPUT */}
      <ToolCard>
        <Tabs defaultValue="preview">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="preview">
              Preview
            </TabsTrigger>
            <TabsTrigger value="output">
              Output
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-4">
            <ColorPreview color={syncedColor} />
          </TabsContent>

          <TabsContent value="output" className="mt-4">
            <ColorOutput color={syncedColor} />
          </TabsContent>
        </Tabs>
      </ToolCard>
    </div>
  );
}
