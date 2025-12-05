"use client";

import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "../../registry";
import { ImageRotateProvider } from "./provider";
import { ImageRotateComponent } from "./components/image-rotate";
import { useLocale } from "next-intl";

export default function ImageRotate() {
  const tool = toolsRegistry["image-rotate"];
  const locale = useLocale()
  return (
    <ImageRotateProvider>
      <div>
        <SectionHeader title={tool.title[locale]} description={tool.description[locale]} />
        <ImageRotateComponent />
      </div>
    </ImageRotateProvider>
  );
}
