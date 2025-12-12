import { TextToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const textRegistry02: Partial<Record<TextToolName, ToolRegistryItem>> = {
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
  "lorem-ipsum-generator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/LoremIpsumGenerator")
    ),
    href: "/tools/lorem-ipsum-generator",
    category: "text",
    title: {
      en: "Lorem Ipsum Generator",
      id: "Generator Lorem Ipsum",
    },
    description: {
      en: "Generate random Lorem Ipsum text instantly. Perfect for designers, developers, and anyone needing placeholder content.",
      id: "Hasilkan teks Lorem Ipsum secara instan. Cocok untuk desainer, developer, atau siapa pun yang membutuhkan konten dummy.",
    },
    keywords: {
      en: [
        "lorem ipsum generator",
        "dummy text",
        "placeholder text",
        "random text generator",
        "lorem ipsum online",
        "content filler",
        "ui testing text",
      ],
      id: [
        "generator lorem ipsum",
        "teks dummy",
        "teks placeholder",
        "generator teks acak",
        "lorem ipsum online",
        "pengisi konten",
        "teks untuk uji tampilan",
      ],
    },
  },
};
