// src/features/tools/registry/qrRegistry.ts

import { QRToolName, ToolRegistryItem } from "@/@types/Tools";
import dynamic from "next/dynamic";

export const qrRegistry: Record<QRToolName, ToolRegistryItem> = {
  "qr-generator": {
    Component: dynamic(() => import("@/features/tools/QR/QRGenerator")),
    href: "/tools/qr-generator",
    category: "qr",

    // --- Lokalisasi Langsung ---
    title: {
      en: "QR Generator",
      id: "Generator QR",
    },
    description: {
      en: "Create your own QR code instantly.",
      id: "Buat kode QR Anda sendiri secara instan.",
    },
    keywords: {
      en: [
        "qr generator",
        "generate qr code",
        "qr maker",
        "create qr",
        "qr code tool",
      ],
      id: [
        "generator qr",
        "buat kode qr",
        "pembuat qr",
        "buat qr",
        "alat kode qr",
      ],
    },
  },
};

export const qrToolNames = Object.keys(qrRegistry) as QRToolName[];
