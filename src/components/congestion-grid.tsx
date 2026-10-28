import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";
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
            className="flex h-full min-h-[64px] items-center gap-1.5 rounded-2xl border border-border bg-surface p-1.5 transition-colors hover:border-primary/40 md:min-h-[76px] md:gap-3 md:p-3"
          >
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[9px] md:h-12 md:w-12 md:rounded-xl">
              <Image
                src={place.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 767px) 36px, 48px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold tracking-[-0.04em] text-text md:text-[14px] md:tracking-normal">
                {place.name}
              </p>
              <span
                className={`mt-1 inline-flex whitespace-nowrap items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold md:mt-1.5 md:gap-1 md:px-2 md:py-1 md:text-[12px] ${levelStyle[place.level]}`}
              >
                <Users className="h-[11px] w-[11px] md:h-[13px] md:w-[13px]" strokeWidth={2.2} />
                {place.level}
              </span>
            </div>
            <ChevronRight className="h-3 w-3 shrink-0 text-secondary md:h-4 md:w-4" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
