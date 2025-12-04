"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ShortcutHint() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Keyboard className="h-4 w-4" />
          Shortcuts
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-0">
        <Alert className="bg-blue-50 border-blue-200 rounded-md">
          <Keyboard className="h-4 w-4" />
          <AlertTitle className="font-semibold text-blue-700">
            Keyboard Shortcuts
          </AlertTitle>
          <AlertDescription className="text-sm text-blue-700 space-y-1">
            <p><strong>↑</strong> Increase Qty</p>
            <p><strong>↓</strong> Decrease Qty</p>
            <p><strong>Tab</strong> Next field</p>
            <p><strong>Shift + Tab</strong> Previous field</p>
          </AlertDescription>
        </Alert>
      </PopoverContent>
    </Popover>
  );
}
