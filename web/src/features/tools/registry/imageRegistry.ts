import { ImageToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

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