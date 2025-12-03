import dynamic from "next/dynamic";
import {
  ImageToolName,
  PDFToolName,
  QRToolName,
  ToolName,
  ToolRegistry,
  ToolRegistryItem,
} from "@/@types/Tools";

// --- IMAGE REGISTRY ---
export const imageRegistry: Record<ImageToolName, ToolRegistryItem> = {
  // "image-compressor": {
  //   Component: dynamic(() => import("@/features/tools/Images/ImageCompressor")),
  //   href: "/tools/image-compressor",
  //   title: "Image Compressor",
  //   description: "Reduce image size while retaining quality.",
  //   category: "image",
  // },
  "image-converter": {
    Component: dynamic(() => import("@/features/tools/Images/ImageConverter")),
    href: "/tools/image-converter",
    title: "Image Converter",
    description: "Convert images between JPG, PNG, WebP, AVIF and more.",
    category: "image",
  },
  "image-resizer": {
    Component: dynamic(() => import("@/features/tools/Images/ImageResizer")),
    href: "/tools/image-resizer",
    title: "Image Resizer",
    description: "Resize your image to exact dimensions.",
    category: "image",
  },
  "image-cropper": {
    Component: dynamic(() => import("@/features/tools/Images/ImageCropper")),
    href: "/tools/image-cropper",
    title: "Image Cropper",
    description: "Crop your image with flexible aspect ratios.",
    category: "image",
  },
  "image-rotate": {
    Component: dynamic(() => import("@/features/tools/Images/ImageRotate")),
    href: "/tools/image-rotate",
    title: "Image Rotate",
    description: "Rotate your image instantly.",
    category: "image",
  },
  "image-to-pdf": {
    Component: dynamic(() => import("@/features/tools/Images/ImageToPDF")),
    href: "/tools/image-to-pdf",
    title: "Image to PDF",
    description: "Convert one or more images into a clean PDF.",
    category: "image",
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
  },
  "pdf-split": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFSplit")),
    href: "/tools/pdf-split",
    title: "PDF Split",
    description: "Split PDF pages into separate files.",
    category: "pdf",
  },
  "pdf-compress": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFCompress")),
    href: "/tools/pdf-compress",
    title: "PDF Compress",
    description: "Reduce PDF file size while preserving quality.",
    category: "pdf",
  },
  "pdf-generator": {
    Component: dynamic(() => import("@/features/tools/PDF/PDFGenerator")),
    href: "/tools/pdf-generator",
    title: "PDF Generator",
    description: "Generate invoices, certificates, and custom PDFs.",
    category: "pdf",
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
  },
};
export const qrToolNames = Object.keys(qrRegistry) as QRToolName[];

//  --- COMBINED REGISTRY ---
export const toolsRegistry: ToolRegistry = {
  ...imageRegistry,
  ...pdfRegistry,
  ...qrRegistry,
};

export const allToolNames = [
  ...imageToolNames,
  ...pdfToolNames,
  ...qrToolNames,
] as ToolName[];

export const toolList = {
  image: Object.values(toolsRegistry).filter((t) => t.category === "image"),
  pdf: Object.values(toolsRegistry).filter((t) => t.category === "pdf"),
  qr: Object.values(toolsRegistry).filter((t) => t.category === "qr"),
};

export const sidebarSections = [
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