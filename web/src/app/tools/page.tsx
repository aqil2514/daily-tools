import ToolsTemplate from "@/features/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools – Flowtooly",
  description:
    "Browse all Flowtooly tools including PDF utilities, image tools, financial tools, QR generators, and more. Fast, free, and easy-to-use online utilities.",
  keywords: [
    "online tools",
    "free tools",
    "pdf tools",
    "image tools",
    "qr tools",
    "financial tools",
    "utilities",
    "Flowtooly",
  ],
};

export default function ToolsPage() {
  return <ToolsTemplate />;
}
