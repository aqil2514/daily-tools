import { useLocale } from "next-intl";
import { sidebarSections } from "../registry";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (state: string) => void;
}

export function CategoryContent({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const locale = useLocale();

  if (!selectedCategory) return null;

  const tools = sidebarSections.find(
    (item) => item.sectionCategory === selectedCategory
  )?.sectionItem;

  if (!tools) {
    return (
      <div className="px-4 py-8 text-slate-500 text-center">
        Tools tidak ada
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 space-y-4">
      <div className="flex gap-4">
        <h2 className="text-xl font-semibold text-slate-800 capitalize">
          {selectedCategory} Tools
        </h2>

        <Button variant={"outline"} onClick={() => setSelectedCategory("")}>
          Reset
        </Button>
      </div>

      {/* Tools Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
          mt-2
        "
      >
        {tools.map((tool, i) => (
          <Link key={`tool-${i + 1}`} href={tool.href}>
            <div
              className="
              p-5 
              border 
              rounded-2xl 
              bg-white 
              shadow-sm 
              hover:shadow-md 
              hover:border-slate-300 
              transition
              cursor-pointer
            "
            >
              <h3 className="text-lg font-medium text-slate-900">
                {tool.title[locale]}
              </h3>

              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                {tool.description![locale]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
