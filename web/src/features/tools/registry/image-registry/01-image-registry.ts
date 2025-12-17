import { ToolRegistryItem } from "@/@types/Tools";
import { ImageToolName } from "@/@types/tools/image";
import dynamic from "next/dynamic";
import imageConverterMetadataSEO from "../../tool-name/Images/ImageConverter/seo/metadata";
import imageConverterJsonLdSEO from "../../tool-name/Images/ImageConverter/seo/jsonld";
import imageResizerJsonLdSEO from "../../tool-name/Images/ImageResizer/seo/jsonld";
import imageResizerMetadataSEO from "../../tool-name/Images/ImageResizer/seo/metadata";
import imageCropperJsonLdSEO from "../../tool-name/Images/ImageCropper/seo/jsonld";
import imageCropperMetadataSEO from "../../tool-name/Images/ImageCropper/seo/metadata";

export const imageRegistry01: Record<ImageToolName, ToolRegistryItem> = {
  "image-converter": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Images/ImageConverter")
    ),
    href: "/tools/image-converter",
    category: "image",

    title: {
      en: "Image Converter",
      id: "Konverter Gambar",
    },
    description: {
      en: "Convert images between JPG, PNG, WebP, AVIF and more.",
      id: "Konversi gambar antara format JPG, PNG, WebP, AVIF, dan lainnya.",
    },
    keywords: {
      en: ["image converter", "convert image", "jpg to png", "webp converter"],
      id: [
        "konverter gambar",
        "konversi gambar",
        "jpg ke png",
        "konverter webp",
      ],
    },

    relatedTools: ["image-resizer", "image-cropper", "image-to-pdf"],

    seo: {
      jsonLd: imageConverterJsonLdSEO,
      metadata: imageConverterMetadataSEO,
    },
  },

  "image-resizer": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Images/ImageResizer")
    ),
    href: "/tools/image-resizer",
    category: "image",

    title: {
      en: "Image Resizer",
      id: "Pengubah Ukuran Gambar",
    },
    description: {
      en: "Resize your image to exact dimensions.",
      id: "Ubah ukuran gambar Anda ke dimensi yang tepat.",
    },
    keywords: {
      en: ["image resizer", "resize image", "resize photo", "image dimensions"],
      id: [
        "pengubah ukuran gambar",
        "ubah ukuran gambar",
        "ubah ukuran foto",
        "dimensi gambar",
      ],
    },

    relatedTools: ["image-converter", "image-cropper"],

    seo: {
      jsonLd: imageResizerJsonLdSEO,
      metadata: imageResizerMetadataSEO,
    },
  },

  "image-cropper": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Images/ImageCropper")
    ),
    href: "/tools/image-cropper",
    category: "image",

    title: {
      en: "Image Cropper",
      id: "Pemotong Gambar",
    },
    description: {
      en: "Crop your image with flexible aspect ratios.",
      id: "Potong gambar Anda dengan rasio aspek yang fleksibel.",
    },
    keywords: {
      en: ["image cropper", "crop image", "photo crop", "crop tool"],
      id: ["pemotong gambar", "potong gambar", "potong foto", "alat potong"],
    },

    relatedTools: ["image-resizer", "image-converter"],

    seo: {
      jsonLd: imageCropperJsonLdSEO,
      metadata: imageCropperMetadataSEO,
    },
  },

  "image-rotate": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Images/ImageRotate")
    ),
    href: "/tools/image-rotate",
    category: "image",

    title: {
      en: "Image Rotate",
      id: "Pemutar Gambar",
    },
    description: {
      en: "Rotate your image instantly.",
      id: "Putar gambar Anda secara instan.",
    },
    keywords: {
      en: ["image rotate", "rotate photo", "rotate picture", "flip image"],
      id: ["pemutar gambar", "putar foto", "putar gambar", "balik gambar"],
    },
  },

  "image-to-pdf": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Images/ImageToPDF")
    ),
    href: "/tools/image-to-pdf",
    category: "image",

    title: {
      en: "Image to PDF",
      id: "Gambar ke PDF",
    },
    description: {
      en: "Convert one or more images into a clean PDF.",
      id: "Konversi satu atau lebih gambar menjadi PDF yang rapi.",
    },
    keywords: {
      en: ["image to pdf", "convert image to pdf", "jpg to pdf", "png to pdf"],
      id: [
        "gambar ke pdf",
        "konversi gambar ke pdf",
        "jpg ke pdf",
        "png ke pdf",
      ],
    },
  },
};
