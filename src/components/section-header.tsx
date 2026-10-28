import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SectionHeader({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between px-4">
      <h2 className="text-[18px] font-bold text-text">{title}</h2>
      <Link
        href={href}
        className="inline-flex items-center gap-0.5 text-[13px] font-medium text-secondary"
      >
        전체보기
        <ChevronRight size={16} />
      </Link>
    </div>
  );
}
