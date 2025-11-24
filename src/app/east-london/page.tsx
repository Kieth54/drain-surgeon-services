import Image from "next/image";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import BranchImageSlider from "@/components/branch/BranchImageSlider";
import TeamImage from "@/assets/guys-1.webp";
import EastLondonCityImage from "@/assets/East London.jpg";
import CutImage from "@/assets/cut.webp";

export default function EastLondonPage() {
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
                Eastern Cape Branch
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                The Drain Surgeon
                <span className="text-primary-red"> East London</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Professional plumbing and drain services for East London and surrounding Eastern Cape
                communities, available 24 hours a day.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="container max-w-4xl">
            <BranchImageSlider
              images={[
                { src: EastLondonCityImage, alt: "East London beachfront and city" },
                { src: TeamImage, alt: "The Drain Surgeon team in East London" },
                { src: CutImage, alt: "Drain cutting and plumbing equipment in use" },
              ]}
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white mb-3">
                Contact details
              </h2>
              <p className="text-sm text-white/90 mb-2">
                For assistance in East London, call our national line or your local branch contact number
                listed on your invoice or marketing materials.
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
