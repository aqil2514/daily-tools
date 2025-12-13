import { ToolName } from "@/@types/Tools";
import React from "react";
import { SectionHeader } from "../molecules/section-header";
import { getLocale } from "next-intl/server";
import { toolsRegistry } from "@/features/tools/registry";
import { ToolClient } from "./ToolClient";

interface Props {
  toolName: ToolName;
}

export default async function ToolMainTemplate({ toolName }: Props) {
  const locale = await getLocale();
  const tool = toolsRegistry[toolName];

  const title = tool.seo ? tool.seo.metadata.title[locale] : tool.title[locale];
  const description = tool.seo
    ? tool.seo.metadata.description[locale]
    : tool.description![locale];

  return (
    <div>
      <SectionHeader title={title} description={description} />

      <ToolClient locale={locale} toolName={toolName} />
    </div>
  );
}
