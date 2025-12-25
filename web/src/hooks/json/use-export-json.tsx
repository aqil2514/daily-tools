import { useLocale } from "next-intl";
import { toast } from "sonner";

export function useExportJson() {
  const locale = useLocale();

  function handleExportJSON<T>(data: T) {
    if (!data) {
      toast.error(
        locale === "en"
          ? "No data to be exported"
          : "Tidak ada data untuk diekspor"
      );
      return;
    }

    try {
      const json = JSON.stringify(data, null, 2);

      const blob = new Blob([json], {
        type: "application/json",
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "quiz-export.json";
      a.click();

      URL.revokeObjectURL(url);

      toast.success(locale === "en" ? "Export JSON success" :"JSON berhasil diekspor");
    } catch {
      toast.error( locale === "en" ? "Something error went export JSON" : "Gagal mengekspor JSON");
    }
  }

  return { handleExportJSON };
}
