import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { ToolsLottieAnimation } from "./tools-lottie";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";

export function Header({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (v: string) => void;
}) {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* LEFT */}
        <div>
          <h1 className="text-slate-900 text-4xl font-bold tracking-tight">
            {t("tools.title")}
          </h1>

          <p className="text-slate-500 text-lg mt-2">{t("tools.subtitle")}</p>

          <div className="flex flex-col gap-4">
            <div className="relative mt-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if(e.key === "Enter") router.push(`/search?q=${search}`)
                }}
                className="pl-10 h-12 text-base rounded-xl border-slate-300 focus-visible:ring-2 focus-visible:ring-slate-400"
                placeholder={t("tools.searchPlaceholder")}
              />
            </div>
            {search.length > 0 && (
              <Button
                variant={"outline"}
                onClick={() => router.push(`/search?q=${search}`)}
              >
                <span>{t("search.search-on-search-page")}</span>
              </Button>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <ToolsLottieAnimation />
        </div>
      </div>
    </div>
  );
}
