"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";

interface Props {
  flags: string;
  setFlags: (flags: string) => void;
}

const FLAG_LIST = [
  { key: "g", label: "g — Global" },
  { key: "i", label: "i — Ignore Case" },
  { key: "m", label: "m — Multiline" },
  { key: "s", label: "s — DotAll" },
  { key: "u", label: "u — Unicode" },
  { key: "y", label: "y — Sticky" },
];

export function RegexFlagsSelector({ flags, setFlags }: Props) {
  const [open, setOpen] = useState(false);

  const toggleFlag = (flag: string) => {
    if (flags.includes(flag)) {
      setFlags(flags.replace(flag, ""));
    } else {
      setFlags(flags + flag);
    }
  };

  const isActive = (flag: string) => flags.includes(flag);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 w-full">
          Flags: {flags || "None"}
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-2 space-y-1">
        {FLAG_LIST.map((f) => (
          <Button
            key={f.key}
            variant={isActive(f.key) ? "default" : "outline"}
            onClick={() => toggleFlag(f.key)}
            className="w-full justify-between"
          >
            {f.label}
            {isActive(f.key) && <Check size={16} />}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
