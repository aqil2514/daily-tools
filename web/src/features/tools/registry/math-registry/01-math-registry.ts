import { MathToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import squareJsonLdSEO from "../../tool-name/Math/GeometrySquare/seo/jsonld";
import squareMetadataSEO from "../../tool-name/Math/GeometrySquare/seo/metadata";

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
};
