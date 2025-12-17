"use client";

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
import { useEffect, useMemo, useState } from "react";

export function CategoryGroup() {
  const locale = useLocale();
  const pathname = usePathname();

  /**
   * 🔍 Kategori aktif dari URL
   */
  const activeCategory = useMemo(() => {
    return sidebarSections.find((section) =>
      section.sectionItem.some((tool) => tool.href === pathname)
    )?.sectionCategory;
  }, [pathname]);

  /**
   * 🧠 State accordion yang bisa dikontrol user
   */
  const [openCategory, setOpenCategory] = useState<string | undefined>(
    activeCategory
  );

  /**
   * 🔄 Sync saat navigasi halaman berubah
   */
  useEffect(() => {
    if (activeCategory) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenCategory(activeCategory);
    }
  }, [activeCategory]);

  return (
    <ScrollArea className="max-h-[calc(100vh-260px)]">
      <SidebarGroup>
        <SidebarGroupLabel>Category</SidebarGroupLabel>

        <Accordion
          type="single"
          collapsible
          value={openCategory}
          onValueChange={setOpenCategory}
          className="space-y-1"
        >
          {sidebarSections.map((section) => {
            const category = CATEGORY_REGISTRY[section.sectionCategory];
            const Icon = category.Icon;

            const sortedTools = [...section.sectionItem].sort((a, b) =>
              a.title[locale].localeCompare(b.title[locale])
            );

            return (
              <AccordionItem
                key={category.name}
                value={category.name}
                className="border-none"
              >
                <AccordionTrigger className="px-2 py-2 rounded-md hover:bg-muted">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{category.title[locale]}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-3 space-y-1">
                  {sortedTools.map((tool) => {
                    const isActive = tool.href === pathname;

                    return (
                      <SidebarMenuButton
                        key={tool.href}
                        asChild
                        isActive={isActive}
                      >
                        <Link
                          href={tool.href}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {tool.title[locale]}
                        </Link>
                      </SidebarMenuButton>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </SidebarGroup>
    </ScrollArea>
  );
}
