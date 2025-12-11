import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

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
};
