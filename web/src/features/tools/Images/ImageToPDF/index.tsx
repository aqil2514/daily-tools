"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "../../registry";
import { ImageToPDFComponent } from "./components/image-to-pdf";
import { ImageToPDFProvider } from "./provider";

export default function ImageToPDF() {
  const tool = toolsRegistry["image-to-pdf"];
  return (
    <ImageToPDFProvider>
      <div>
        <SectionHeader title={tool.title} description={tool.description} />
        <ImageToPDFComponent />
      </div>
    </ImageToPDFProvider>
  );
}
