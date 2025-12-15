import { ToolRegistryItem } from "@/@types/Tools";
import { DeveloperToolName } from "@/@types/tools/developer";
import dynamic from "next/dynamic";
import colorConverterJsonLdSEO from "../../tool-name/Developer/ColorConverter/seo/jsonld";
import colorConverterMetadataSEO from "../../tool-name/Developer/ColorConverter/seo/metadata";

export const developerRegistry03: Partial<
  Record<DeveloperToolName, ToolRegistryItem>
> = {
  // =========================
  // Color Converter
  // =========================
  "color-converter": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/ColorConverter")
    ),

    href: "/tools/color-converter",

    category: "developer",

    title: {
      en: "Color Converter",
      id: "Konverter Warna",
    },

    description: {
      en: "Convert colors between HEX, RGB, HSL, and more instantly. Useful for web developers, designers, and UI work.",
      id: "Konversi warna antara HEX, RGB, HSL, dan format lainnya secara instan. Berguna untuk developer web, desainer, dan pekerjaan UI.",
    },

    keywords: {
      en: [
        "color converter",
        "hex to rgb",
        "rgb to hex",
        "hsl to rgb",
        "color code converter",
        "web color converter",
      ],
      id: [
        "konverter warna",
        "hex ke rgb",
        "rgb ke hex",
        "hsl ke rgb",
        "kode warna",
        "konversi warna web",
      ],
    },

    relatedTools: ["json-formatter", "regex-tester", "base64-encoder"],

    seo:{
      jsonLd:colorConverterJsonLdSEO,
      metadata: colorConverterMetadataSEO
    }
  },
};
