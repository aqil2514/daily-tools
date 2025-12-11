"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

export function CustomSidebarTrigger({ className }: Props) {
  const { toggleSidebar, open, openMobile } = useSidebar();

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const isOpen = isMobile ? openMobile : open;

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={toggleSidebar}
      className={cn(className)}
    >
      {isOpen ? <X /> : <Menu />}
    </Button>
  );
}
