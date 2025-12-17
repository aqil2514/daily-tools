import { SEO_CONFIG } from "@/constants/seo";
import { Organization, WebSite } from "schema-dts";

export function getGlobalJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Flowtooly",
        url: SEO_CONFIG.siteUrl,
        logo: `${SEO_CONFIG.siteUrl}/logo/main-logo.png`,
        description:
          locale === "id"
            ? "Flowtooly adalah platform utility tools gratis dari berbagai bidang pekerjaan."
            : "Flowtooly is a free online platform providing calculators, converters, and utility tools.",
        foundingDate: "2025",
      } satisfies Organization,

      {
        "@type": "WebSite",
        name: "Flowtooly",
        url: SEO_CONFIG.siteUrl,
        publisher: {
          "@type": "Organization",
          name: "Flowtooly",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SEO_CONFIG.siteUrl}/${locale}/search?q={search_term_string}`,
          "query": "required name=search_term_string",
        },
      } satisfies WebSite,
    ],
  };
}
