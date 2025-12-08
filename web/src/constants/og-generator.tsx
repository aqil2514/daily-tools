/* eslint-disable @next/next/no-img-element */
import { readFile } from "fs/promises";
import { Locale } from "next-intl";
import { getLocale } from "next-intl/server";
import { ImageResponse } from "next/og";
import { join } from "path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface OgConfig {
  enDesc: string;
  idDesc: string;
  enTitle: string;
  idTitle: string;
}

const alt = "Flowtooly Open Graph Image";

export async function generateOg({
  enDesc,
  enTitle,
  idDesc,
  idTitle,
}: OgConfig) {
  const path = join(process.cwd(), "public", "logo", "main-logo.png");
  const logoData = await readFile(path);
  const logoSrc = Uint8Array.from(logoData).buffer;
  const locale = await getLocale();

  const titleMapper: Record<Locale, string> = {
    en: enTitle,
    id: idTitle,
  };

  const descMapper: Record<Locale, string> = {
    en: enDesc,
    id: idDesc,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fafafa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            border: "4px",
            borderStyle: "dashed",
            borderRadius: "100%",
            borderColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "10px 20px",
          }}
        >
          <img
            // @ts-expect-error Udah pasti salah
            src={logoSrc}
            alt={alt}
            width={150}
            height={150}
          />
        </div>

        {/* TITLE */}
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: "#111",
            display: "flex",
            marginBottom: 24,
          }}
        >
          {titleMapper[locale]} | Flowtooly
        </div>

        {/* DESCRIPTION */}
        <div
          style={{
            fontSize: 28,
            color: "#444",
            display: "flex",

            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {descMapper[locale]}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
