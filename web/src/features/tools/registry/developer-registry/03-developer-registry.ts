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

    relatedTools: ["json-formatter", "regex-tester", "base64-encoder"],

    seo: {
      jsonLd: colorConverterJsonLdSEO,
      metadata: colorConverterMetadataSEO,
    },
  },
};
