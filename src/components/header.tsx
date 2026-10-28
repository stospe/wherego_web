import { MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-3 px-4 pt-4">
      <div className="min-w-0">
        <h1 className="text-[22px] font-bold leading-tight tracking-tight text-text">
          어디갈까?
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-sm font-semibold text-text"
          aria-label="지역 선택"
        >
          <MapPin size={16} className="text-primary" strokeWidth={2.2} />
          서울
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
