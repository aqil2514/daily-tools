import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner"

import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { getLocalizedMetadata } from "@/utils/localization/getLocalizedMetadata";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { LayoutWrapper } from "@/components/layout/wrapper/LayoutWrapper";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const metadata = await getLocalizedMetadata("global", locale);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={` antialiased bg-zinc-50 dark:bg-black`}>
        <NextIntlClientProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <Header />
              <LayoutWrapper>{children}</LayoutWrapper>
            </main>
            <Toaster richColors position="top-center" />
          </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
