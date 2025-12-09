import { DeveloperToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const developerRegistry: Record<DeveloperToolName, ToolRegistryItem> = {
  "password-generator": {
    category: "developer",
    Component: dynamic(
      () => import("@/features/tools/tool-name/Developer/PasswordGenerator")
    ),
    description: {
      en: "Generate strong, secure, and customizable passwords instantly. Perfect for developers, security tasks, and everyday use.",
      id: "Hasilkan password yang kuat, aman, dan dapat dikustomisasi secara instan. Cocok untuk developer, kebutuhan keamanan, maupun penggunaan sehari-hari.",
    },
    href: "/tools/password-generator",
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
    title: {
      en: "Password Generator",
      id: "Generator Password",
    },
  },
};

export const developerToolNames = Object.keys(
  developerRegistry
) as DeveloperToolName[];
