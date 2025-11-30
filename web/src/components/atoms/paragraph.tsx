import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}
