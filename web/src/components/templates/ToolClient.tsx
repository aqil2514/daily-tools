"use client";

import { Locale } from "next-intl";
import { toolsRegistry } from "@/features/tools/registry";
import { FAQSection } from "../organisms/faq-section";
import { RelatedToolsSection } from "../organisms/related-tools-section";
import { useHydration } from "@/hooks/use-hydration";
import { Loader } from "../layout/wrapper/Loader";
import { ToolName } from "@/@types/tools/index";
import { useEffect } from "react";
import { trackToolView } from "@/utils/analytics/track-tool";

export function ToolClient({
  toolName,
  locale,
}: {
  toolName: ToolName;
  locale: Locale;
}) {
  const hydrated = useHydration();

  const tool = toolsRegistry[toolName];

  useEffect(() => {
    trackToolView(toolName, locale);
  }, [locale, toolName]);

  if (!tool) return null;
  if (!hydrated) return <Loader />;

  const MainComponent = tool.Component;

  return (
    <>
      <MainComponent />

      {tool.seo?.jsonLd?.faq && (
        <FAQSection items={tool.seo.jsonLd.faq[locale]} />
      )}

      <RelatedToolsSection toolsName={tool.relatedTools} locale={locale} />
    </>
  );
}
