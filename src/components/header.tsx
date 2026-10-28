import { Suspense } from "react";
import { MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DesktopNav } from "@/components/desktop-nav";

export function Header() {
  return (
    <header className="border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <div className="flex min-w-0 items-center gap-6">
          <h1 className="shrink-0 text-[24px] font-bold leading-tight text-text">
            어디갈까<span className="text-primary">?</span>
          </h1>
          <Suspense fallback={null}>
            <DesktopNav />
          </Suspense>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-[14px] font-semibold text-text"
            aria-label="지역 선택"
          >
            <MapPin size={16} className="text-primary" strokeWidth={2.2} />
            서울
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
