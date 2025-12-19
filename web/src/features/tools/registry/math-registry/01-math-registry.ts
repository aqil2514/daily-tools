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

    seo: {
      jsonLd: trapezoidJsonLdSEO,
      metadata: trapezoidMetadataSEO,
    },
  },
};
