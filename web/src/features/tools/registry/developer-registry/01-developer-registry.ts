import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const developerRegistry01: Record<DeveloperToolName, ToolRegistryItem> =
  {
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
  };
