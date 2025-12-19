import { ToolRegistryItem } from "@/@types/Tools";
import { TextToolName } from "@/@types/tools/text";
import dynamic from "next/dynamic";
import caseConverterJsonLdSEO from "../../tool-name/Text/CaseConverter/seo/jsonld";
import caseConverterMetadataSEO from "../../tool-name/Text/CaseConverter/seo/metadata";
import wordCounterJsonLdSEO from "../../tool-name/Text/WordCounter/seo/jsonld";
import wordCounterMetadataSEO from "../../tool-name/Text/WordCounter/seo/metadata";
import removeDuplicateLinesJsonLdSEO from "../../tool-name/Text/RemoveDuplicateLines/seo/jsonld";
import removeDuplicateLinesMetadataSEO from "../../tool-name/Text/RemoveDuplicateLines/seo/metadata";
import textDiffJsonLdSEO from "../../tool-name/Text/TextDiff/seo/jsonld";
import textDiffMetadataSEO from "../../tool-name/Text/TextDiff/seo/metadata";
import urlExtractorJsonLdSEO from "../../tool-name/Text/UrlExtractor/seo/jsonld";
import urlExtractorMetadataSEO from "../../tool-name/Text/UrlExtractor/seo/metadata";

export const textRegistry01: Partial<Record<TextToolName, ToolRegistryItem>> = {
  "case-converter": {
    title: {
      en: "Case Converter",
      id: "Pengubah Huruf",
    },
    category: "text",
    href: "/tools/case-converter",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/CaseConverter")
    ),

    relatedTools: ["slug-generator", "remove-duplicate-lines"],

    seo: {
      jsonLd: caseConverterJsonLdSEO,
      metadata: caseConverterMetadataSEO,
    },
  },

  "word-counter": {
    title: {
      en: "Word Counter",
      id: "Penghitung Kata",
    },
    category: "text",
    href: "/tools/word-counter",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/WordCounter")
    ),

    relatedTools: ["text-diff"],

    seo: {
      jsonLd: wordCounterJsonLdSEO,
      metadata: wordCounterMetadataSEO,
    },
  },

  "remove-duplicate-lines": {
    title: {
      en: "Remove Duplicate Lines",
      id: "Hapus Baris Duplikat",
    },
    category: "text",
    href: "/tools/remove-duplicate-lines",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/RemoveDuplicateLines")
    ),

    relatedTools: ["case-converter", "url-extractor"],

    seo: {
      jsonLd: removeDuplicateLinesJsonLdSEO,
      metadata: removeDuplicateLinesMetadataSEO,
    },
  },

  "text-diff": {
    title: {
      en: "Text Diff",
      id: "Pembanding Teks",
    },
    category: "text",
    href: "/tools/text-diff",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/TextDiff")
    ),
    relatedTools: ["word-counter"],
    seo: {
      jsonLd: textDiffJsonLdSEO,
      metadata: textDiffMetadataSEO,
    },
  },

  "url-extractor": {
    title: {
      en: "URL Extractor",
      id: "Ekstraktor URL",
    },
    category: "text",
    href: "/tools/url-extractor",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Text/UrlExtractor")
    ),

    relatedTools: ["remove-duplicate-lines", "url-parser"],

    seo: {
      jsonLd: urlExtractorJsonLdSEO,
      metadata: urlExtractorMetadataSEO,
    },
  },
};
