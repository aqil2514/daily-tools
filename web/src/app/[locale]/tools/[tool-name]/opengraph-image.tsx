import { ToolName } from "@/@types/Tools";
import { generateOg } from "@/constants/og-generator";
import { toolsRegistry } from "@/features/tools/registry";
import { Locale } from "next-intl";

interface Props {
  params: Promise<{ "tool-name": ToolName; locale: Locale }>;
}

export default async function OpengraphImage({ params }: Props) {
  const param = await params;
  const toolName = param["tool-name"];

  const tool = toolsRegistry[toolName];

  if (tool.seo)
    return await generateOg({
      enDesc: tool.seo.metadata.description.en,
      idDesc: tool.seo.metadata.description.id,
      
      enTitle: tool.seo.metadata.title.en,
      idTitle: tool.seo.metadata.title.id,
    });

  return await generateOg({
    enTitle: tool.title.en,
    enDesc: tool.description.en,

    idTitle: tool.title.id,
    idDesc: tool.description.id,
  });
}
