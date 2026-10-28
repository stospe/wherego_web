import { Header } from "@/components/header";

export default function FestivalsPage() {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-8">
        <h1 className="text-[22px] font-bold text-text md:text-[28px]">
          축제·행사
        </h1>
        <p className="mt-2 text-[14px] text-secondary">
          목록 UI는 다음 단계에서 구현합니다.
        </p>
      </div>
    </div>
  );
}
