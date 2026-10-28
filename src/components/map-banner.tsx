import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";

export function MapBanner() {
  return (
    <Link
      href="/map"
      className="flex items-center gap-3 overflow-hidden rounded-2xl border border-border bg-map-banner-bg p-4 transition-colors hover:border-primary/40 md:p-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
        <MapPinned size={22} strokeWidth={2.2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold text-text md:text-[16px]">
          지도에서 한눈에 보기
        </p>
        <p className="mt-0.5 text-[12px] text-secondary md:text-[13px]">
          주변 축제와 혼잡도를 지도 화면에서 탐색
        </p>
      </div>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
        <ArrowUpRight size={18} strokeWidth={2.3} />
      </span>
    </Link>
  );
}
