import { ToolCategory } from "@/@types/Tools";
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
import {
  Calculator,
  ImageIcon,
  FileText,
  QrCode,
  Code,
  Text,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const categoryTitleMapper: Record<ToolCategory, string> = {
  financial: "Financial",
  image: "Image",
  pdf: "PDF",
  qr: "QR",
  developer: "Developer",
  text: "Text",
  math: "Math",
};

const categoryIcons = {
  financial: Calculator,
  image: ImageIcon,
  pdf: FileText,
  qr: QrCode,
  developer: Code,
  text: Text,
};

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
            const Icon = categoryIcons[item.sectionCategory];

            return (
              <AccordionItem
                value={item.sectionCategory}
                key={item.sectionCategory}
              >
                <AccordionTrigger>
                  <div className="flex gap-1 items-center">
                    <Icon className="h-4 w-4 mr-2" />
                    <p>{categoryTitleMapper[item.sectionCategory]}</p>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pl-4 space-y-1">
                  {item.sectionItem
                    .sort((a, b) =>
                      a.title[locale].localeCompare(b.title[locale])
                    )
                    .map((tool, i) => (
                      <SidebarMenuButton
                        key={`${item.sectionCategory}-tool-${i}`}
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
