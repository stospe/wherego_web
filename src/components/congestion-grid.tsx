import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import type { CongestionLevel, CongestionPlace } from "@/lib/mock-data";

const levelStyle: Record<CongestionLevel, string> = {
  붐빔: "text-status-crowded",
  보통: "text-status-normal",
  여유: "text-status-relaxed",
};

export function CongestionGrid({ places }: { places: CongestionPlace[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-6">
      {places.map((place) => (
        <li key={place.id}>
          <Link
            href={`/crowd/${place.id}`}
            className="flex h-full items-center gap-3 rounded-2xl border border-border bg-surface p-3 transition-colors hover:border-primary/40"
          >
            <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-xl xl:block">
              <Image
                src={place.image}
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[16px] font-semibold text-text">
                {place.name}
              </p>
              <span
                className={`mt-1.5 inline-flex items-center gap-1.5 text-[12px] font-normal ${levelStyle[place.level]}`}
              >
                <Users size={14} strokeWidth={2} />
                {place.level}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
