import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SectionHeader({
  title,
  description,
  href,
  linkLabel = "전체보기",
  className = "",
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  return (
    <div className={`mb-3 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-[18px] font-bold text-text md:text-[20px]">
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-[12px] leading-snug text-secondary md:text-[13px]">
              {description}
            </p>
          ) : null}
        </div>
        {href ? (
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-0.5 pt-0.5 text-[13px] font-medium text-secondary hover:text-primary"
          >
            {linkLabel}
            <ChevronRight size={16} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
