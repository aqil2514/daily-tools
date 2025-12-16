export function getSearchJsonLd(locale: "en" | "id") {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name:
      locale === "id"
        ? "Pencarian Tools Online Flowtooly"
        : "Search Online Tools on Flowtooly",
    description:
      locale === "id"
        ? "Halaman pencarian untuk menemukan berbagai tools online gratis di Flowtooly."
        : "Search page to explore free online tools available on Flowtooly.",
    url: `https://flowtooly.vercel.app/${locale}/search`,
    isPartOf: {
      "@type": "WebSite",
      name: "Flowtooly",
      url: "https://flowtooly.vercel.app",
    },
  };
}
