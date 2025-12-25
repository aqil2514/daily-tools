"use client";

import { SampleDataComponent } from "@/components/organisms/sample-data-section";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
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
        onSelected={(e: string) => setValue(e)}
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
