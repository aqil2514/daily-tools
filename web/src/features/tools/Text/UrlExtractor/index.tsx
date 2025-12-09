"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { useLocale } from "next-intl";
import { toolsRegistry } from "../../registry";
import { URLExtractor } from "./components/url-extractor";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["url-extractor"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <URLExtractor />
    </div>
  );
}
