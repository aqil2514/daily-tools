import { ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import squareJsonLdSEO from "../../tool-name/Math/GeometrySquare/seo/jsonld";
import squareMetadataSEO from "../../tool-name/Math/GeometrySquare/seo/metadata";
import rectangleMetadataSEO from "../../tool-name/Math/GeometryRectangle/seo/metadata";
import rectangleJsonLdSEO from "../../tool-name/Math/GeometryRectangle/seo/jsonld";
import triangleJsonLdSEO from "../../tool-name/Math/GeometryTriangle/seo/jsonld";
import triangleMetadataSEO from "../../tool-name/Math/GeometryTriangle/seo/metadata";
import circleJsonLdSEO from "../../tool-name/Math/GeometryCircle/seo/jsonld";
import circleMetadataSEO from "../../tool-name/Math/GeometryCircle/seo/metadata";
import trapezoidJsonLdSEO from "../../tool-name/Math/GeometryTrapezoid/seo/jsonld";
import trapezoidMetadataSEO from "../../tool-name/Math/GeometryTrapezoid/seo/metadata";
import { MathToolName } from "@/@types/tools/math";

export const mathRegistry01: Partial<Record<MathToolName, ToolRegistryItem>> = {
  "geometry-square": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometrySquare")
    ),
    href: "/tools/geometry-square",
    category: "math",
    title: {
      en: "Square Calculator",
      id: "Kalkulator Persegi",
    },
    description: {
      en: "Calculate the area and perimeter of a square instantly using a simple and interactive tool.",
      id: "Hitung luas dan keliling persegi dengan mudah menggunakan alat interaktif.",
    },
    keywords: {
      en: [
        "square calculator",
        "square area formula",
        "square perimeter formula",
        "geometry square",
        "math square tool",
      ],
      id: [
        "kalkulator persegi",
        "rumus persegi",
        "luas persegi",
        "keliling persegi",
        "bangun datar persegi",
      ],
    },
    // relatedTools: ["rectangle", "triangle", "circle"],

    seo: {
      jsonLd: squareJsonLdSEO,
      metadata: squareMetadataSEO,
    },
  },
  "geometry-rectangle": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometryRectangle")
    ),
    href: "/tools/geometry-rectangle",
    category: "math",
    title: {
      en: "Rectangle Calculator",
      id: "Kalkulator Persegi Panjang",
    },
    description: {
      en: "Calculate the area and perimeter of a rectangle easily using an interactive geometry tool.",
      id: "Hitung luas dan keliling persegi panjang dengan mudah menggunakan alat geometri interaktif.",
    },
    keywords: {
      en: [
        "rectangle calculator",
        "rectangle area formula",
        "rectangle perimeter formula",
        "geometry rectangle",
        "math rectangle tool",
      ],
      id: [
        "kalkulator persegi panjang",
        "rumus persegi panjang",
        "luas persegi panjang",
        "keliling persegi panjang",
        "bangun datar persegi panjang",
      ],
    },

    seo: {
      jsonLd: rectangleJsonLdSEO,
      metadata: rectangleMetadataSEO,
    },
  },
  "geometry-triangle": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometryTriangle")
    ),
    href: "/tools/geometry-triangle",
    category: "math",
    title: {
      en: "Triangle Calculator",
      id: "Kalkulator Segitiga",
    },
    description: {
      en: "Calculate the area and perimeter of a right triangle using base and height.",
      id: "Hitung luas dan keliling segitiga siku-siku menggunakan alas dan tinggi.",
    },
    keywords: {
      en: [
        "triangle calculator",
        "right triangle area",
        "triangle perimeter",
        "triangle geometry",
      ],
      id: [
        "kalkulator segitiga",
        "luas segitiga",
        "keliling segitiga",
        "segitiga siku-siku",
      ],
    },
    seo: {
      jsonLd: triangleJsonLdSEO,
      metadata: triangleMetadataSEO,
    },
  },
  "geometry-circle": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometryCircle")
    ),
    href: "/tools/geometry-circle",
    category: "math",
    title: {
      en: "Circle Calculator",
      id: "Kalkulator Lingkaran",
    },
    description: {
      en: "Calculate the area and circumference of a circle using its radius.",
      id: "Hitung luas dan keliling lingkaran menggunakan jari-jari.",
    },
    keywords: {
      en: [
        "circle calculator",
        "area of circle",
        "circumference of circle",
        "circle geometry",
        "radius circle",
      ],
      id: [
        "kalkulator lingkaran",
        "luas lingkaran",
        "keliling lingkaran",
        "jari-jari lingkaran",
        "rumus lingkaran",
      ],
    },

    seo: {
      jsonLd: circleJsonLdSEO,
      metadata: circleMetadataSEO,
    },
  },
  "geometry-trapezoid": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometryTrapezoid")
    ),
    href: "/tools/geometry-trapezoid",
    category: "math",
    title: {
      en: "Trapezoid Calculator",
      id: "Kalkulator Trapesium",
    },
    description: {
      en: "Calculate the area and perimeter of a trapezoid using parallel sides, height, and non-parallel sides.",
      id: "Hitung luas dan keliling trapesium menggunakan sisi sejajar, tinggi, dan sisi miring.",
    },
    keywords: {
      en: [
        "trapezoid calculator",
        "area of trapezoid",
        "perimeter of trapezoid",
        "trapezoid geometry",
      ],
      id: [
        "kalkulator trapesium",
        "luas trapesium",
        "keliling trapesium",
        "bangun datar trapesium",
      ],
    },

    seo: {
      jsonLd: trapezoidJsonLdSEO,
      metadata: trapezoidMetadataSEO,
    },
  },
};
