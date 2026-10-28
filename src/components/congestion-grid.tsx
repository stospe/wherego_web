import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import type { CongestionLevel, CongestionPlace } from "@/lib/mock-data";

const badgeStyles: Record<CongestionLevel, string> = {
  붐빔: "bg-badge-crowded-bg text-status-crowded",
  보통: "bg-badge-normal-bg text-status-normal",
  여유: "bg-badge-relaxed-bg text-status-relaxed",
};

export function CongestionGrid({ places }: { places: CongestionPlace[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {places.map((place) => (
        <li key={place.id}>
          <Link
            href={`/crowd/${place.id}`}
            className="flex h-full gap-2.5 rounded-2xl border border-border bg-surface p-2.5 transition-colors hover:border-primary/40"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={place.image}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold leading-snug text-text">
                {place.name}
              </p>
              <p className="mt-0.5 text-[10px] text-secondary">
                {place.sampleTimeLabel}
              </p>
              <span
                className={`mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeStyles[place.level]}`}
              >
                <Users size={11} strokeWidth={2.4} />
                {place.level}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
