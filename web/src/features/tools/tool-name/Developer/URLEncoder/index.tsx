"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { URLEncoder } from "./components/url-encoder";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["url-encoder"];

  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <URLEncoder />
    </div>
  );
}
