"use client";

import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "../../registry";
import { ImageRotateProvider } from "./provider";
import { ImageRotateComponent } from "./components/image-rotate";

export default function ImageRotate() {
  const tool = toolsRegistry["image-rotate"];
  return (
    <ImageRotateProvider>
      <div>
        <SectionHeader title={tool.title} description={tool.description} />
        <ImageRotateComponent />
      </div>
    </ImageRotateProvider>
  );
}
