import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100",
        className
      )}
    >
      {children}
    </h1>
  );
}
