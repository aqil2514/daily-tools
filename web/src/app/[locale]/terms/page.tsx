import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import { canonicalUrl, getHreflangs } from "@/constants/seo";
import path from "node:path";
import fs from "fs";
import { MDRender } from "@/components/templates/MdRender";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isId = locale === "id";

  return {
    title: isId
      ? "Syarat & Ketentuan | Flowtooly"
      : "Terms of Service | Flowtooly",

    description: isId
      ? "Syarat dan ketentuan penggunaan Flowtooly yang mengatur penggunaan layanan, hak, dan kewajiban pengguna."
      : "Flowtooly terms of service outlining the rules, rights, and responsibilities when using our tools.",

    alternates: {
      canonical: canonicalUrl(locale, "/terms"),
      languages: getHreflangs("/terms"),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TermsPage() {
  const locale = await getLocale();
  const filePath = path.join(
    process.cwd(),
    "content/terms",
    `terms.${locale}.md`
  );

  const content = fs.readFileSync(filePath, "utf-8");

  return <MDRender content={content} />;
}
