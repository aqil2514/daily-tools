import dynamic from "next/dynamic";
import {
  FinancialToolName,
  ImageToolName,
  PDFToolName,
  QRToolName,
  ToolName,
  ToolRegistry,
  ToolRegistryItem,
} from "@/@types/Tools";

// --- IMAGE REGISTRY ---
export const imageRegistry: Record<ImageToolName, ToolRegistryItem> = {
  "image-converter": {
    Component: dynamic(() => import("@/features/tools/Images/ImageConverter")),
    href: "/tools/image-converter",
    title: "Image Converter",
    description: "Convert images between JPG, PNG, WebP, AVIF and more.",
    category: "image",
    keywords: [
      "image converter",
      "convert image",
      "jpg to png",
      "png to jpg",
      "webp converter",
      "image format converter",
    ],
  },

  "image-resizer": {
    Component: dynamic(() => import("@/features/tools/Images/ImageResizer")),
    href: "/tools/image-resizer",
    title: "Image Resizer",
    description: "Resize your image to exact dimensions.",
    category: "image",
    keywords: [
      "image resizer",
      "resize image",
      "resize photo",
      "image dimensions",
      "photo resizer",
    ],
  },

  "image-cropper": {
    Component: dynamic(() => import("@/features/tools/Images/ImageCropper")),
    href: "/tools/image-cropper",
    title: "Image Cropper",
    description: "Crop your image with flexible aspect ratios.",
    category: "image",
    keywords: [
      "image cropper",
      "crop image",
      "photo crop",
      "crop tool",
      "aspect ratio crop",
    ],
  },

  "image-rotate": {
    Component: dynamic(() => import("@/features/tools/Images/ImageRotate")),
    href: "/tools/image-rotate",
    title: "Image Rotate",
    description: "Rotate your image instantly.",
    category: "image",
    keywords: [
      "image rotate",
      "rotate photo",
      "rotate picture",
      "flip image",
      "rotate tool",
    ],
  },

  "image-to-pdf": {
    Component: dynamic(() => import("@/features/tools/Images/ImageToPDF")),
    href: "/tools/image-to-pdf",
    title: "Image to PDF",
    description: "Convert one or more images into a clean PDF.",
    category: "image",
    keywords: [
      "image to pdf",
      "convert image to pdf",
      "jpg to pdf",
      "png to pdf",
      "photo to pdf",
    ],
  },
};

export const imageToolNames = Object.keys(imageRegistry) as ImageToolName[];

// --- PDF REGISTRY ---
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

// --- QR REGISTRY ---
export const qrRegistry: Record<QRToolName, ToolRegistryItem> = {
  "qr-generator": {
    Component: dynamic(() => import("@/features/tools/QR/QRGenerator")),
    href: "/tools/qr-generator",
    title: "QR Generator",
    description: "Create your own QR code instantly.",
    category: "qr",
    keywords: [
      "qr generator",
      "generate qr code",
      "qr maker",
      "create qr",
      "qr code tool",
    ],
  },
};

export const qrToolNames = Object.keys(qrRegistry) as QRToolName[];

// --- Financial REGISTRY ---

export const financialRegistry: Record<FinancialToolName, ToolRegistryItem> = {
  "cash-counter": {
    Component: dynamic(() => import("@/features/tools/Financial/CashCounter")),
    href: "/tools/cash-counter",
    title: "Cash Counter",
    description:
      "Quickly calculate cash totals, verify denominations, and check for discrepancies in your daily balance.",
    category: "financial",
    keywords: [
      "cash counter",
      "cash calculator",
      "cash reconciliation",
      "count money",
      "denomination calculator",
    ],
  },
};

export const financialToolNames = Object.keys(
  financialRegistry
) as FinancialToolName[];

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
  ...financialRegistry,
};

export const allToolNames = [
  ...imageToolNames,
  ...pdfToolNames,
  ...qrToolNames,
  ...financialToolNames,
] as ToolName[];

export const toolList = {
  image: Object.values(toolsRegistry).filter((t) => t.category === "image"),
  pdf: Object.values(toolsRegistry).filter((t) => t.category === "pdf"),
  qr: Object.values(toolsRegistry).filter((t) => t.category === "qr"),
  fiancial: Object.values(toolsRegistry).filter(
    (t) => t.category === "financial"
  ),
};

export const sidebarSections = [
  {
    sectionTitle: "Financial Tools",
    sectionItem: toolList.fiancial,
  },
  {
    sectionTitle: "Image Tools",
    sectionItem: toolList.image,
  },
  {
    sectionTitle: "PDF Tools",
    sectionItem: toolList.pdf,
  },
  {
    sectionTitle: "QR Tools",
    sectionItem: toolList.qr,
  },
];
