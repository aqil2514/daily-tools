import { MathToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import parallelogramJsonLdSEO from "../../tool-name/Math/GeometryParallelogram/seo/jsonld";
import parallelogramMetadataSEO from "../../tool-name/Math/GeometryParallelogram/seo/metadata";
import rhombusJsonLdSEO from "../../tool-name/Math/GeometryRhombus/seo/jsonld";
import rhombusMetadataSEO from "../../tool-name/Math/GeometryRhombus/seo/metadata";

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
  "geometry-rhombus": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometryRhombus")
    ),
    href: "/tools/geometry-rhombus",
    category: "math",
    title: {
      en: "Rhombus Calculator",
      id: "Kalkulator Belah Ketupat",
    },
    description: {
      en: "Calculate the area and perimeter of a rhombus using diagonals and side length.",
      id: "Hitung luas dan keliling belah ketupat menggunakan diagonal dan panjang sisi.",
    },
    keywords: {
      en: [
        "rhombus calculator",
        "area of rhombus",
        "perimeter of rhombus",
        "rhombus geometry",
      ],
      id: [
        "kalkulator belah ketupat",
        "luas belah ketupat",
        "keliling belah ketupat",
        "bangun datar belah ketupat",
      ],
    },
    seo: {
      jsonLd: rhombusJsonLdSEO,
      metadata: rhombusMetadataSEO,
    },
  },
};
