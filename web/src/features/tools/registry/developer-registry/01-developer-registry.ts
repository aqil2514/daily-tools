import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";
import { base64MetadataSEO } from "../../tool-name/Developer/Base64Encoder/seo/metadata";
import { base64JsonLdSEO } from "../../tool-name/Developer/Base64Encoder/seo/jsonld";
import jwtDecoderJsonLdSEO from "../../tool-name/Developer/JWTDecoder/seo/jsonld";
import jwtDecoderMetadataSEO from "../../tool-name/Developer/JWTDecoder/seo/metadata";
import passwordGeneratorJsonLdSEO from "../../tool-name/Developer/PasswordGenerator/seo/jsonld";
import passwordGeneratorMetadataSEO from "../../tool-name/Developer/PasswordGenerator/seo/metadata";
import uuidGeneratorJsonLdSEO from "../../tool-name/Developer/UUIDGenerator/seo/jsonld";
import uuidGeneratorMetadataSEO from "../../tool-name/Developer/UUIDGenerator/seo/metadata";

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
    description: {
      en: "Decode JWT tokens instantly and securely in your browser. View header, payload, and signature without uploading any data.",
      id: "Decode token JWT secara instan dan aman langsung di browser Anda. Lihat header, payload, dan signature tanpa mengunggah data apa pun.",
    },
    keywords: {
      en: [
        "jwt decoder",
        "jwt token",
        "decode jwt online",
        "jwt viewer",
        "developer tool jwt",
        "jwt header payload",
      ],
      id: [
        "dekoder jwt",
        "token jwt",
        "decode jwt online",
        "lihat jwt",
        "alat developer jwt",
        "jwt header payload",
      ],
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
    description: {
      en: "Generate strong, secure, and customizable passwords instantly. Perfect for developers, security tasks, and everyday use.",
      id: "Hasilkan password yang kuat, aman, dan dapat dikustomisasi secara instan. Cocok untuk developer, kebutuhan keamanan, maupun penggunaan sehari-hari.",
    },
    keywords: {
      en: [
        "password generator",
        "secure password",
        "random password",
        "strong password",
        "online password tool",
      ],
      id: [
        "generator password",
        "password acak",
        "password kuat",
        "alat password online",
        "buat password aman",
      ],
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
    description: {
      en: "Generate UUIDs instantly in various versions such as v1, v4, and v7. Perfect for developers, databases, testing, and unique identifiers.",
      id: "Hasilkan UUID secara instan dalam berbagai versi seperti v1, v4, dan v7. Cocok untuk developer, database, testing, dan pembuatan ID unik.",
    },
    keywords: {
      en: [
        "uuid generator",
        "uuid v4",
        "uuid v7",
        "uuid online",
        "generate unique id",
        "developer tools",
        "online uuid tool",
      ],
      id: [
        "generator uuid",
        "uuid v4",
        "uuid v7",
        "uuid online",
        "buat id unik",
        "alat developer",
        "alat uuid online",
      ],
    },

    relatedTools: ["uuid-generator"],
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
    description: {
      en: "Encode or decode Base64 instantly in your browser. Supports text conversion with no data uploaded.",
      id: "Encode atau decode Base64 secara instan langsung di browser Anda. Mendukung konversi teks tanpa mengunggah data.",
    },
    keywords: {
      en: [
        "base64 encoder",
        "base64 decoder",
        "encode base64 online",
        "decode base64 online",
        "developer tools",
        "text encoding",
      ],
      id: [
        "encoder base64",
        "decoder base64",
        "encode base64 online",
        "decode base64 online",
        "alat developer",
        "encoding teks",
      ],
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
    description: {
      en: "Encode or decode URLs instantly in your browser. Useful for debugging query strings, web development, and API integrations.",
      id: "Encode atau decode URL secara instan langsung di browser Anda. Berguna untuk debugging query string, pengembangan web, dan integrasi API.",
    },
    keywords: {
      en: [
        "url encoder",
        "url decoder",
        "encode url online",
        "decode url online",
        "url encode decode",
        "percent encoding",
        "developer tools url",
        "web debugging tool",
        "uri encoder",
        "uri decoder",
        "querystring encoding",
      ],
      id: [
        "encoder url",
        "decoder url",
        "encode url online",
        "decode url online",
        "alat developer url",
        "percent encoding",
        "alat debugging web",
        "encode decode url",
        "encoder uri",
        "decoder uri",
        "encoding query string",
      ],
    },
  },
};
