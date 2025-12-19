import { ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import parallelogramJsonLdSEO from "../../tool-name/Math/GeometryParallelogram/seo/jsonld";
import parallelogramMetadataSEO from "../../tool-name/Math/GeometryParallelogram/seo/metadata";
import rhombusJsonLdSEO from "../../tool-name/Math/GeometryRhombus/seo/jsonld";
import rhombusMetadataSEO from "../../tool-name/Math/GeometryRhombus/seo/metadata";
import kiteJsonLdSEO from "../../tool-name/Math/GeometryKite/seo/jsonld";
import kiteMetadataSEO from "../../tool-name/Math/GeometryKite/seo/metadata";
import semicircleJsonLdSEO from "../../tool-name/Math/GeometrySemicircle/seo/jsonld";
import semicircleMetadataSEO from "../../tool-name/Math/GeometrySemicircle/seo/metadata";
import { MathToolName } from "@/@types/tools/math";

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
    seo: {
      jsonLd: rhombusJsonLdSEO,
      metadata: rhombusMetadataSEO,
    },
  },
  "geometry-kite": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometryKite")
    ),
    href: "/tools/geometry-kite",
    category: "math",
    title: {
      en: "Kite Calculator",
      id: "Kalkulator Layang-layang",
    },
    seo: {
      jsonLd: kiteJsonLdSEO,
      metadata: kiteMetadataSEO,
    },
  },
  "geometry-semicircle": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Math/GeometrySemicircle")
    ),
    href: "/tools/geometry-semicircle",
    category: "math",
    title: {
      en: "Semicircle Calculator",
      id: "Kalkulator Setengah Lingkaran",
    },
    seo: {
      jsonLd: semicircleJsonLdSEO,
      metadata: semicircleMetadataSEO,
    },
  },
};
