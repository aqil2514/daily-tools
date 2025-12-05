import ToolsTemplate from "@/features/tools";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

type ToolMetadata = typeof import("@/../data/metadata/all-tools/en.json");

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const metadataContent: ToolMetadata = (
    await import(`@/../data/metadata/all-tools/${locale}.json`)
  ).default;

  return {
    title: metadataContent.title,
    description: metadataContent.description,
    keywords: metadataContent.keywords,
  };
}

export default function ToolsPage() {
  return <ToolsTemplate />;
}
