import { Link } from "@/i18n/navigation";
import { SearchableTool } from "@/features/search/types";
import { Badge } from "@/components/ui/badge";
import { ToolCard } from "@/components/molecules/card/tool-card";
import { CATEGORY_REGISTRY } from "@/registry/categories.registry";
import { ToolCategoryName } from "@/@types/tools/index";
import { useLocale, useTranslations } from "next-intl";

interface SearchResultsProps {
  groupedResults: Record<string, SearchableTool[]>;
}

export function SearchResults({ groupedResults }: SearchResultsProps) {
  const categories = Object.entries(groupedResults);
  const locale = useLocale();
  const t = useTranslations("SearchPage")

  if (categories.length === 0) {
    return (
      <ToolCard>
        <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
         {t("not-found")}
        </div>
      </ToolCard>
    );
  }

  return (
    <ToolCard>
      <div className="space-y-10">
        {categories.map(([category, tools]) => {
          const title = CATEGORY_REGISTRY[category as ToolCategoryName].title[locale];
          return (
            <div key={category} className="space-y-4">
              {/* Category Header */}
              <h2 className="text-lg font-semibold capitalize">
                {locale === "en" ? `${title} Tools` : `Alat ${title}`}
              </h2>

              {/* Tool List */}
              <div className="grid gap-4 sm:grid-cols-2">
                {tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="group rounded-lg border p-4 transition hover:bg-muted/50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="font-medium leading-tight group-hover:underline">
                          {tool.title}
                        </h3>
                        {tool.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {tool.description}
                          </p>
                        )}
                      </div>

                      <Badge variant="secondary" className="capitalize">
                        {category}
                      </Badge>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </ToolCard>
  );
}
