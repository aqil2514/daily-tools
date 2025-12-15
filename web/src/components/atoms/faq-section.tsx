import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ToolCard } from "../molecules/card/tool-card";
import { SubHeading } from "./subHeading";
import { MarkdownStyled } from "./markdown-styled";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <div className="mt-10">
      <ToolCard>
        <SubHeading className="mt-0 underline">FAQ Section</SubHeading>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <MarkdownStyled>{item.answer}</MarkdownStyled>

              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ToolCard>
    </div>
  );
}
