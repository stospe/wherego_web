"use client";

import { useState } from "react";
import { FILTER_CHIPS } from "@/lib/mock-data";

export function FilterChips() {
  const [active, setActive] = useState<string>(FILTER_CHIPS[0]);

  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto px-4">
      {FILTER_CHIPS.map((chip) => {
        const isActive = chip === active;
        return (
          <button
            key={chip}
            type="button"
            onClick={() => setActive(chip)}
            className={`h-9 shrink-0 rounded-full px-4 text-[13px] font-semibold transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "border border-border bg-chip-inactive-bg text-chip-inactive-text"
            }`}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}
