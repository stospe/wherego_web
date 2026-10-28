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
            className="flex h-full min-h-[76px] items-center gap-3 rounded-2xl border border-border bg-surface p-3 transition-colors hover:border-primary/40"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={place.image}
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-text md:text-[14px]">
                {place.name}
              </p>
              <span
                className={`mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold md:text-[12px] ${levelStyle[place.level]}`}
              >
                <Users size={13} strokeWidth={2.2} />
                {place.level}
              </span>
            </div>
            <ChevronRight size={16} className="shrink-0 text-secondary" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
