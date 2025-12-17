import { SEO_CONFIG } from "@/constants/seo";
import { WebSite, WithContext } from "schema-dts";

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Flowtooly",
  url: SEO_CONFIG.siteUrl,
  publisher: {
    "@type": "Organization",
    name: "Flowtooly",
    url: SEO_CONFIG.siteUrl,
  },
};

export function JsonLdLayoutWebsite() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
