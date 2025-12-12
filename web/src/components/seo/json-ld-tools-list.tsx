import { SEO_CONFIG } from "@/constants/seo";
import { toolsRegistry } from "@/features/tools/registry";
import { Locale } from "next-intl";

export function JsonLdToolsList({ locale }: { locale: Locale }) {
  const siteUrl = SEO_CONFIG.siteUrl;

  const itemListElements = Object.entries(toolsRegistry).map(
    ([, tool], index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${siteUrl}/${locale}${tool.href}`,
      "name": tool.title[locale],
      "description": tool.description![locale],
    })
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Flowtooly Tools",
    "url": `${siteUrl}/${locale}/tools`,
    "description":
      "Explore all utility tools provided by Flowtooly — fast, simple, and privacy-friendly tools for everyday productivity.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": itemListElements
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
