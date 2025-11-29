import { ToolsListItemType } from "@/@types/Tools";

interface ToolList {
  sectionTitle: string;
  sectionItem: ToolsListItemType[];
}

const imageToolList: ToolsListItemType[] = [
  {
    title: "Image Converter",
    href: "/tools/image-converter",
    description:
      "Convert images between formats like JPG, PNG, WebP, and more.",
  },
  {
    title: "Image Resizer",
    href: "/tools/image-resizer",
    description: "Resize your images while maintaining optimal clarity.",
  },
  {
    title: "Image Compressor",
    href: "/tools/image-compressor",
    description: "Reduce image file size without noticeable quality loss.",
  },
  {
    title: "Image Cropper",
    href: "/tools/image-cropper",
    description: "Crop your images with precision and full control.",
  },
  {
    title: "Image Rotate",
    href: "/tools/image-rotate",
    description: "Rotate images instantly to fix orientation issues.",
  },
  {
    title: "Image to PDF",
    href: "/tools/image-to-pdf",
    description: "Convert one or multiple images into a clean PDF document.",
  },
];

const pdfToolList: ToolsListItemType[] = [
  {
    title: "PDF Merge",
    href: "/tools/pdf-merge",
    description: "Combine multiple PDF files into a single organized document.",
  },
  {
    title: "PDF Split",
    href: "/tools/pdf-split",
    description: "Split PDF pages into separate files with full flexibility.",
  },
  {
    title: "PDF Compress",
    href: "/tools/pdf-compress",
    description: "Compress PDF documents to reduce file size efficiently.",
  },
];

const qrToolList: ToolsListItemType[] = [
  {
    title: "QR Generator",
    description: "Generate your own QR",
    href: "/tools/qr-generator",
  },
];

export const toolList: ToolList[] = [
  {
    sectionTitle: "Image Tools",
    sectionItem: imageToolList,
  },
  {
    sectionTitle: "PDF Tools",
    sectionItem: pdfToolList,
  },
  {
    sectionTitle: "QR Tools",
    sectionItem: qrToolList,
  },
];
