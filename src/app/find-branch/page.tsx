import Image from "next/image";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import JohannesburgImage from "@/assets/Johannesburg.jpg";
import CapeTownImage from "@/assets/Cape Town.jpg";
import DurbanImage from "@/assets/Durban.jpg";
import NelspruitImage from "@/assets/Nelspruit.jpg";
import RustenburgImage from "@/assets/Rustenburg.jpg";
import EastLondonImage from "@/assets/East London.jpg";
import KrugersdorpImage from "@/assets/Rustenburg (1).jpg";
import TruckImage from "@/assets/truck_1.webp";

const branches = [
  {
    name: "Johannesburg",
    area: "Johannesburg and surrounding areas",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/johannesburg",
    image: JohannesburgImage,
    imageAlt: "Johannesburg city skyline",
  },
  {
    name: "Cape Town",
    area: "Cape Town Central & wider Cape Town region",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/capetown",
    image: CapeTownImage,
    imageAlt: "Cape Town city skyline",
  },
  {
    name: "Durban",
    area: "Durban and nearby coastal areas",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/durban",
    image: DurbanImage,
    imageAlt: "Durban city and beachfront",
  },
  {
    name: "Gauteng",
    area: "Pretoria, Johannesburg and greater Gauteng region",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/gauteng",
    image: TruckImage,
    imageAlt: "The Drain Surgeon truck in Gauteng",
  },
  {
    name: "Krugersdorp & West Rand",
    area: "Krugersdorp, Roodepoort, Westrand and nearby areas",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/krugersdorp",
    image: KrugersdorpImage,
    imageAlt: "Krugersdorp and West Rand area",
  },
  {
    name: "Nelspruit",
    area: "Nelspruit and surrounding Mpumalanga region",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/nelspruit",
    image: NelspruitImage,
    imageAlt: "Nelspruit city and surrounding area",
  },
  {
    name: "Rustenburg",
    area: "Rustenburg and North West mining region",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/rustenburg",
    image: RustenburgImage,
    imageAlt: "Rustenburg and mining region skyline",
  },
  {
    name: "East London",
    area: "East London and nearby Eastern Cape areas",
    phone: "+27 861 758 623",
    hours: "24/7 Emergency Service",
    path: "/east-london",
    image: EastLondonImage,
    imageAlt: "East London beachfront and city",
  },
];

export default function FindBranchPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f3f4f6,_#ffffff)] page-fade">
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
                Find Your Branch
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                Fast plumbing support
                <span className="text-primary-red"> near you</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Locate your nearest Drain Surgeon branch for 24/7 emergency response and scheduled plumbing
                services across South Africa.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="container max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="relative overflow-hidden rounded-2xl border border-[#eeeeee] bg-[#111827] text-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-60">
                    <Image
                      src={branch.image}
                      alt={branch.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 p-5 flex flex-col min-h-[190px] bg-gradient-to-t from-black/70 via-black/40 to-black/20">
                    <h2 className="text-sm font-semibold mb-1">{branch.name}</h2>
                    <p className="text-[11px] font-medium text-red-100 mb-2">{branch.hours}</p>
                    <p className="text-[11px] text-gray-100 mb-4 flex-1">{branch.area}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <a
                        href={`tel:${branch.phone}`}
                        className="inline-flex items-center justify-center rounded-full bg-primary-red px-4 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-deep-red"
                      >
                        Call branch
                      </a>
                      {branch.path && (
                        <a
                          href={branch.path}
                          className="inline-flex items-center justify-center rounded-full border border-red-100 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-red-50 shadow-sm transition hover:bg-white/15"
                        >
                          View branch
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container max-w-3xl">
            <div className="rounded-2xl bg-light-gray/60 p-8 text-center">
              <h2 className="text-lg font-bold text-black mb-2">Don’t see your area listed?</h2>
              <p className="text-sm text-[#555555] mb-4">
                We are constantly expanding our service areas. Call our 24/7 control room to confirm whether
                we service your location or to be directed to the nearest branch.
              </p>
              <a
                href="tel:+27861758623"
                className="inline-flex items-center justify-center rounded-full bg-primary-red px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-deep-red"
              >
                Call +27 861 758 623
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
