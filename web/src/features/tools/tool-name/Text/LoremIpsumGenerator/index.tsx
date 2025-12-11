"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { LoremIpsumGenerator } from "./components/lorem-ipsum-generator";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["lorem-ipsum-generator"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <LoremIpsumGenerator />
    </div>
  );
}
