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

  return (
    <Button
      variant={"ghost"}
      size={"icon-lg"}
      onClick={toggleSidebar}
      className={cn(className)}
    >
      {open || openMobile ? <X /> : <Menu />}
    </Button>
  );
}
