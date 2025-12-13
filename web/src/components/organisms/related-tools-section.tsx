import { SubHeading } from "@/components/atoms/subHeading";
import { ToolCard } from "@/components/tools/tool-card";
import { Locale } from "next-intl";
import { toolsRegistry } from "@/features/tools/registry";
import { Link } from "@/i18n/navigation";
import { ToolName } from "@/@types/Tools";

interface Props {
  toolsName?: ToolName[];
  locale: Locale;
}

export function RelatedToolsSection({ toolsName, locale }: Props) {
  if (!toolsName?.length) return null;

  const tools = toolsName.map((name) => toolsRegistry[name]).filter(Boolean);

  return (
    <section className="mt-12">
      <SubHeading className="mb-4">
        {locale === "en" ? "Related Tools" : "Alat yang Berkaitan"}
      </SubHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link key={tool.title[locale]} href={tool.href}>
            <ToolCard>
              <div className="space-y-2">
                <h3 className="font-semibold leading-snug">
                  {tool.title[locale]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description![locale]}
                </p>
              </div>
            </ToolCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
