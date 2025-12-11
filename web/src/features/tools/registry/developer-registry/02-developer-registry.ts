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
};
