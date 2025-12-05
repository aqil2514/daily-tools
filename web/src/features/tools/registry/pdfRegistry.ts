import { PDFToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const pdfRegistry: Record<PDFToolName, ToolRegistryItem> = {
  "pdf-merge": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFMerge")),
    href: "/tools/pdf-merge",
    title: "PDF Merge",
    description: "Combine multiple PDF files into one.",
    category: "pdf",
    keywords: [
      "pdf merge",
      "merge pdf",
      "combine pdf",
      "join pdf",
      "merge documents",
    ],
  },

  "pdf-split": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFSplit")),
    href: "/tools/pdf-split",
    title: "PDF Split",
    description: "Split PDF pages into separate files.",
    category: "pdf",
    keywords: ["pdf split", "split pdf", "separate pdf", "extract pdf pages"],
  },

  "pdf-compress": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFCompress")),
    href: "/tools/pdf-compress",
    title: "PDF Compress",
    description: "Reduce PDF file size while preserving quality.",
    category: "pdf",
    keywords: [
      "pdf compress",
      "compress pdf",
      "reduce pdf size",
      "pdf optimizer",
    ],
  },

  "pdf-generator": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFGenerator")),
    href: "/tools/pdf-generator",
    title: "PDF Generator",
    description: "Generate invoices, certificates, and custom PDFs.",
    category: "pdf",
    keywords: [
      "pdf generator",
      "create pdf",
      "generate invoice pdf",
      "generate certificate",
      "custom pdf creator",
    ],
  },
};

export const pdfToolNames = Object.keys(pdfRegistry) as PDFToolName[];
