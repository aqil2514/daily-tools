import { MathToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import squareJsonLdSEO from "../../tool-name/Math/GeometrySquare/seo/jsonld";
import squareMetadataSEO from "../../tool-name/Math/GeometrySquare/seo/metadata";
import rectangleMetadataSEO from "../../tool-name/Math/GeometryRectangle/seo/metadata";
import rectangleJsonLdSEO from "../../tool-name/Math/GeometryRectangle/seo/jsonld";
import triangleJsonLdSEO from "../../tool-name/Math/GeometryTriangle/seo/jsonld";
import triangleMetadataSEO from "../../tool-name/Math/GeometryTriangle/seo/metadata";

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
};
