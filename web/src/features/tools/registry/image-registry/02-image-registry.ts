import { ToolRegistryItem } from "@/@types/Tools";
import { ImageToolName } from "@/@types/tools/image";
import dynamic from "next/dynamic";

export const imageRegistry02: Partial<Record<ImageToolName, ToolRegistryItem>> =
  {
    "image-metadata-viewer": {
      category: "image",
      title: {
        en: "Image Metadata Viewer",
        id: "Lihat Metadata Gambar",
      },
      description: {
        en: "See image metadata",
        id: "Lihat metadata",
      },
      keywords: {
        en: [""],
        id: [""],
      },
      href: "/tools/image-metadata-viewer",
      Component: dynamic(
        () => import("@/features/tools/tool-name/Images/ImageMetadataViewer")
      ),
    },
  };
