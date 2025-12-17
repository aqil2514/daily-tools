import { getLocale, } from "next-intl/server";
import { Metadata } from "next";
import { canonicalUrl } from "@/constants/seo";
import path from "node:path";
import fs from "fs";
import { MDRender } from "@/components/templates/MdRender";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isId = locale === "id";

  return {
    title: isId
      ? "Kebijakan Privasi | Flowtooly"
      : "Privacy Policy | Flowtooly",

    description: isId
      ? "Kebijakan privasi Flowtooly yang menjelaskan bagaimana kami menangani data pengguna dan menjaga privasi Anda."
      : "Flowtooly privacy policy explaining how we handle user data and protect your privacy.",

    alternates: {
      canonical: canonicalUrl(locale, "/privacy"),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  const filePath = path.join(
    process.cwd(),
    "content/privacy",
    `privacy.${locale}.md`
  );

  const content = fs.readFileSync(filePath, "utf-8");

  return <MDRender content={content} />;
}
