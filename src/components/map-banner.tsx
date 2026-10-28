import Link from "next/link";
import { ChevronRight, MapPinned } from "lucide-react";

export function MapBanner() {
  return (
    <Link
      href="/map"
      className="flex items-center gap-3 rounded-2xl border border-border bg-map-banner-bg p-4 transition-colors hover:border-primary/40 md:p-5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white md:h-12 md:w-12">
        <MapPinned size={22} strokeWidth={2.2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold text-text md:text-[16px]">
          지도에서 한눈에 보기
        </p>
        <p className="mt-0.5 text-[12px] text-secondary md:text-[13px]">
          주변 축제와 혼잡도를 지도에서 확인
        </p>
      </div>
      <ChevronRight size={18} className="shrink-0 text-secondary" />
    </Link>
  );
}
