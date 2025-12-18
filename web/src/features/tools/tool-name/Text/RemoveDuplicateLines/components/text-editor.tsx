import { SubHeading } from "@/components/atoms/text/subHeading";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useRemoveDuplicateLines } from "../store/provider";
import { SampleDataComponent } from "@/components/atoms/sample-data";
import { sampleData } from "../data/sample-data";

export function TextEditor() {
  const { text, setText } = useRemoveDuplicateLines();
  const t = useTranslations("tools-text.remove-duplicate-lines");
  return (
    <div>
      <SubHeading className="mt-0">{t("editor-title")}</SubHeading>
      <div className="space-y-2">
        <SampleDataComponent setText={setText} sampleData={sampleData} />
        <Textarea
          className="h-96"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("text-editor-placeholder")}
        />
      </div>
    </div>
  );
}
