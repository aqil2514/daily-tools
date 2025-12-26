import { Button } from "@/components/ui/button";
import { useQuizPlayer } from "../../store/provider";
import { useQuizRuntimeContext } from "../../store/runtime-provider";
import { useLocale } from "next-intl";

export function ResultActions() {
  const { setData } = useQuizPlayer();
  const runtime = useQuizRuntimeContext();
  const locale = useLocale()

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" onClick={runtime.reset}>
          {locale === "en" ? "Retry Quiz" : "Ulangi Quiz"}
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            runtime.reset();
            setData(null);
          }}
        >
          {locale === "en" ? "Change Quiz Data" :"Ganti Data Quiz"}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        {locale === "en" ? "Answer is depend on quiz configuration" : "Jawaban ditampilkan sesuai konfigurasi quiz."}
      </p>
    </>
  );
}
