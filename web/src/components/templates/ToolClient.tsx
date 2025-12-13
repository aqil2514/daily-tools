"use client";

import { Locale } from "next-intl";
import { toolsRegistry } from "@/features/tools/registry";
import { FAQSection } from "../atoms/faq-section";
import { RelatedToolsSection } from "../organisms/related-tools-section";
import { ToolName } from "@/@types/Tools";

export function ToolClient({
  toolName,
  locale,
}: {
  toolName: ToolName;
  locale: Locale;
}) {
  const tool = toolsRegistry[toolName];
  if (!tool) return null;

  const MainComponent = tool.Component;

  return (
    <>
      <MainComponent />

      {tool.seo?.jsonLd?.faq && (
        <FAQSection items={tool.seo.jsonLd.faq[locale]} />
      )}

      <RelatedToolsSection
        toolsName={tool.relatedTools}
        locale={locale}
      />
    </>
  );
}
