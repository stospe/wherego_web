import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

export function MapBanner() {
  return (
    <Link
      href="/map"
      className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#bfdbfe] bg-gradient-to-r from-[#eff6ff] to-[#dbeafe] p-4 dark:border-[#263b5b] dark:from-[#111c32] dark:to-[#172554]"
    >
      <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border-[24px] border-white/35 dark:border-white/5" />
      <div className="absolute right-20 top-8 h-3 w-3 rounded-full bg-primary/30" />
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
        <MapPinned size={22} strokeWidth={2.2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[14px] font-semibold text-text md:text-[16px]">
          지도에서 한눈에 보기
        </p>
        <p className="mt-1 text-[12px] font-normal text-secondary">
          주변 축제와 혼잡도를 지도에서 확인
        </p>
      </div>
      <span className="relative flex h-10 shrink-0 items-center justify-center gap-1 rounded-full bg-primary px-3 text-[14px] font-semibold text-white md:px-4">
        <span className="hidden md:inline">지도 보기</span>
        <ArrowRight size={18} strokeWidth={2.2} />
      </span>
    </Link>
  );
}
