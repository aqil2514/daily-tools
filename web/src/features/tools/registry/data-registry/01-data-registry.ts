import { ToolRegistryItem } from "@/@types/Tools";
import { DataToolName } from "@/@types/tools/data";
import dynamic from "next/dynamic";
import csvToJsonMetadataSEO from "../../tool-name/Data/CSVToJSON/seo/metadata";
import csvToJsonJsonLdSEO from "../../tool-name/Data/CSVToJSON/seo/jsonld";

// SEO

export const dataRegistry01: Partial<
  Record<DataToolName, ToolRegistryItem>
> = {
  "csv-to-json": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Data/CSVToJSON")
    ),

    href: "/tools/csv-to-json",
    category: "data",

    title: {
      en: "CSV to JSON Converter",
      id: "Konversi CSV ke JSON",
    },

    // relatedTools: [
    //   "json-to-csv",
    //   "json-formatter",
    //   "csv-viewer",
    // ],

    seo: {
      metadata: csvToJsonMetadataSEO,
      jsonLd: csvToJsonJsonLdSEO,
    },
  },
};
