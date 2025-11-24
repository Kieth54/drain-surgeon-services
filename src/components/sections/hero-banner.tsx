"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import { Droplet, IdCard, Wrench } from 'lucide-react';
import PlumberImage from '@/assets/plumber.png';
import PlumbImage from '@/assets/plumb_1.webp';
import CameraImage from '@/assets/camera_nrew-1.webp';
import { useVisibilityOptimizedTimer } from '@/hooks/useOptimizedTimer';

const HeroBanner = () => {
  const heroImages = [PlumberImage, PlumbImage, CameraImage];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);

  // Use optimized timer that pauses when not visible
  useVisibilityOptimizedTimer(
    'hero-banner-rotation',
    6000,
    () => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    },
    containerRef
  );

  const currentImage = heroImages[currentIndex];

  return (
    <section ref={containerRef} className="w-full bg-white pb-16">
      <div className="container mx-auto px-10">
        <div className="grid gap-10 pt-10 sm:pt-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative text-center lg:text-left">
            <div className="hero-animated-blob -left-24 -top-24 h-72 w-72 hidden lg:block" aria-hidden="true" />
            <div className="hero-animated-blob -right-10 bottom-[-60px] h-56 w-56 hidden lg:block opacity-60" aria-hidden="true" />
            {/* Emergency Response section */}
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#999999]">
              24/7 Emergency Response
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-black sm:text-[44px] lg:text-[48px]">
              Trusted plumbers for
              <br className="hidden sm:block" />
              <span className="text-primary-red"> blocked drains</span> and
              <br className="hidden sm:block" />
              emergency repairs.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#666666] mx-auto lg:mx-0">
              The Drain Surgeon has provided professional plumbing services since 1979.
              Fast, friendly, and security-cleared teams across South Africa.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="tel:+27861758623"
                className="inline-flex items-center justify-center rounded-full bg-primary-red px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#b30000]"
              >
                Call Now: +27 861 758 623
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full border border-[#dddddd] bg-white px-7 py-3 text-sm font-semibold text-[#333333] shadow-sm transition hover:border-primary-red hover:text-primary-red"
              >
                Book a Plumber Online
              </a>
            </div>

            <p className="mt-3 text-xs text-[#999999]">
              We aim to call you back within 15 minutes of receiving your request.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-6 shadow-sm">
            <div className="pointer-events-none absolute inset-0">
              <Image
                src={currentImage}
                alt="Professional plumbing work from The Drain Surgeon"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover opacity-40 transition-opacity duration-700"
                priority
              />
            </div>
            <div className="rounded-xl bg-primary-red px-5 py-3 text-center text-white shadow">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase">
                Plumbers since 1979
              </p>
              <p className="mt-1 text-lg font-bold tracking-wide">
                No job too deep, too dark or too dirty
              </p>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl bg-white px-4 py-5 text-center shadow-sm">
                <Droplet size={40} strokeWidth={1} className="text-primary-red" />
                <h3 className="mt-3 text-xs font-semibold tracking-[0.18em] text-[#333333]">
                  BLOCKED DRAIN
                </h3>
                <p className="mt-1 text-xs text-[#777777]">Specialist teams &amp; equipment.</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-white px-4 py-5 text-center shadow-sm">
                <IdCard size={40} strokeWidth={1} className="text-primary-red" />
                <h3 className="mt-3 text-xs font-semibold tracking-[0.18em] text-[#333333]">
                  SECURITY-CLEARED
                </h3>
                <p className="mt-1 text-xs text-[#777777]">Trusted professionals in your home.</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-white px-4 py-5 text-center shadow-sm">
                <Wrench size={40} strokeWidth={1} className="text-primary-red" />
                <h3 className="mt-3 text-xs font-semibold tracking-[0.18em] text-[#333333]">
                  EXPERIENCED
                </h3>
                <p className="mt-1 text-xs text-[#777777]">Decades of plumbing expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;