import { MetadataRoute } from "next";

// app/robots.tsK
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://flowtooly.vercel.app/sitemap.xml",
      "https://flowtooly.vercel.app/sitemap-static.xml",
      "https://flowtooly.vercel.app/sitemap-tools.xml",
    ],
  };
}
