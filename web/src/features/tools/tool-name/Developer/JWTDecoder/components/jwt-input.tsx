import { SampleDataComponent } from "@/components/atoms/sample-data";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { jwtSampleData } from "../data/sample-data";
import { useLocale } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { i18nJwtDecoder } from "../i18n";

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function JWTInput({ setText, text }: Props) {
  const locale = useLocale();

  return (
    <ToolCard>
      <SampleDataComponent setText={setText} sampleData={jwtSampleData} />
      <TextEditor
        setText={setText}
        text={text}
        title={i18nJwtDecoder[locale]["input-title"]}
      />
    </ToolCard>
  );
}
