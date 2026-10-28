import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
import type { Festival } from "@/lib/mock-data";

export function TodayEventList({ events }: { events: Festival[] }) {
  return (
    <ul className="space-y-2.5">
      {events.map((event) => (
        <li key={event.id}>
          <Link
            href={`/festivals/${event.id}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-2.5 transition-colors hover:border-primary/40"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={event.image}
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <h3 className="truncate text-[14px] font-semibold text-text">
                  {event.title}
                </h3>
                {event.tags.slice(0, 1).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-1 text-[12px] text-secondary">
                {event.location} · {event.dateRange}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-secondary">
              <Heart size={16} strokeWidth={2} />
              <ChevronRight size={16} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
