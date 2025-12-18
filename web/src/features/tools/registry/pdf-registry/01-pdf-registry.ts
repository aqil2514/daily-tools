import { ToolRegistryItem } from "@/@types/Tools";
import { PDFToolName } from "@/@types/tools/pdf";
import dynamic from "next/dynamic";
import pdfMergeJsonLdSEO from "../../tool-name/PDF/PDFMerge/seo/jsonld";
import pdfMergeMetadataSEO from "../../tool-name/PDF/PDFMerge/seo/metadata";
import pdfSplitJsonLdSEO from "../../tool-name/PDF/PDFSplit/seo/jsonld";
import pdfSplitMetadataSEO from "../../tool-name/PDF/PDFSplit/seo/metadata";

export const pdfRegistry01: Record<PDFToolName, ToolRegistryItem> = {
  "pdf-merge": {
    Component: dynamic(() => import("@/features/tools/tool-name/PDF/PDFMerge")),
    href: "/tools/pdf-merge",
    category: "pdf",

    title: {
      en: "PDF Merge",
      id: "Gabung PDF",
    },
    description: {
      en: "Combine multiple PDF files into one.",
      id: "Gabungkan beberapa file PDF menjadi satu.",
    },
    keywords: {
      en: [
        "pdf merge",
        "merge pdf",
        "combine pdf",
        "join pdf",
        "merge documents",
      ],
      id: ["gabung pdf", "menggabungkan pdf", "satukan pdf", "gabung dokumen"],
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
    description: {
      en: "Split PDF pages into separate files.",
      id: "Pisahkan halaman-halaman PDF menjadi file terpisah.",
    },
    keywords: {
      en: ["pdf split", "split pdf", "separate pdf", "extract pdf pages"],
      id: ["pisah pdf", "memisahkan pdf", "ekstrak halaman pdf"],
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
    description: {
      en: "Generate invoices, certificates, and custom PDFs.",
      id: "Buat faktur, sertifikat, dan PDF kustom.",
    },
    keywords: {
      en: [
        "pdf generator",
        "create pdf",
        "generate invoice pdf",
        "generate certificate",
        "custom pdf creator",
      ],
      id: [
        "generator pdf",
        "buat pdf",
        "buat faktur pdf",
        "buat sertifikat",
        "pembuat pdf kustom",
      ],
    },
  },
};
