import Link from "next/link";
import { ChevronRight, Clock3, MapPin, Users } from "lucide-react";
import type { CongestionLevel, CongestionPlace } from "@/lib/mock-data";

const levelStyle: Record<CongestionLevel, string> = {
  여유: "bg-[#D1FAE5] text-[#059669] dark:bg-[#14352A] dark:text-[#34D399]",
  보통: "bg-[#FEF3C7] text-[#D97706] dark:bg-[#3F2E14] dark:text-[#FBBF24]",
  "약간 붐빔":
    "bg-[#FFEDD5] text-[#EA580C] dark:bg-[#43250F] dark:text-[#FB923C]",
  붐빔: "bg-[#FEE2E2] text-[#DC2626] dark:bg-[#3F1D1D] dark:text-[#F87171]",
};

export function CongestionGrid({ places }: { places: CongestionPlace[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
      {places.map((place) => (
        <li key={place.id}>
          <Link
            href={`/crowd/${place.id}`}
            className="flex h-full min-h-[74px] flex-col justify-between rounded-2xl border border-border bg-surface p-3 transition-colors hover:border-primary/40"
          >
            <div className="flex w-full min-w-0 items-center gap-1.5">
              <MapPin
                className="h-3.5 w-3.5 shrink-0 text-primary md:h-4 md:w-4"
                strokeWidth={2.2}
              />
              <p className="min-w-0 flex-1 truncate text-[13px] font-semibold tracking-[-0.02em] text-text md:text-[14px] md:tracking-normal">
                {place.name}
              </p>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-secondary md:h-4 md:w-4" />
            </div>

            <div className="mt-2 flex w-full items-center justify-between gap-1">
              <span
                className={`inline-flex whitespace-nowrap items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold md:gap-1 md:px-2 md:py-1 md:text-[12px] ${levelStyle[place.level]}`}
              >
                <Users className="h-[11px] w-[11px] md:h-[13px] md:w-[13px]" strokeWidth={2.2} />
                {place.level}
              </span>
              <span className="inline-flex min-w-0 items-center gap-0.5 truncate text-[10px] text-secondary md:text-[12px]">
                <Clock3 className="h-3 w-3 shrink-0" />
                {place.sampleTimeLabel}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
