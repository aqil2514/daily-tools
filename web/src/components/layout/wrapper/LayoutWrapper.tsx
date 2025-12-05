"use client";

import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { ContentContainer } from "@/components/layout/container/content-container";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideSidebar = pathname === "/";

  return (
    <>
      <Header />

      <main
        className={cn(
          "bg-zinc-50 dark:bg-black",
          hideSidebar ? "pt-20" : "grid grid-cols-[15%_auto] pt-20"
        )}
      >
        {!hideSidebar && <Sidebar />}
        <ContentContainer>{children}</ContentContainer>
      </main>
    </>
  );
}
