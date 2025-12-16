import { useLocale } from "next-intl";
import { sidebarSections } from "@/registry/sidebar.registry";
import { CATEGORY_REGISTRY } from "@/registry/categories.registry";
import { useRouter } from "@/i18n/navigation";

export function CategoryList() {
  const locale = useLocale();
  const router = useRouter()

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sidebarSections.map((item) => {
          // const Icon = categoryIcons[item.sectionCategory];
          const Icon = CATEGORY_REGISTRY[item.sectionCategory].Icon;
          const title = CATEGORY_REGISTRY[item.sectionCategory].title[locale];
          const sectionTitle =
            locale === "en" ? `${title} Tools` : `Alat ${title}`;

          return (
            <button
              key={item.sectionCategory}
              className={`p-6 rounded-2xl border bg-white text-left cursor-pointer transition-all
                ${"shadow-sm hover:shadow-md hover:border-slate-300"}
              `}
              onClick={() => router.push(`/search?category=${item.sectionCategory}`)}
            >
              <div className="flex items-center gap-3 mb-2">
                {Icon && <Icon className={`h-6 w-6 ${"text-blue-500"}`} />}

                <h3 className={`text-lg font-semibold ${"text-slate-800"}`}>
                  {sectionTitle}
                </h3>
              </div>

              <p className={`text-sm ${"text-slate-500"}`}>
                {item.sectionItem.length} tools
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
