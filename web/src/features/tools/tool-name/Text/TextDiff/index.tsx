"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { useLocale } from "next-intl";
import { toolsRegistry } from "../../../registry";
import { TextDiff } from "./components/text-diff";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["text-diff"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <TextDiff />
    </div>
  );
}
