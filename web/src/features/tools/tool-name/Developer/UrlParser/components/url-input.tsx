"use client";

import { SampleDataComponent } from "@/components/atoms/sample-data";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/tools/tool-card";
import { Dispatch, SetStateAction } from "react";
import { urlParserSamples } from "../data/sample-data";
import { useLocale } from "next-intl";
import { urlParserInputI18n } from "../i18n/input";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function UrlParserInput({ value, setValue }: Props) {
  const locale = useLocale();
  const t = urlParserInputI18n[locale];

  return (
    <ToolCard>
      <SampleDataComponent
        sampleData={urlParserSamples}
        setText={setValue}
      />

      <TextEditor
        title={t.title}
        text={value}
        setText={setValue}
        placeholder={t.placeholder}
      />
    </ToolCard>
  );
}
