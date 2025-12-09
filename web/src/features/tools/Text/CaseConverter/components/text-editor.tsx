import { SubHeading } from "@/components/atoms/subHeading";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

interface Props {
  text: string;
  setText: (state: string) => void;
}

export function TextEditor({ setText, text }: Props) {
  const t = useTranslations("tools-text.case-converter");
  return (
    <div>
      <SubHeading className="mt-0">{t("editor-title")}</SubHeading>
      <Textarea
        className="h-32"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t("editor-placeholder")}
      />
    </div>
  );
}
