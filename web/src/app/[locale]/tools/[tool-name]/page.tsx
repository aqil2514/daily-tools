import { ToolName } from "@/@types/Tools";
import { JsonLdTool } from "@/components/seo/json-ld-tool";
import { SEO_CONFIG } from "@/constants/seo";
import { toolsRegistry } from "@/features/tools/registry";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ "tool-name": ToolName }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const toolName = (await params)["tool-name"];
  const tool = toolsRegistry[toolName];
  const t = await getTranslations();
  const locale = await getLocale();

  if (!tool) {
    return {
      title: `${t("Misc.notfound-title")} – Flowtooly`,
      description: t("Misc.notfound-description"),
    };
  }

  return {
    title: `${tool.title[locale]} | Flowtooly`,
    description: tool.description[locale],
    keywords: tool.keywords[locale],
  };
}

export default async function ConvertCategoryPage({ params }: Props) {
  const toolName = (await params)["tool-name"];
  const locale = await getLocale();
  const tool = toolsRegistry[toolName];
  const t = await getTranslations();

  if (!tool) {
    return <div>{t("Misc.notfound-title")}</div>;
  }

  const ToolsComponent = tool.Component;

  const urlJsonLd = `${SEO_CONFIG.siteUrl}/${locale}${tool.href}`;

  return (
    <>
      <JsonLdTool
        url={urlJsonLd}
        description={tool.description[locale]}
        name={tool.title[locale]}
      />
      <ToolsComponent />
    </>
  );
}
