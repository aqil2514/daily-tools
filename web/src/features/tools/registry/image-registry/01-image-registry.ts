import { ToolRegistryItem } from "@/@types/Tools";
import { ImageToolName } from "@/@types/tools/image";
import dynamic from "next/dynamic";
import imageConverterMetadataSEO from "../../tool-name/Images/ImageConverter/seo/metadata";
import imageConverterJsonLdSEO from "../../tool-name/Images/ImageConverter/seo/jsonld";
import imageResizerJsonLdSEO from "../../tool-name/Images/ImageResizer/seo/jsonld";
import imageResizerMetadataSEO from "../../tool-name/Images/ImageResizer/seo/metadata";
import imageCropperJsonLdSEO from "../../tool-name/Images/ImageCropper/seo/jsonld";
import imageCropperMetadataSEO from "../../tool-name/Images/ImageCropper/seo/metadata";
import imageRotateJsonLdSEO from "../../tool-name/Images/ImageRotate/seo/jsonld";
import imageRotateMetadataSEO from "../../tool-name/Images/ImageRotate/seo/metadata";
import imageToPdfJsonLdSEO from "../../tool-name/Images/ImageToPDF/seo/jsonld";
import imageToPdfMetadataSEO from "../../tool-name/Images/ImageToPDF/seo/metadata";

export const imageRegistry01: Partial<Record<ImageToolName, ToolRegistryItem>> =
  {
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

      relatedTools: ["image-cropper", "image-resizer"],

      seo: {
        jsonLd: imageRotateJsonLdSEO,
        metadata: imageRotateMetadataSEO,
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

      relatedTools: ["image-converter", "image-resizer", "image-rotate"],

      seo: {
        jsonLd: imageToPdfJsonLdSEO,
        metadata: imageToPdfMetadataSEO,
      },
    },
  };
