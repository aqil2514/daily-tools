"use client";
import { ToolCard } from "@/components/tools/tool-card";
import { QRPreview } from "./qr-preview";
import { QRData } from "./qr-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QROptions } from "./options";
import { useLocale } from "next-intl";
import { FAQSection } from "@/components/atoms/faq-section";
import { qrFAQ_en, qrFAQ_id } from "../i18n/faq";
import { QRGeneratorProvider } from "../store/provider";

export function QRGenerator() {
  return (
    <QRGeneratorProvider>
      <InnerTemplate />
    </QRGeneratorProvider>
  );
}

const InnerTemplate = () => {
  const locale = useLocale();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ToolCard>
          <Tabs defaultValue="data">
            <TabsList>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="options">Options</TabsTrigger>
            </TabsList>
            <TabsContent value="data">
              <QRData />
            </TabsContent>
            <TabsContent value="options">
              <QROptions />
            </TabsContent>
          </Tabs>
        </ToolCard>
        <ToolCard>
          <QRPreview />
        </ToolCard>
      </div>

      <FAQSection items={locale === "en" ? qrFAQ_en : qrFAQ_id} />
    </div>
  );
};
