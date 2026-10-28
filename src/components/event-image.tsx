"use client";

import Image from "next/image";
import { useState } from "react";
import { FESTIVAL_IMAGE_FALLBACK } from "@/lib/image-policy";

export function EventImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className="object-cover"
      sizes={sizes}
      onError={() => {
        if (currentSrc !== FESTIVAL_IMAGE_FALLBACK) {
          setCurrentSrc(FESTIVAL_IMAGE_FALLBACK);
        }
      }}
    />
  );
}
