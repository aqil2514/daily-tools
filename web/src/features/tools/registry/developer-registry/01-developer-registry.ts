import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const developerRegistry01: Record<DeveloperToolName, ToolRegistryItem> =
  {
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
      messagePath: "tools.developer.jwt-decoder",
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
    },
  };
