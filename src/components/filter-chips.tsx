"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FILTER_CHIPS } from "@/lib/mock-data";

export function FilterChips() {
  const [active, setActive] = useState<string>(FILTER_CHIPS[0].id);

  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto">
      {FILTER_CHIPS.map((chip) => {
        const isActive = chip.id === active;
        const hasMenu = "hasMenu" in chip && chip.hasMenu;

        return (
          <button
            key={chip.id}
            type="button"
            onClick={() => setActive(chip.id)}
            className={`inline-flex h-9 shrink-0 items-center gap-1 rounded-full px-4 text-[13px] font-semibold transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "border border-border bg-chip-inactive-bg text-chip-inactive-text"
            }`}
          >
            {chip.label}
            {hasMenu ? <ChevronDown size={14} strokeWidth={2.4} /> : null}
          </button>
        );
      })}
    </div>
  );
}
