import { Heart } from "lucide-react";
import { EventImage } from "@/components/event-image";
import { getFestivalImage } from "@/lib/image-policy";
import type { Festival } from "@/lib/mock-data";

export function FestivalCard({ festival }: { festival: Festival }) {
  return (
    <article className="w-[248px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-surface md:w-auto">
      <div className="relative aspect-video w-full">
        <EventImage
          src={getFestivalImage(festival)}
          alt={festival.title}
          sizes="(min-width: 1024px) 16vw, 248px"
        />
        <button
          type="button"
          aria-label="관심 행사"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#334155]"
        >
          <Heart size={16} strokeWidth={2} />
        </button>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="line-clamp-2 text-[14px] font-semibold leading-snug text-text md:text-[16px]">
          {festival.title}
        </h3>
        <p className="truncate text-[13px] font-normal text-secondary md:text-[14px]">
          {festival.location}
        </p>
        <p className="truncate text-[12px] font-normal text-secondary md:text-[13px]">
          일정 연동 예정
        </p>
      </div>
    </article>
  );
}

