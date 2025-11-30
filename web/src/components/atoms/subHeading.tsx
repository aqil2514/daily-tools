import { cn } from "@/lib/utils";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <h2
      className={cn(
        "text-lg font-medium text-slate-700 dark:text-slate-300 mt-6 mb-2",
        className
      )}
    >
      {children}
    </h2>
  );
}
