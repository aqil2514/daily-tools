import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

interface Props {
  isFirst: boolean;
  isLast: boolean;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export function QuestionNavigation({
  isFirst,
  isLast,
  onPrev,
  onNext,
  onFinish,
}: Props) {
  const locale = useLocale()
  return (
    <div className="flex justify-between">
      <Button variant="outline" disabled={isFirst} onClick={onPrev}>
        {locale === "en" ? "Previous" : "Sebelumnya"}
      </Button>

      {!isLast ? (
        <Button onClick={onNext}>{ locale === "en" ? "Next" : "Berikutnya"}</Button>
      ) : (
        <Button onClick={onFinish}>{locale === "en" ? "Finish" : "Selesai"}</Button>
      )}
    </div>
  );
}
