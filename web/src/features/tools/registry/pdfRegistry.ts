import { PDFToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const pdfRegistry: Record<PDFToolName, ToolRegistryItem> = {
  "pdf-merge": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFMerge")),
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
  },

  "pdf-split": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFSplit")),
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
  },

  // "pdf-compress": {
  //   Component: dynamic(() => import("@/features/tools/PDF/PDFCompress")),
  //   href: "/tools/pdf-compress",
  //   category: "pdf",

  //   title: {
  //     en: "PDF Compress",
  //     id: "Kompres PDF",
  //   },
  //   description: {
  //     en: "Reduce PDF file size while preserving quality.",
  //     id: "Kurangi ukuran file PDF sambil mempertahankan kualitas.",
  //   },
  //   keywords: {
  //     en: ["pdf compress", "compress pdf", "reduce pdf size", "pdf optimizer"],
  //     id: ["kompres pdf", "mengurangi ukuran pdf", "pengoptimal pdf"],
  //   },
  // },

  "pdf-generator": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFGenerator")),
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

export const pdfToolNames = Object.keys(pdfRegistry) as PDFToolName[];
