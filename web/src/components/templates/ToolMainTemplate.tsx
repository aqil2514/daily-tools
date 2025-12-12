import { ToolName } from "@/@types/Tools";
import React from "react";
import { SectionHeader } from "../molecules/section-header";
import { getLocale } from "next-intl/server";
import { toolsRegistry } from "@/features/tools/registry";
import { FAQSection } from "../atoms/faq-section";
import { RelatedToolsSection } from "../organisms/related-tools-section";

interface Props {
  toolName: ToolName;
  MainComponent: React.ComponentType;
}

export default async function ToolMainTemplate({
  MainComponent,
  toolName,
}: Props) {
  const locale = await getLocale();
  const tool = toolsRegistry[toolName];

  const title = tool.seo ? tool.seo.metadata.title[locale] : tool.title[locale];
  const description = tool.seo
    ? tool.seo.metadata.description[locale]
    : tool.description![locale];

  return (
    <div>
      <SectionHeader title={title} description={description} />

      <MainComponent />

      {tool.seo && tool.seo.jsonLd.faq && (
        <FAQSection items={tool.seo.jsonLd.faq[locale]} />
      )}

      <RelatedToolsSection toolsName={tool.relatedTools} />
    </div>
  );
}
