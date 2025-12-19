import dynamic from "next/dynamic";
import { base64MetadataSEO } from "../../tool-name/Developer/Base64Encoder/seo/metadata";
import { base64JsonLdSEO } from "../../tool-name/Developer/Base64Encoder/seo/jsonld";
import jwtDecoderJsonLdSEO from "../../tool-name/Developer/JWTDecoder/seo/jsonld";
import jwtDecoderMetadataSEO from "../../tool-name/Developer/JWTDecoder/seo/metadata";
import passwordGeneratorJsonLdSEO from "../../tool-name/Developer/PasswordGenerator/seo/jsonld";
import passwordGeneratorMetadataSEO from "../../tool-name/Developer/PasswordGenerator/seo/metadata";
import uuidGeneratorJsonLdSEO from "../../tool-name/Developer/UUIDGenerator/seo/jsonld";
import uuidGeneratorMetadataSEO from "../../tool-name/Developer/UUIDGenerator/seo/metadata";
import urlEncoderJsonLdSEO from "../../tool-name/Developer/URLEncoder/seo/jsonld";
import urlEncoderMetadataSEO from "../../tool-name/Developer/URLEncoder/seo/metadata";
import { DeveloperToolName } from "@/@types/tools/developer";
import { ToolRegistryItem } from "@/@types/Tools";

export const developerRegistry01: Partial<
  Record<DeveloperToolName, ToolRegistryItem>
> = {
  "jwt-decoder": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/JWTDecoder")
    ),
    href: "/tools/jwt-decoder",
    category: "developer",
    title: {
      en: "JWT Decoder",
      id: "Dekoder JWT",
    },

    relatedTools: ["json-formatter", "base64-encoder"],
    seo: {
      jsonLd: jwtDecoderJsonLdSEO,
      metadata: jwtDecoderMetadataSEO,
    },
  },

  "password-generator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/PasswordGenerator")
    ),
    href: "/tools/password-generator",
    category: "developer",
    title: {
      en: "Password Generator",
      id: "Generator Password",
    },

    relatedTools: ["uuid-generator"],

    seo: {
      jsonLd: passwordGeneratorJsonLdSEO,
      metadata: passwordGeneratorMetadataSEO,
    },
  },

  "uuid-generator": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/UUIDGenerator")
    ),
    href: "/tools/uuid-generator",
    category: "developer",
    title: {
      en: "UUID Generator",
      id: "Generator UUID",
    },

    relatedTools: ["password-generator", "jwt-decoder"],
    seo: {
      jsonLd: uuidGeneratorJsonLdSEO,
      metadata: uuidGeneratorMetadataSEO,
    },
  },

  "base64-encoder": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/Base64Encoder")
    ),
    href: "/tools/base64-encoder",
    category: "developer",
    title: {
      en: "Base64 Encoder & Decoder",
      id: "Encoder & Decoder Base64",
    },

    relatedTools: ["jwt-decoder", "url-encoder", "json-formatter"],

    seo: {
      metadata: base64MetadataSEO,
      jsonLd: base64JsonLdSEO,
    },
  },

  "url-encoder": {
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/URLEncoder")
    ),
    href: "/tools/url-encoder",
    category: "developer",
    title: {
      en: "URL Encoder & Decoder",
      id: "Encoder & Decoder URL",
    },

    relatedTools: ["url-parser"],

    seo: {
      jsonLd: urlEncoderJsonLdSEO,
      metadata: urlEncoderMetadataSEO,
    },
  },
};
