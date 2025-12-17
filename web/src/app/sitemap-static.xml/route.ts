import { SEO_CONFIG } from "@/constants/seo";

export async function GET() {
  const urls = [
    "/en",
    "/id",
    "/en/tools",
    "/id/tools",
    "/en/privacy",
    "/id/privacy",
    "/en/terms",
    "/id/terms",
  ];

  const now = new Date().toISOString();

  const xml = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (path) => `
      <url>
        <loc>${SEO_CONFIG.siteUrl}${path}</loc>
        <lastmod>${now}</lastmod>
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
