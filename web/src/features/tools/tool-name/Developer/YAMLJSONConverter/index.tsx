"use client";

import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { YAMLJSONConverter } from "./components/yaml-json-converter";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["yaml-json-converter"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <YAMLJSONConverter />
    </div>
  );
}
