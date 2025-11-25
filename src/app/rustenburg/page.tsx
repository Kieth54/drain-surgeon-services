import Image from "next/image";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import BranchImageSlider from "@/components/branch/BranchImageSlider";
import RustenburgCityImage from "@/assets/Rustenburg.jpg";
import RustenburgCityAltImage from "@/assets/Rustenburg (1).jpg";
import PressureImage from "@/assets/pressure_new.webp";
import PlumbImage from "@/assets/plumb_1.webp";

export default function RustenburgPage() {
  return (
    <div className="min-h-screen bg-white page-fade">
      <Header />
      <main className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div
          className="hero-animated-blob pointer-events-none -left-40 top-32 h-64 w-64 hidden lg:block opacity-40"
          aria-hidden="true"
        />
        <div
          className="hero-animated-blob pointer-events-none right-[-60px] top-1/2 h-72 w-72 hidden lg:block opacity-30"
          aria-hidden="true"
        />
        <div
          className="hero-animated-blob pointer-events-none -left-24 bottom-[-80px] h-56 w-56 hidden lg:block opacity-35"
          aria-hidden="true"
        />
        <section className="bg-white">
          <div className="container max-w-4xl">
            <div className="relative text-center">
              <div
                className="hero-animated-blob -left-24 -top-24 h-56 w-56 hidden lg:block"
                aria-hidden="true"
              />
              <div
                className="hero-animated-blob -right-16 bottom-[-40px] h-48 w-48 hidden lg:block opacity-60"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">
                North West Branch
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                The Drain Surgeon
                <span className="text-primary-red"> Rustenburg</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                24-hour plumbing and drain specialists serving Rustenburg and surrounding North West areas.
                Fast response, security-cleared teams and professional workmanship.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="container max-w-4xl">
            <BranchImageSlider
              images={[
                { src: RustenburgCityImage, alt: "Rustenburg skyline and mining region" },
                { src: RustenburgCityAltImage, alt: "Alternative view of Rustenburg city" },
                { src: PlumbImage, alt: "Plumbing van and team in Rustenburg" },
                { src: PressureImage, alt: "High-pressure plumbing equipment in use" },
              ]}
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white mb-3 text-center">
                Contact details
              </h2>
              <p className="text-sm text-white/90 mb-2 text-center">
                For plumbing emergencies and bookings in the Rustenburg area, call our national 24/7
                number or your local Rustenburg contact.
              </p>
              <a
                href="tel:+27861758623"
                className="inline-flex items-center justify-center rounded-full bg-primary-red px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-deep-red"
              >
                Call +27 861 758 623
              </a>
            </BranchImageSlider>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
