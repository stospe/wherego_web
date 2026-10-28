import { Header } from "@/components/header";

export default function MapPage() {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-8">
        <h1 className="text-[22px] font-bold text-text md:text-[28px]">지도</h1>
        <p className="mt-2 text-[14px] text-secondary">
          카카오맵 연동은 이후 단계에서 진행합니다.
        </p>
        <div className="mt-6 flex h-[420px] items-center justify-center rounded-3xl border border-dashed border-border bg-surface text-sm text-secondary">
          지도 영역 (웹에서도 넓게 표시 예정)
        </div>
      </div>
    </div>
  );
}
