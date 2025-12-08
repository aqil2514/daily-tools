"use client";
import { useLocale } from "next-intl";
import { toolsRegistry } from "../../registry";
import { SectionHeader } from "@/components/molecules/section-header";
import { PDFMerge } from "./components/pdf-merge";
import { PdfMergeProvider } from "./store/provider";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["pdf-merge"];
  return (
    <PdfMergeProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <PDFMerge />
      </div>
    </PdfMergeProvider>
  );
}
