"use client";
import { SectionHeader } from "@/components/molecules/section-header";
import { toolsRegistry } from "@/features/tools/registry";
import { useLocale } from "next-intl";
import { Base64Encoder } from "./components/base-64-encoder";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["base64-encoder"];
  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />
      <Base64Encoder />
    </div>
  );
}
