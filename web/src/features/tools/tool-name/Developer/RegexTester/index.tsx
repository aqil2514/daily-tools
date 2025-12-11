"use client";

import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { RegexTester } from "./components/regex-tester";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["regex-tester"];

  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <RegexTester />
    </div>
  );
}
