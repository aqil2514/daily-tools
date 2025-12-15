import { useLocale } from "next-intl";
import { sidebarSections } from "@/registry/sidebar.registry";
import { CATEGORY_REGISTRY } from "@/registry/categories.registry";

export function CategoryList({
  onSelect,
  selectedCategory,
}: {
  onSelect: (category: string) => void;
  selectedCategory: string;
}) {
  const locale = useLocale();

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sidebarSections.map((item) => {
          // const Icon = categoryIcons[item.sectionCategory];
          const Icon = CATEGORY_REGISTRY[item.sectionCategory].Icon;
          const title = CATEGORY_REGISTRY[item.sectionCategory].title[locale];
          const sectionTitle =
            locale === "en" ? `${title} Tools` : `Alat ${title}`;
          const isActive = selectedCategory === item.sectionCategory;

          return (
            <button
              key={item.sectionCategory}
              onClick={() => onSelect(item.sectionCategory)}
              className={`p-6 rounded-2xl border bg-white text-left cursor-pointer transition-all
                ${
                  isActive
                    ? "border-blue-500 shadow-md bg-blue-50"
                    : "shadow-sm hover:shadow-md hover:border-slate-300"
                }
              `}
            >
              <div className="flex items-center gap-3 mb-2">
                {Icon && (
                  <Icon
                    className={`h-6 w-6 ${
                      isActive ? "text-blue-600" : "text-blue-500"
                    }`}
                  />
                )}

                <h3
                  className={`text-lg font-semibold ${
                    isActive ? "text-blue-700" : "text-slate-800"
                  }`}
                >
                  {sectionTitle}
                </h3>
              </div>

              <p
                className={`text-sm ${
                  isActive ? "text-blue-600" : "text-slate-500"
                }`}
              >
                {item.sectionItem.length} tools
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
