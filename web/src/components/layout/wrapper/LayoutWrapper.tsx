"use client";

import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { ContentContainer } from "@/components/layout/container/content-container";
import { usePathname } from "@/i18n/navigation";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideSidebar = pathname === "/";

  return (
    <>
      <Header />

      <main
        className={
          hideSidebar
            ? "pt-20" // tanpa grid, tanpa sidebar
            : "grid grid-cols-[15%_auto] pt-20"
        }
      >
        {!hideSidebar && <Sidebar />}
        <ContentContainer>{children}</ContentContainer>
      </main>
    </>
  );
}
