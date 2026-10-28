import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SectionHeader({
  title,
  description,
  meta,
  href,
  linkLabel = "전체보기",
  className = "",
}: {
  title: string;
  description?: string;
  meta?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  return (
    <div className={`mb-3 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-[18px] font-bold text-text md:text-[22px]">
              {title}
            </h2>
            {meta ? (
              <span className="text-[12px] font-normal text-secondary md:text-[13px]">
                {meta}
              </span>
            ) : null}
          </div>
          {description ? (
            <p className="mt-1 text-[12px] font-normal leading-snug text-secondary">
              {description}
            </p>
          ) : null}
        </div>
        {href ? (
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-primary-soft px-3 py-1.5 text-[14px] font-semibold text-primary md:text-[15px]"
          >
            {linkLabel}
            <ChevronRight size={16} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

