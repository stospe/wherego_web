import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";
import type { CongestionLevel, CongestionPlace } from "@/lib/mock-data";

const badgeStyles: Record<
  CongestionLevel,
  { wrap: string; icon: string }
> = {
  붐빔: {
    wrap: "bg-badge-crowded-bg text-status-crowded",
    icon: "text-status-crowded",
  },
  보통: {
    wrap: "bg-badge-normal-bg text-status-normal",
    icon: "text-status-normal",
  },
  여유: {
    wrap: "bg-badge-relaxed-bg text-status-relaxed",
    icon: "text-status-relaxed",
  },
};

export function CongestionList({ places }: { places: CongestionPlace[] }) {
  return (
    <ul className="space-y-3 px-4">
      {places.map((place) => {
        const style = badgeStyles[place.level];
        return (
          <li key={place.id}>
            <Link
              href={`/crowd/${place.id}`}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4"
            >
              <div className="min-w-0">
                <p className="truncate text-[16px] font-semibold text-text">
                  {place.name}
                </p>
                <p className="mt-1 text-[12px] text-secondary">
                  현재 혼잡도 · {place.updatedAt}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-semibold ${style.wrap}`}
                >
                  <Users size={12} className={style.icon} strokeWidth={2.4} />
                  {place.level}
                </span>
                <ChevronRight size={18} className="text-secondary" />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
