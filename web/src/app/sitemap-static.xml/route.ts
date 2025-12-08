export async function GET() {
  const urls = [
    "https://flowtooly.vercel.app/en",
    "https://flowtooly.vercel.app/id",
    "https://flowtooly.vercel.app/en/tools",
    "https://flowtooly.vercel.app/id/tools",
  ];

  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
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
