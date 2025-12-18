import { cn } from "@/lib/utils";
import { Heading } from "../atoms/heading";
import { Paragraph } from "../atoms/text/paragraph";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      <Heading>{title}</Heading>
      {description && (
        <Paragraph className="mt-1">{description}</Paragraph>
      )}
    </div>
  );
}
