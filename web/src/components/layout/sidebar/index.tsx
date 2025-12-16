"use client";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { fontLobster } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./switch-changer";
import { MainGroup } from "./sidebar-group/main-group";
import { CategoryGroup } from "./sidebar-group/category-group";
import { usePathname } from "@/i18n/navigation";

export default function AppSidebar() {
  const pathname = usePathname();

  if (pathname === "/") return null;
  return (
    <Sidebar>
      <SidebarHeader>
        <p
          className={cn(
            fontLobster.className,
            "text-2xl lg:text-4xl font-semibold text-center pt-6 text-slate-800"
          )}
        >
          FlowTooly
        </p>
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <MainGroup />
        <Separator />
        <CategoryGroup />
        <Separator />
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        <LocaleSwitcher showLabel />
      </SidebarFooter>
    </Sidebar>
  );
}
