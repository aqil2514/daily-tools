import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { sidebarSections } from "./registry";
import { useTranslations } from "next-intl";

export default function ToolsTemplate() {
  const t = useTranslations();

  return (
    <>
      <div className="space-y-4 pb-20">
        {/* Header */}
        <div>
          <h1 className="text-slate-800 text-3xl font-semibold">
            {t("tools.title")}
          </h1>
          <p className="text-slate-500 text-lg">{t("tools.subtitle")}</p>
        </div>

        {/* Tools Accordion */}
        <div className="space-y-3">
          {sidebarSections.map((list, i) => (
            <Accordion
              type="single"
              key={`tools-list-${i + 1}`}
              collapsible
              className="border rounded-xl bg-white shadow-sm"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4 text-lg font-medium">
                  {t(list.sectionTitle)}
                </AccordionTrigger>

                <AccordionContent className="px-3 pb-4 space-y-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {list.sectionItem.map((item, i) => (
                    <Link
                      href={item.href}
                      key={`${list.sectionTitle}-list-${i + 1}`}
                      className="block"
                    >
                      <Card className="hover:bg-slate-50 transition border border-slate-200">
                        <CardContent className="p-4">
                          <h3 className="text-slate-800 font-semibold text-base">
                            {item.title}
                          </h3>
                          <p className="text-slate-500 text-sm mt-1">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
