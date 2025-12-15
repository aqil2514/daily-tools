import { ToolRegistryItem } from "@/@types/Tools";
import { ConversionToolName } from "@/@types/tools/conversion";
import dynamic from "next/dynamic";
import temperatureConverterJsonLdSEO from "../../tool-name/Conversion/TemperatureConverter/seo/jsonld";
import temperatureConverterMetadataSEO from "../../tool-name/Conversion/TemperatureConverter/seo/metadata";

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

    description: {
      en: "Convert temperatures between Celsius, Fahrenheit, and Kelvin instantly with accurate formulas.",
      id: "Konversi suhu antara Celsius, Fahrenheit, dan Kelvin secara instan dengan rumus yang akurat.",
    },

    keywords: {
      en: [
        "temperature converter",
        "celsius to fahrenheit",
        "fahrenheit to celsius",
        "celsius to kelvin",
        "kelvin converter",
        "temperature conversion",
      ],
      id: [
        "konverter suhu",
        "celsius ke fahrenheit",
        "fahrenheit ke celsius",
        "celsius ke kelvin",
        "konversi suhu",
      ],
    },

    seo: {
      jsonLd: temperatureConverterJsonLdSEO,
      metadata: temperatureConverterMetadataSEO,
    },
  },
};
