import { JsonLdSEO, MetadataSEO } from "@/@types/metadata";

interface JsonLdOptions {
  locale: "en" | "id";
  baseUrl: string;
}

export function toJsonLdSEO(
  meta: MetadataSEO,
  schema: JsonLdSEO,
  opts: JsonLdOptions
) {
  const { locale, baseUrl } = opts;

  const url = `${baseUrl}/tools/${meta.slug}`;
  const name = meta.title[locale];
  const description = meta.description[locale];

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schema.schemaType ?? "WebApplication",
    name,
    description,
    url,
    applicationCategory: "Utility",
    operatingSystem: "Web",
  };

  if (schema.lastUpdated) {
    jsonLd.dateModified = schema.lastUpdated;
  }

  if (schema.searchSnippet) {
    jsonLd.abstract = schema.searchSnippet[locale];
  }

  // FAQ (if exists)
  if (schema.faq) {
    jsonLd.mainEntity = schema.faq[locale].map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));
  }

  return jsonLd;
}
