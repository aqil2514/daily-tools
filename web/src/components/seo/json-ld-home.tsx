import { SEO_CONFIG } from "@/constants/seo";

export function JsonLdHome() {
  const siteUrl = SEO_CONFIG.siteUrl;

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Flowtooly",
    "url": siteUrl,
    "description":
      "Flowtooly provides a collection of fast, simple, and privacy-friendly utility tools for everyday productivity.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flowtooly",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebsite),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrganization),
        }}
      />
    </>
  );
}
