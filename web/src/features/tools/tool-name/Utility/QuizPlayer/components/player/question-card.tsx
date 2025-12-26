import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLocale } from "next-intl";

interface Option {
  optionId: string;
  text: string;
}

interface Question {
  questionId: string;
  text: string;
  options: Option[];
}

interface Props {
  question: Question;
  currentIndex: number;
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
}

export function QuestionCard({
  question,
  currentIndex,
  selectedOptionId,
  onSelect,
}: Props) {
  const locale = useLocale();
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            {locale === "en" ? "Question" : "Pertanyaan"} {currentIndex + 1}
          </p>
          <h3 className="font-medium">{question.text}</h3>
        </div>

        <RadioGroup
          value={selectedOptionId ?? ""}
          onValueChange={onSelect}
          className="space-y-3"
        >
          {question.options.map((opt) => (
            <div
              key={opt.optionId}
              className="flex items-center space-x-2 rounded-md border p-3"
            >
              <RadioGroupItem value={opt.optionId} id={opt.optionId} />
              <Label htmlFor={opt.optionId} className="flex-1 cursor-pointer">
                {opt.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
