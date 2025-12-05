import { ToolName } from "@/@types/Tools";
import { toolsRegistry } from "@/features/tools/registry";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ "tool-name": ToolName }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const toolName = (await params)["tool-name"];
  const tool = toolsRegistry[toolName];
  const t = await getTranslations();

  if (!tool) {
    return {
      title: `${t("Misc.notfound-title")} – Flowtooly`,
      description: t("Misc.notfound-description"),
    };
  }

  return {
    title: `${tool.title} | Flowtooly`,
    description: tool.description,
    keywords: tool.keywords,
  };
}

export default async function ConvertCategoryPage({ params }: Props) {
  const toolName = (await params)["tool-name"];
  const tool = toolsRegistry[toolName];
  const t = await getTranslations();

  if (!tool) {
    return <div>{t("Misc.notfound-title")}</div>;
  }

  const ToolsComponent = tool.Component;

  return <ToolsComponent />;
}
