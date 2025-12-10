import { SampleDataComponent } from "@/components/atoms/sample-data";
import { TextEditor } from "@/components/atoms/text-editor";
import { ToolCard } from "@/components/tools/tool-card";
import { jwtSampleData } from "../data/sample-data";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function JWTInput({ setText, text }: Props) {
  const t = useTranslations("tools-developer.jwt-decoder");

  return (
    <ToolCard>
      <SampleDataComponent setText={setText} sampleData={jwtSampleData} />
      <TextEditor setText={setText} text={text} title={t("input-title")} />
    </ToolCard>
  );
}
