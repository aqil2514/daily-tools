"use client";

import { useLocale } from "next-intl";
import { toolsRegistry } from "../../../registry";
import { SectionHeader } from "@/components/molecules/section-header";
import { CaseConverter } from "./components/case-converter";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["case-converter"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <CaseConverter />
    </div>
  );
}
