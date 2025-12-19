import { ToolRegistryItem } from "@/@types/Tools";
import { ImageToolName } from "@/@types/tools/image";
import dynamic from "next/dynamic";
import imageMetadataViewerJsonLdSEO from "../../tool-name/Images/ImageMetadataViewer/seo/jsonld";
import imageMetadataViewerMetadataSEO from "../../tool-name/Images/ImageMetadataViewer/seo/metadata";

export const imageRegistry02: Partial<Record<ImageToolName, ToolRegistryItem>> =
  {
    "image-metadata-viewer": {
      category: "image",
      title: {
        en: "Image Metadata Viewer",
        id: "Lihat Metadata Gambar",
      },
      
      href: "/tools/image-metadata-viewer",
      Component: dynamic(
        () => import("@/features/tools/tool-name/Images/ImageMetadataViewer")
      ),

      seo: {
        jsonLd: imageMetadataViewerJsonLdSEO,
        metadata: imageMetadataViewerMetadataSEO,
      },
    },
  };
