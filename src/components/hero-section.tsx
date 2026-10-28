import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80"
          alt=""
          fill
          priority
          className="object-cover scale-105"
          sizes="(min-width: 768px) 1152px, 100vw"
        />
        <div className="absolute inset-0 bg-[#0F172A]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/70 via-[#0F172A]/35 to-transparent" />
      </div>

      <div className="relative px-5 py-8 md:px-8 md:py-12">
        <div className="max-w-xl text-white">
          <h2 className="text-[24px] font-bold leading-tight tracking-tight md:text-[32px]">
            이번 주말, 어디 갈까?
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-white/80 md:text-[15px]">
            전국 축제부터 실시간 혼잡도까지 한눈에
          </p>
        </div>
      </div>
    </section>
  );
}
