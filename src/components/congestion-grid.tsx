import Link from "next/link";
import { Users } from "lucide-react";
import type { CongestionLevel, CongestionPlace } from "@/lib/mock-data";

const levelStyle: Record<
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

export function CongestionGrid({ places }: { places: CongestionPlace[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2.5 md:gap-3">
      {places.map((place) => {
        const style = levelStyle[place.level];

        return (
          <li key={place.id}>
            <Link
              href={`/crowd/${place.id}`}
              className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-3.5 transition-colors hover:border-primary/40"
            >
              <p className="truncate text-[14px] font-semibold leading-snug text-text md:text-[15px]">
                {place.name}
              </p>
              <span
                className={`inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-semibold ${style.wrap}`}
              >
                <Users size={13} className={style.icon} strokeWidth={2.4} />
                {place.level}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
