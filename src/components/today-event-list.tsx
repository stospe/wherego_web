import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, Heart } from "lucide-react";
import type { Festival } from "@/lib/mock-data";

export function TodayEventList({ events }: { events: Festival[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <li key={event.id}>
          <Link
            href={`/festivals/${event.id}`}
            className="flex h-full items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/40"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-border">
              <Image
                src={event.image}
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex min-w-0 items-center gap-2">
                <h3 className="truncate text-[14px] font-semibold text-text md:text-[16px]">
                  {event.title}
                </h3>
                {event.tags.includes("진행중") ? (
                  <span className="shrink-0 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[12px] font-semibold text-[#16A34A] dark:bg-[#14352a] dark:text-[#4ADE80]">
                    진행중
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-[13px] font-normal text-secondary md:text-[14px]">
                {event.location}
              </p>
              <p className="mt-1 flex items-center gap-1 text-[12px] font-normal text-secondary md:text-[13px]">
                <CalendarDays size={12} strokeWidth={2} className="shrink-0" />
                <span className="truncate">{event.dateRange}</span>
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

