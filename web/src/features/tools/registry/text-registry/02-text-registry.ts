import { ToolRegistryItem } from "@/@types/Tools";
import { TextToolName } from "@/@types/tools/text";
import dynamic from "next/dynamic";
import slugGeneratorJsonLdSEO from "../../tool-name/Text/SlugGenerator/seo/jsonld";
import slugGeneratorMetadataSEO from "../../tool-name/Text/SlugGenerator/seo/metadata";
import loremIpsumGeneratorJsonLdSEO from "../../tool-name/Text/LoremIpsumGenerator/seo/jsonld";
import loremIpsumGeneratorMetadataSEO from "../../tool-name/Text/LoremIpsumGenerator/seo/metadata";

export const textRegistry02: Partial<Record<TextToolName, ToolRegistryItem>> = {
  "slug-generator": {
    title: {
      en: "Slug Generator",
      id: "Generator Slug",
    },
    category: "text",
    href: "/tools/slug-generator",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/SlugGenerator")
    ),

    relatedTools: ["case-converter"],

    seo: {
      jsonLd: slugGeneratorJsonLdSEO,
      metadata: slugGeneratorMetadataSEO,
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
    relatedTools: ["word-counter"],
    seo: {
      jsonLd: loremIpsumGeneratorJsonLdSEO,
      metadata: loremIpsumGeneratorMetadataSEO,
    },
  },
};
