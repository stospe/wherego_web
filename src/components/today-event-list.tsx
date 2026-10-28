import Link from "next/link";
import { CalendarDays, ChevronRight, Heart } from "lucide-react";
import { EventImage } from "@/components/event-image";
import { getFestivalImage } from "@/lib/image-policy";
import type { Festival } from "@/lib/mock-data";

export function TodayEventList({ events }: { events: Festival[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {events.map((event) => (
        <li key={event.id}>
          <Link
            href={`/festivals/${event.id}`}
            className="flex h-full items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/40"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-border">
              <EventImage
                src={getFestivalImage(event)}
                alt={`${event.title} 대표 이미지`}
                sizes="64px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[14px] font-semibold text-text md:text-[16px]">
                {event.title}
              </h3>
              <p className="mt-1 text-[13px] font-normal text-secondary md:text-[14px]">
                {event.location}
              </p>
              <p className="mt-1 flex items-center gap-1 text-[12px] font-normal text-secondary md:text-[13px]">
                <CalendarDays size={12} strokeWidth={2} className="shrink-0" />
                <span className="truncate">일정 연동 예정</span>
              </p>
            </div>
            <Heart size={18} strokeWidth={2} className="shrink-0 text-secondary" />
            <ChevronRight size={18} strokeWidth={2} className="shrink-0 text-secondary" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

