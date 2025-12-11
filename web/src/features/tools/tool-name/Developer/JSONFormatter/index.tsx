"use client";

import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { JSONFormatter } from "./components/json-formatter";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["json-formatter"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <JSONFormatter />
    </div>
  );
}
