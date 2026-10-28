import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { CongestionPlace } from "@/lib/mock-data";

export function CongestionGrid({ places }: { places: CongestionPlace[] }) {
  return (
    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {places.map((place) => (
        <li key={place.id}>
          <Link
            href={`/crowd/${place.id}`}
            className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-primary/40"
          >
            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold text-text">
                {place.name}
              </p>
              <p className="mt-1 text-[12px] text-secondary">데이터 준비 중</p>
            </div>
            <ChevronRight size={18} className="shrink-0 text-secondary" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
