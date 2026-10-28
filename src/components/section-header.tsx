import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SectionHeader({
  title,
  href,
  className = "",
}: {
  title: string;
  href: string;
  className?: string;
}) {
  return (
    <div className={`mb-3 flex items-center justify-between ${className}`}>
      <h2 className="text-[18px] font-bold text-text md:text-[20px]">{title}</h2>
      <Link
        href={href}
        className="inline-flex items-center gap-0.5 text-[13px] font-medium text-secondary hover:text-primary"
      >
        전체보기
        <ChevronRight size={16} />
      </Link>
    </div>
  );
}
