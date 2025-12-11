"use client";

import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { HTMLEscapeTool } from "./components/html-escape";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["html-escape"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <HTMLEscapeTool />
    </div>
  );
}
