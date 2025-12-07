import ToolsTemplate from "@/features/tools/master";
import { getLocalizedMetadata } from "@/utils/localization/getLocalizedMetadata";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const metadata = await getLocalizedMetadata("all-tools", locale);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

export default function ToolsPage() {
  return <ToolsTemplate />;
}
