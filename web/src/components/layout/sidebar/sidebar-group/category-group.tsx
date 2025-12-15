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
import { sidebarSections } from "@/registry/sidebar.registry";
import { CATEGORY_REGISTRY } from "@/registry/categories.registry";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          {sidebarSections.map((section) => {
            const category = CATEGORY_REGISTRY[section.sectionCategory];
            const Icon = category.Icon;

            return (
              <AccordionItem key={category.name} value={category.name}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{category.title[locale]}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-4 space-y-1">
                  {section.sectionItem
                    .sort((a, b) =>
                      a.title[locale].localeCompare(b.title[locale])
                    )
                    .map((tool) => (
                      <SidebarMenuButton
                        key={tool.href}
                        asChild
                        isActive={tool.href === pathname}
                      >
                        <Link href={tool.href}>{tool.title[locale]}</Link>
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
