import { SEO_CONFIG } from "@/constants/seo";
import { Locale } from "next-intl";
import { WebSite, WithContext } from "schema-dts";

export function JsonLdLayoutSearchAction({ locale }: { locale: Locale }) {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flowtooly",
    url: SEO_CONFIG.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_CONFIG.siteUrl}/${locale}/search?q={search_term_string}`,
      "query": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
