import { SEO_CONFIG } from "@/constants/seo";

export default function sitemap() {
  return [
    {
      url: `${SEO_CONFIG.siteUrl}/sitemap-static.xml`,
    },
    {
      url: `${SEO_CONFIG.siteUrl}/sitemap-tools.xml`,
    },
  ];
}
