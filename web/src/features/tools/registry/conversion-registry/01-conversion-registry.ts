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

    description: {
      en: "Convert length and distance units such as millimeter, centimeter, meter, kilometer, inch, foot, yard, and mile instantly.",
      id: "Konversi satuan panjang dan jarak seperti milimeter, sentimeter, meter, kilometer, inci, kaki, yard, dan mil secara instan.",
    },

    keywords: {
      en: [
        "length converter",
        "distance converter",
        "meter to kilometer",
        "centimeter to meter",
        "inch to cm",
        "foot to meter",
        "mile to kilometer",
        "length conversion",
      ],
      id: [
        "konverter panjang",
        "konverter jarak",
        "meter ke kilometer",
        "sentimeter ke meter",
        "inci ke cm",
        "kaki ke meter",
        "mil ke kilometer",
        "konversi panjang",
      ],
    },

    relatedTools: ["temperature-converter"],

    seo: {
      jsonLd: lengthConverterJsonLdSEO,
      metadata: lengthConverterMetadataSEO,
    },
  },
};
