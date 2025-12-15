import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { sidebarSections } from "@/features/tools/registry";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CATEGORY_REGISTRY } from "@/registry/categories/sidebar";

export function CategoryGroup() {
  const locale = useLocale();
  const pathname = usePathname();

  const activeSection = sidebarSections.find((s) =>
    s.sectionItem.some((tool) => tool.href === pathname)
  );

  const currentCategory = activeSection?.sectionCategory ?? "";

  return (
    <ScrollArea className="h-72">
      <SidebarGroup>
        <SidebarGroupLabel>Category</SidebarGroupLabel>

        <Accordion type="single" collapsible defaultValue={currentCategory}>
          {sidebarSections.map((item) => {
            const category =
              CATEGORY_REGISTRY[item.sectionCategory];

            const Icon = category.Icon;

            return (
              <AccordionItem
                key={category.name}
                value={category.name}
              >
                <AccordionTrigger>
                  <div className="flex gap-1 items-center">
                    <Icon className="h-4 w-4 mr-2" />
                    <p>{category.title[locale]}</p>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-4 space-y-1">
                  {item.sectionItem
                    .sort((a, b) =>
                      a.title[locale].localeCompare(b.title[locale])
                    )
                    .map((tool) => (
                      <SidebarMenuButton
                        key={tool.href}
                        asChild
                        isActive={tool.href === pathname}
                      >
                        <Link href={tool.href}>
                          {tool.title[locale]}
                        </Link>
                      </SidebarMenuButton>
                    ))}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </SidebarGroup>
    </ScrollArea>
  );
}
