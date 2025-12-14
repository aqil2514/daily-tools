import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import urlParserMetadataSEO from "../../tool-name/Developer/UrlParser/seo/metadata";
import urlParserJsonLdSEO from "../../tool-name/Developer/UrlParser/seo/jsonld";
import jsonFormatterJsonLdSEO from "../../tool-name/Developer/JSONFormatter/seo/jsonld";
import jsonFormatterMetadataSEO from "../../tool-name/Developer/JSONFormatter/seo/metadata";

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
    description: {
      en: "Format, minify, and validate JSON instantly in your browser. Supports readable indentation, error detection, and clean output.",
      id: "Format, minify, dan validasi JSON secara instan langsung di browser Anda. Mendukung indentasi yang rapi, deteksi error, dan output yang bersih.",
    },
    keywords: {
      en: [
        "json formatter",
        "json beautifier",
        "json validator",
        "json pretty print",
        "json minify",
        "json format online",
        "developer tools json",
        "json parser",
        "json checker",
      ],
      id: [
        "formatter json",
        "beautifier json",
        "validator json",
        "pretty print json",
        "minify json",
        "format json online",
        "alat developer json",
        "parser json",
        "cek json valid",
      ],
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
    description: {
      en: "Convert YAML to JSON or JSON to YAML instantly in your browser. Perfect for DevOps, backend developers, and configuration files.",
      id: "Konversi YAML ke JSON atau JSON ke YAML secara instan langsung di browser Anda. Cocok untuk DevOps, backend developer, dan kebutuhan konfigurasi.",
    },
    keywords: {
      en: [
        "yaml to json",
        "json to yaml",
        "yaml json converter",
        "convert yaml",
        "convert json",
        "yaml parser",
        "json parser",
        "kubernetes yaml convert",
        "docker compose yaml",
        "developer tools",
        "devops tools",
      ],
      id: [
        "yaml ke json",
        "json ke yaml",
        "konverter yaml json",
        "ubah yaml",
        "ubah json",
        "parser yaml",
        "parser json",
        "konversi yaml kubernetes",
        "yaml docker compose",
        "alat developer",
        "alat devops",
      ],
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
    description: {
      en: "Convert special characters to HTML entities or revert them back instantly. Useful for preventing XSS, debugging, and displaying HTML safely.",
      id: "Konversi karakter khusus menjadi HTML entities atau kembalikan ke bentuk asli secara instan. Berguna untuk mencegah XSS, debugging, dan menampilkan HTML dengan aman.",
    },
    keywords: {
      en: [
        "html escape",
        "html unescape",
        "escape html online",
        "convert html entities",
        "decode html entities",
        "html character converter",
        "prevent xss",
        "developer tool html",
        "string encoder html",
      ],
      id: [
        "escape html",
        "unescape html",
        "escape html online",
        "konversi html entities",
        "decode html entities",
        "konverter karakter html",
        "mencegah xss",
        "alat developer html",
        "encode html online",
      ],
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
    description: {
      en: "Test and debug regular expressions instantly in your browser. Supports flags, match highlighting, and live results.",
      id: "Uji dan debug regular expression secara instan langsung di browser Anda. Mendukung flags, highlight hasil, dan pembaruan otomatis.",
    },
    keywords: {
      en: [
        "regex tester",
        "regular expression tester",
        "regex online",
        "regex test tool",
        "javascript regex",
        "debug regex",
        "regex flags",
        "regex match tool",
        "regex pattern tester",
      ],
      id: [
        "penguji regex",
        "tes regex",
        "regex online",
        "alat uji regex",
        "regex javascript",
        "debug regex",
        "regex flags",
        "alat pencocokan regex",
        "uji pola regex",
      ],
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

    description: {
      en: "Parse a URL into its components, query parameters, and fragments instantly. Analyze URL structure directly in your browser with no data sent to a server.",
      id: "Uraikan URL menjadi komponen, parameter query, dan fragmen secara instan. Analisis struktur URL langsung di browser tanpa data dikirim ke server.",
    },

    keywords: {
      en: [
        "url parser",
        "parse url online",
        "url components",
        "query string parser",
        "url analyzer",
        "developer tools",
      ],
      id: [
        "parser url",
        "urai url",
        "komponen url",
        "parser query string",
        "alat developer",
      ],
    },

    relatedTools: ["url-encoder", "base64-encoder", "json-formatter"],

    seo: {
      metadata: urlParserMetadataSEO,
      jsonLd: urlParserJsonLdSEO,
    },
  },
};
