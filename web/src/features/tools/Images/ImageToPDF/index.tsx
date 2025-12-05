"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "../../registry";
import { ImageToPDFComponent } from "./components/image-to-pdf";
import { ImageToPDFProvider } from "./provider";
import { useLocale } from "next-intl";

export default function ImageToPDF() {
  const tool = toolsRegistry["image-to-pdf"];
  const locale = useLocale();
  return (
    <ImageToPDFProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <ImageToPDFComponent />
      </div>
    </ImageToPDFProvider>
  );
}
