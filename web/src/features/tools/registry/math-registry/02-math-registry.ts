import { MathToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import parallelogramJsonLdSEO from "../../tool-name/Math/GeometryParallelogram/seo/jsonld";
import parallelogramMetadataSEO from "../../tool-name/Math/GeometryParallelogram/seo/metadata";

export const mathRegistry02: Partial<Record<MathToolName, ToolRegistryItem>> = {
  "geometry-parallelogram": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometryParallelogram")
    ),
    href: "/tools/geometry-parallelogram",
    category: "math",
    title: {
      en: "Parallelogram Calculator",
      id: "Kalkulator Jajar Genjang",
    },
    description: {
      en: "Calculate the area and perimeter of a parallelogram using base, height, and side length.",
      id: "Hitung luas dan keliling jajar genjang menggunakan alas, tinggi, dan sisi miring.",
    },
    keywords: {
      en: [
        "parallelogram calculator",
        "area of parallelogram",
        "perimeter of parallelogram",
        "parallelogram geometry",
      ],
      id: [
        "kalkulator jajar genjang",
        "luas jajar genjang",
        "keliling jajar genjang",
        "bangun datar jajar genjang",
      ],
    },
    
    seo: {
      jsonLd: parallelogramJsonLdSEO,
      metadata: parallelogramMetadataSEO,
    },
  },
};
