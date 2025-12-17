import { SEO_CONFIG } from "@/constants/seo";
import { Locale } from "next-intl";
import { Organization, WithContext } from "schema-dts";

const descriptMap: Record<Locale, string> = {
  en: "Flowtooly is a free online platform providing calculators, converters, and utility tools.",
  id: "Flowtooly adalah platform utility tools gratis dari berbagai bidang pekerjaan,",
};

export function JsonLdLayoutOrganization({ locale }: { locale: Locale }) {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flowtooly",
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/logo/main-logo.png`,
    description: descriptMap[locale],
    foundingDate: "2025",
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
