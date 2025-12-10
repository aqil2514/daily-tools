import { ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

type TextRegistry02 = "slug-generator"

export const textRegistry02: Record<TextRegistry02, ToolRegistryItem> = {
  "slug-generator": {
    title: {
      en: "Slug Generator",
      id: "Generator Slug",
    },
    description: {
      en: "Convert any text into a clean, URL-friendly slug instantly — perfect for blogs, SEO, and clean URL structures.",
      id: "Ubah teks apa pun menjadi slug yang rapi dan ramah URL secara instan — ideal untuk blog, SEO, dan struktur URL yang bersih.",
    },
    category: "text",
    href: "/tools/slug-generator",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/SlugGenerator")
    ),
    keywords: {
      en: [
        "slug generator",
        "text to slug",
        "url slug maker",
        "slugify online",
        "title to url",
        "seo slug tool",
        "clean url generator",
      ],
      id: [
        "generator slug",
        "slugify teks",
        "pembuat slug url",
        "slug online",
        "judul ke url",
        "alat slug seo",
        "pembuat url bersih",
      ],
    },
  },
};
