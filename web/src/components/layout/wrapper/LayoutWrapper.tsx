import { ScrollArea } from "@/components/ui/scroll-area";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea className="h-[calc(100vh-64px)] w-full">
      <div
        className="
          px-4 sm:px-6 lg:px-8 xl:px-12
          max-w-7xl mx-auto
          space-y-6 lg:space-y-8
          py-6
        "
      >
        {children}
      </div>
    </ScrollArea>
  );
}
