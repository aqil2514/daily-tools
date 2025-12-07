import { ToolRegistryItem } from "@/@types/Tools";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export function SearchResults({ tools }: { tools: ToolRegistryItem[] }) {
  const locale = useLocale();

  if (tools.length === 0) return null;

  return (
    <div className="px-4 md:px-8 lg:px-16 py-4 space-y-4">
      <h2 className="text-lg font-semibold text-slate-700">
        Search Results ({tools.length})
      </h2>

      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      "
      >
        {tools.map((tool, i) => (
          <Link href={tool.href} key={`search-tool-${i}`}>
            <div
              className="
              p-5 border rounded-2xl bg-white shadow-sm 
              hover:shadow-md hover:border-slate-300 
              transition cursor-pointer
            "
            >
              <h3 className="text-lg font-medium text-slate-900">
                {tool.title[locale]}
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                {tool.description[locale]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
