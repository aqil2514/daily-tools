import { SEO_CONFIG } from "@/constants/seo";
import { toolsRegistry } from "@/features/tools/registry";
import { Locale } from "next-intl";

export async function GET() {
  const toolNames = Object.keys(toolsRegistry);
  const locale: Locale[] = ["en", "id"];

  const urls = locale.flatMap((locale) => {
    return toolNames.map(
      (toolName) => `${SEO_CONFIG.siteUrl}/${locale}/tools/${toolName}`
    );
  });

  const lastmod = new Date().toISOString();

  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
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
