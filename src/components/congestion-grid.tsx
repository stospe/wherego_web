import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { CongestionPlace } from "@/lib/mock-data";

export function CongestionGrid({ places }: { places: CongestionPlace[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
      {places.map((place) => (
        <li key={place.id}>
          <Link
            href={`/crowd/${place.id}`}
            className="flex h-full items-center gap-3 rounded-2xl border border-border bg-surface p-3 transition-colors hover:border-primary/40"
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
              <p className="mt-1 text-[12px] font-normal text-secondary md:text-[13px]">
                데이터 준비 중
              </p>
            </div>
            <ChevronRight size={16} className="shrink-0 text-secondary" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
