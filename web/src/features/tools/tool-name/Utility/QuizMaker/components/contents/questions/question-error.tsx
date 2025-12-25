import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal } from "lucide-react";
import { useLocale } from "next-intl";

export function QuestionError({ quizErrors }: { quizErrors: string[] }) {
  const locale = useLocale();

  if (quizErrors.length === 0) return null;

  return (
    <Alert className="border-destructive/50 bg-destructive/5 text-destructive">
      <Terminal className="h-4 w-4" />

      <AlertTitle className="text-destructive font-semibold">
        {locale === "en" ? "Invalid Data" : "Data Tidak Valid"}
      </AlertTitle>

      <AlertDescription className="mt-3">
        <ScrollArea className="max-h-40 pr-3 w-full">
          <div className="space-y-1">
            {quizErrors.map((msg, i) => (
              <p key={i} className="text-sm text-destructive">
                • {msg}
              </p>
            ))}
          </div>
        </ScrollArea>
      </AlertDescription>
    </Alert>
  );
}
