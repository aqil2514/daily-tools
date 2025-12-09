import { SubHeading } from "@/components/atoms/subHeading";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useWordCounter } from "../store/provider";

export function TextEditor() {
  const { setText, text } = useWordCounter();
  const t = useTranslations("tools-text.word-counter");
  return (
    <div className="space-y-4">
      <SubHeading>{t("text-editor-title")}</SubHeading>
      <Textarea
        className="h-96"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t("text-editor-placeholder")}
      />
    </div>
  );
}
