"use client";
import { useLocale } from "next-intl";
import { toolsRegistry } from "@/features/tools/registry";
import { SectionHeader } from "@/components/molecules/section-header";
import { PDFSplit } from "./components/pdf-split";
import { PdfSplitProvider } from "./store/provider";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["pdf-split"];
  return (
    <PdfSplitProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <PDFSplit />
      </div>
    </PdfSplitProvider>
  );
}
