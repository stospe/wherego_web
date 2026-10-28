import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

export function MapBanner() {
  return (
    <Link
      href="/map"
      className="relative flex min-h-[104px] items-center gap-4 overflow-hidden rounded-2xl border border-[#bfdbfe] bg-[#eff6ff] p-4 dark:border-[#263b5b] dark:bg-[#111c32]"
    >
      <div className="absolute inset-y-0 right-0 w-[38%]">
        <Image
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80"
          alt=""
          fill
          className="object-cover opacity-75 dark:opacity-45"
          sizes="(min-width: 768px) 450px, 150px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eff6ff] via-[#eff6ff]/35 to-transparent dark:from-[#111c32]" />
      </div>
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
        <MapPinned size={22} strokeWidth={2.2} />
      </div>
      <div className="relative min-w-0 flex-1">
        <p className="text-[14px] font-semibold text-text md:text-[16px]">
          지도에서 한눈에 보기
        </p>
        <p className="mt-1 text-[12px] font-normal text-secondary">
          주변 축제와 혼잡도를 지도에서 확인
        </p>
      </div>
      <span className="relative z-10 flex h-10 shrink-0 items-center justify-center gap-1 rounded-full bg-primary px-3 text-[14px] font-semibold text-white md:px-4">
        <span className="hidden md:inline">지도 보기</span>
        <ArrowRight size={18} strokeWidth={2.2} />
      </span>
    </Link>
  );
}
