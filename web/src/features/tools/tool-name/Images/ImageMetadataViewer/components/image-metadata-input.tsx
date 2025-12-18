"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { SourceSelection } from "@/components/molecules/source-selection-v2";
import { useImageLoader } from "@/hooks/use-image-loader";

import { i18nImageMetadataInput } from "../i18n/image-metadata-input";
import { Tags } from "exifreader";
import { Dispatch, SetStateAction } from "react";

interface Props {
  meta: {
    file: File | null;
    setFile: (file: File | null) => void;
    loadMetadata: () => void;
    loading: boolean;
    data: Tags | null;
    setData: Dispatch<SetStateAction<Tags | null>>;
  };
  empty?: boolean;
}

export function ImageMetadataInput({ meta, empty }: Props) {
  const locale = useLocale();
  const t = i18nImageMetadataInput[locale];
  const { urlToImage } = useImageLoader();

  if (empty) {
    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">{t.title}</h2>
          <p className="text-sm text-muted-foreground">{t.description}</p>
        </div>

        <SourceSelection
          onFilesSelected={(files) => {
            if (!files?.length) return;
            meta.setFile(files[0]);
          }}
          onSelectImages={async (url) => {
            const file = await urlToImage(url[0]);
            meta.setFile(file);
          }}
        />
      </div>
    );
  }

  if (!meta.file) return null;

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-lg border bg-muted">
        <Image
          src={URL.createObjectURL(meta.file)}
          alt={t.previewAlt}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Button onClick={meta.loadMetadata} disabled={meta.loading}>
            {meta.loading ? t.buttons.loading : t.buttons.load}
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              meta.setFile(null);
              meta.setData(null);
            }}
          >
            {t.buttons.reset}
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          {t.fileLabel}: <span className="font-medium">{meta.file.name}</span>
        </div>
      </div>
    </div>
  );
}
