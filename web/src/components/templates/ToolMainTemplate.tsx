import { ToolName } from "@/@types/Tools";
import { JSX } from "react";
import { SectionHeader } from "../molecules/section-header";
import { getLocale } from "next-intl/server";
import { toolsRegistry } from "@/features/tools/registry";
import { FAQSection } from "../atoms/faq-section";
import { RelatedToolsSection } from "../organisms/related-tools-section";

interface Props {
  toolName: ToolName;
  MainComponent: JSX.Element;
}

// TODO : Integrasi ke Page

export default async function ToolMainTemplate({
  MainComponent,
  toolName,
}: Props) {
  const locale = await getLocale();
  const tool = toolsRegistry[toolName];

  return (
    <div>
      <SectionHeader
        title={tool.title[locale]}
        description={tool.description[locale]}
      />

      {MainComponent}

      {tool.seo && tool.seo.jsonLd.faq && (
        <FAQSection items={tool.seo.jsonLd.faq[locale]} />
      )}

      <RelatedToolsSection toolsName={tool.relatedTools} />
    </div>
  );
}
