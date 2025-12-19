import { ToolName } from "@/@types/tools/index";
import ToolMainTemplate from "@/components/templates/ToolMainTemplate";
import { SEO_CONFIG } from "@/constants/seo";
import { toolsRegistry } from "@/features/tools/registry";
import { toJsonLdSEO } from "@/utils/seo/toJsonLdSEO";
import { toNextMetadata } from "@/utils/seo/toNextMetadata";
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

  return toNextMetadata(tool.seo.metadata, {
    baseUrl: SEO_CONFIG.siteUrl,
    locale,
  });
}

export default async function ConvertCategoryPage({ params }: Props) {
  const toolName = (await params)["tool-name"];
  const locale = await getLocale();
  const tool = toolsRegistry[toolName];
  const t = await getTranslations();

  if (!tool) {
    return <div>{t("Misc.notfound-title")}</div>;
  }

  const jsonLdData = toJsonLdSEO(tool.seo.metadata, tool.seo.jsonLd, {
    baseUrl: SEO_CONFIG.siteUrl,
    locale,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <ToolMainTemplate toolName={toolName} />
    </>
  );
}
