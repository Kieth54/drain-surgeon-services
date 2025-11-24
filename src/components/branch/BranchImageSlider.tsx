"use client";

import { useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { useOptimizedTimer } from "@/hooks/useOptimizedTimer";

type BranchImage = {
  src: StaticImageData;
  alt: string;
};

type BranchImageSliderProps = {
  images: BranchImage[];
  children: ReactNode;
};

export default function BranchImageSlider({ images, children }: BranchImageSliderProps) {
  const [index, setIndex] = useState(0);

  // Auto-advance every 5s using optimized timer
  useOptimizedTimer(
    'branch-image-slider',
    5000,
    () => {
      if (images && images.length > 1) {
        setIndex((prev) => (prev + 1) % images.length);
      }
    },
    images && images.length > 1
  );

  if (!images || images.length === 0) return <>{children}</>;

  const goTo = (i: number) => {
    if (!images || images.length === 0) return;
    const safeIndex = ((i % images.length) + images.length) % images.length;
    setIndex(safeIndex);
  };

  const primary = images[index];
  const secondary = images[(index + 1) % images.length];
  const tertiary = images[(index + 2) % images.length];

  const visibleImages = [primary, secondary, tertiary];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm">
      {/* Image layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          {visibleImages.map((img, i) => (
            <div key={i} className="relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 210px, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
      </div>

      {/* Content slot + controls */}
      <div className="relative z-10 text-white text-center drop-shadow-sm">
        {children}

        {/* Dots */}
        {images.length > 1 && (
          <div className="pointer-events-auto mt-4 flex justify-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-primary-red" : "w-2 bg-white/60"
                }`}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Arrows */}
        {images.length > 1 && (
          <div className="pointer-events-auto mt-3 flex items-center justify-between text-xs text-[#444444]">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="inline-flex items-center justify-center rounded-full bg-black/8 px-3 py-1 text-[11px] font-medium text-[#333333] hover:bg-black/12"
              aria-label="Previous image"
            >
              ‹ Previous
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="inline-flex items-center justify-center rounded-full bg-black/8 px-3 py-1 text-[11px] font-medium text-[#333333] hover:bg-black/12"
              aria-label="Next image"
            >
              Next ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
