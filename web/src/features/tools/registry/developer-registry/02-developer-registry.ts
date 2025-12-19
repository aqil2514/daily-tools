import { ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import urlParserMetadataSEO from "../../tool-name/Developer/UrlParser/seo/metadata";
import urlParserJsonLdSEO from "../../tool-name/Developer/UrlParser/seo/jsonld";
import jsonFormatterJsonLdSEO from "../../tool-name/Developer/JSONFormatter/seo/jsonld";
import jsonFormatterMetadataSEO from "../../tool-name/Developer/JSONFormatter/seo/metadata";
import yamlJsonConverterJsonLdSEO from "../../tool-name/Developer/YAMLJSONConverter/seo/jsonld";
import yamlJsonConverterMetadataSEO from "../../tool-name/Developer/YAMLJSONConverter/seo/metadata";
import htmlEscapeJsonLdSEO from "../../tool-name/Developer/HTMLEscape/seo/jsonld";
import htmlEscapeMetadataSEO from "../../tool-name/Developer/HTMLEscape/seo/metadata";
import regexTesterJsonLdSEO from "../../tool-name/Developer/RegexTester/seo/jsonld";
import regexTesterMetadataSEO from "../../tool-name/Developer/RegexTester/seo/metadata";
import { DeveloperToolName } from "@/@types/tools/developer";

export const developerRegistry02: Partial<
  Record<DeveloperToolName, ToolRegistryItem>
> = {
  "json-formatter": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/JSONFormatter")
    ),
    href: "/tools/json-formatter",
    category: "developer",
    title: {
      en: "JSON Formatter & Validator",
      id: "Formatter & Validator JSON",
    },

    relatedTools: ["jwt-decoder", "yaml-json-converter"],

    seo: {
      jsonLd: jsonFormatterJsonLdSEO,
      metadata: jsonFormatterMetadataSEO,
    },
  },
  "yaml-json-converter": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/YAMLJSONConverter")
    ),
    href: "/tools/yaml-json-converter",
    category: "developer",
    title: {
      en: "YAML ⇄ JSON Converter",
      id: "Konverter YAML ⇄ JSON",
    },

    relatedTools: ["json-formatter"],

    seo: {
      jsonLd: yamlJsonConverterJsonLdSEO,
      metadata: yamlJsonConverterMetadataSEO,
    },
  },
  "html-escape": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/HTMLEscape")
    ),
    href: "/tools/html-escape",
    category: "developer",
    title: {
      en: "HTML Escape & Unescape",
      id: "Escape & Unescape HTML",
    },

    relatedTools: ["json-formatter", "regex-tester"],
    seo: {
      jsonLd: htmlEscapeJsonLdSEO,
      metadata: htmlEscapeMetadataSEO,
    },
  },
  "regex-tester": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/RegexTester")
    ),
    href: "/tools/regex-tester",
    category: "developer",
    title: {
      en: "Regex Tester",
      id: "Penguji Regex",
    },

    relatedTools: ["json-formatter", "html-escape"],
    seo: {
      jsonLd: regexTesterJsonLdSEO,
      metadata: regexTesterMetadataSEO,
    },
  },
  "url-parser": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/UrlParser")
    ),

    href: "/tools/url-parser",
    category: "developer",

    title: {
      en: "URL Parser",
      id: "Parser URL",
    },

    relatedTools: ["url-encoder", "base64-encoder", "json-formatter"],

    seo: {
      metadata: urlParserMetadataSEO,
      jsonLd: urlParserJsonLdSEO,
    },
  },
};
