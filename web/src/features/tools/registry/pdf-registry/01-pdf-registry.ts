import { ToolRegistryItem } from "@/@types/Tools";
import { PDFToolName } from "@/@types/tools/pdf";
import dynamic from "next/dynamic";
import pdfMergeJsonLdSEO from "../../tool-name/PDF/PDFMerge/seo/jsonld";
import pdfMergeMetadataSEO from "../../tool-name/PDF/PDFMerge/seo/metadata";
import pdfSplitJsonLdSEO from "../../tool-name/PDF/PDFSplit/seo/jsonld";
import pdfSplitMetadataSEO from "../../tool-name/PDF/PDFSplit/seo/metadata";
import pdfGeneratorJsonLdSEO from "../../tool-name/PDF/PDFGenerator/seo/jsonld";
import pdfGeneratorMetadataSEO from "../../tool-name/PDF/PDFGenerator/seo/metadata";

export const pdfRegistry01: Record<PDFToolName, ToolRegistryItem> = {
  "pdf-merge": {
    Component: dynamic(() => import("@/features/tools/tool-name/PDF/PDFMerge")),
    href: "/tools/pdf-merge",
    category: "pdf",

    title: {
      en: "PDF Merge",
      id: "Gabung PDF",
    },

    relatedTools: ["pdf-split", "pdf-generator", "image-to-pdf"],

    seo: {
      jsonLd: pdfMergeJsonLdSEO,
      metadata: pdfMergeMetadataSEO,
    },
  },

  "pdf-split": {
    Component: dynamic(() => import("@/features/tools/tool-name/PDF/PDFSplit")),
    href: "/tools/pdf-split",
    category: "pdf",

    title: {
      en: "PDF Split",
      id: "Pisah PDF",
    },

    relatedTools: ["pdf-generator", "pdf-merge", "image-to-pdf"],

    seo: {
      jsonLd: pdfSplitJsonLdSEO,
      metadata: pdfSplitMetadataSEO,
    },
  },

  "pdf-generator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/PDF/PDFGenerator")
    ),
    href: "/tools/pdf-generator",
    category: "pdf",

    title: {
      en: "PDF Generator",
      id: "Generator PDF",
    },
    relatedTools: ["pdf-split", "pdf-merge", "image-to-pdf"],

    seo: {
      jsonLd: pdfGeneratorJsonLdSEO,
      metadata: pdfGeneratorMetadataSEO,
    },
  },
};
