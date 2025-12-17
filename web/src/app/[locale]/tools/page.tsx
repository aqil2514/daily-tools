import { JsonLdToolsList } from "@/components/seo/json-ld-tools-list";
import { canonicalUrl, getHreflangs } from "@/constants/seo";
import ToolsTemplate from "@/features/tools";
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
    alternates: {
      canonical: canonicalUrl(locale, "/tools"),
      languages: getHreflangs("/tools"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ToolsPage() {
  const locale = await getLocale();

  return (
    <>
      <JsonLdToolsList locale={locale} />
      <ToolsTemplate />
    </>
  );
}
