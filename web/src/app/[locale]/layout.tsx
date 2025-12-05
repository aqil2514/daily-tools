import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout/wrapper/LayoutWrapper";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { getLocalizedMetadata } from "@/utils/localization/getLocalizedMetadata";


export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const metadata = await getLocalizedMetadata("global", locale)
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
      <body className={` antialiased`}>
        <NextIntlClientProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
