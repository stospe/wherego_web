"use client";

import { useState } from "react";
import { FILTER_CHIPS } from "@/lib/mock-data";

export function FilterChips() {
  const [active, setActive] = useState<string>(FILTER_CHIPS[0].id);

  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto">
      {FILTER_CHIPS.map((chip) => {
        const isActive = chip.id === active;

        return (
          <button
            key={chip.id}
            type="button"
            onClick={() => setActive(chip.id)}
            className={`h-9 shrink-0 rounded-full px-4 text-[13px] font-semibold transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "border border-border bg-chip-inactive-bg text-chip-inactive-text"
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}
