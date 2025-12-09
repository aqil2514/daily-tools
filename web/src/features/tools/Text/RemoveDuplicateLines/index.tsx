"use client";
import { useLocale } from "next-intl";
import { toolsRegistry } from "../../registry";
import { SectionHeader } from "@/components/molecules/section-header";
import { RemoveDuplicateLines } from "./components/remove-duplicate-lines";
import { RemoveDuplicateLinesProvider } from "./store/provider";

export default function MainComponent() {
  const locale = useLocale();
  const tool = toolsRegistry["remove-duplicate-lines"];
  return (
    <RemoveDuplicateLinesProvider>
      <div>
        <SectionHeader
          title={tool.title[locale]}
          description={tool.description[locale]}
        />
        <RemoveDuplicateLines />
      </div>
    </RemoveDuplicateLinesProvider>
  );
}
