import { SEO_CONFIG } from "@/constants/seo";
import { toolsRegistry } from "@/features/tools/registry";
import { Locale } from "next-intl";

export async function GET() {
  const locales: Locale[] = ["en", "id"];

  const toolNames = Object.keys(toolsRegistry);

  const urls = locales.flatMap((locale) =>
    toolNames.map(
      (toolName) => `${SEO_CONFIG.siteUrl}/${locale}/tools/${toolName}`
    )
  );

  const lastmod = new Date().toISOString();

  const xml = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>
    `
      )
      .join("")}
  </urlset>
  `.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
