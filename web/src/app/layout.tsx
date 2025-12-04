import "./globals.css";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { ContentContainer } from "@/components/layout/container/content-container";
import { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout/wrapper/LayoutWrapper";

export const metadata: Metadata = {
  title: "Flowtooly – Free Online Tools for Productivity",
  description:
    "Flowtooly offers powerful online tools for files, images, PDFs, finance, QR generation, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
