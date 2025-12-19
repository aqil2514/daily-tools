import { ToolRegistryItem } from "@/@types/Tools";
import { ConversionToolName } from "@/@types/tools/conversion";
import dynamic from "next/dynamic";
import temperatureConverterJsonLdSEO from "../../tool-name/Conversion/TemperatureConverter/seo/jsonld";
import temperatureConverterMetadataSEO from "../../tool-name/Conversion/TemperatureConverter/seo/metadata";
import lengthConverterJsonLdSEO from "../../tool-name/Conversion/LengthConverter/seo/jsonld";
import lengthConverterMetadataSEO from "../../tool-name/Conversion/LengthConverter/seo/metadata";

export const conversionRegistry01: Record<
  ConversionToolName,
  ToolRegistryItem
> = {
  "temperature-converter": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Conversion/TemperatureConverter")
    ),

    href: "/tools/temperature-converter",

    category: "conversion",

    title: {
      en: "Temperature Converter",
      id: "Konverter Suhu",
    },

    relatedTools: ["length-converter"],

    seo: {
      jsonLd: temperatureConverterJsonLdSEO,
      metadata: temperatureConverterMetadataSEO,
    },
  },
  "length-converter": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Conversion/LengthConverter")
    ),

    href: "/tools/length-converter",

    category: "conversion",

    title: {
      en: "Length Converter",
      id: "Konverter Panjang",
    },

    relatedTools: ["temperature-converter"],

    seo: {
      jsonLd: lengthConverterJsonLdSEO,
      metadata: lengthConverterMetadataSEO,
    },
  },
};
