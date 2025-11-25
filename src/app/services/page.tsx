import Image from "next/image";
import { AlertTriangle, Droplets, Flame, ScanLine, Shield, Wrench } from "lucide-react";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import VanImage from "@/assets/plumb_1.webp";

export default function ServicesPage() {
  const services = [
    {
      title: "General 24HR Plumbing",
      description:
        "Emergency plumbing services available 24/7 for leaks, blockages and urgent repairs.",
      icon: AlertTriangle,
    },
    {
      title: "Geyser Repairs & Replacements",
      description: "Expert geyser installation, repair and insurance-related replacements.",
      icon: Flame,
    },
    {
      title: "Blocked Drains",
      description:
        "Electro-mechanical drain cleaning and high-pressure hydro jetting of sewer and storm water drains.",
      icon: Droplets,
    },
    {
      title: "Electronic Leak Detection",
      description: "State-of-the-art leak detection technology to find hidden leaks quickly.",
      icon: ScanLine,
    },
    {
      title: "Burst and Leaking Pipes",
      description: "Fast response to burst and leaking pipes to minimise water damage.",
      icon: Wrench,
    },
    {
      title: "CCTV Camera Drain Inspections",
      description:
        "Video-camera inspection to diagnose underground pipe problems like cracks, roots and sinkage.",
      icon: Shield,
    },
    {
      title: "Septic Tanks & French Drains",
      description: "Installation and maintenance of septic tanks and French drains.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-white page-fade">
      <Header />
      <main className="pb-16 pt-10 sm:pt-14">
        <section className="bg-white">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">
                  Services
                </p>
                <h1 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-[34px] lg:text-[38px]">
                  24-Hour Emergency
                  <span className="text-primary-red"> Plumbing &amp; Drain Services</span>
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-xl">
                  If you need something fixed or fitted, our teams are on call day and night. We offer
                  plumbing services 24 hours a day across South Africa and take care of any plumbing
                  problem in your home or business, regardless of its severity.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#666666] max-w-xl">
                  From leaking pipes and faulty toilets to new installations and complex blockages, our
                  experienced plumbers have seen it all. You can enjoy peace of mind knowing that help is
                  on the way.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-primary-red text-white p-6 sm:p-7 shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
                <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-multiply">
                  <Image
                    src={VanImage}
                    alt="The Drain Surgeon service van"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300/90">
                    24/7 Emergency Callouts
                  </p>
                  <h2 className="mt-2 text-xl font-bold">We will call you back within 15 minutes</h2>
                  <p className="mt-3 text-sm text-red-50">
                    Your business is important to us. Our 24-hour manned call centre coordinates plumbers
                    across our franchised areas, so you are never left waiting.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href="tel:+27861758623"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
                    >
                      Call Now: +27 861 758 623
                    </a>
                    <a
                      href="#booking"
                      className="inline-flex items-center justify-center rounded-full border border-red-200 bg-transparent px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
                    >
                      Book a plumber online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-light-gray/60 py-12">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eeeeee]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                  We can fit it
                </h2>
                <p className="text-sm text-[#555555]">
                  Need help fitting new bathroom or kitchen fixtures? Our plumbers can install taps,
                  toilets, baths, basins, showers, cisterns and moremaking sure everything is safely
                  connected and fully operational.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eeeeee]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                  At Home
                </h2>
                <p className="text-sm text-[#555555]">
                  For households, we provide fast, professional service for any plumbing or drainage
                  need. No extra charges outside office hours, clear communication throughout and neat,
                  uniformed teams who respect your home.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eeeeee]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                  At Work
                </h2>
                <p className="text-sm text-[#555555]">
                  Our corporate clients rely on us for plumbing and drainage support with minimal
                  disruption. We adapt to your schedule, coordinate with facilities teams and keep your
                  operations running.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 mb-6">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-[26px] font-bold text-black mb-3">Services we specialise in</h2>
            <p className="text-sm sm:text-[15px] text-[#555555] mb-8 max-w-2xl">
              Below are some of the core plumbing and drainage services we offer to homes, businesses
              and industrial facilities across South Africa.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm flex flex-col justify-between transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.16)]"
                >
                  <div>
                    {service.icon && (
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-primary-red">
                        <service.icon size={20} strokeWidth={1.7} />
                      </div>
                    )}
                    <h3 className="text-sm font-semibold text-black mb-1.5">{service.title}</h3>
                    <p className="text-sm text-[#555555] mb-4 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] mt-auto">
                    <a
                      href="tel:+27861758623"
                      className="inline-flex items-center justify-center rounded-full border border-primary-red bg-white px-3 py-1.5 font-semibold text-primary-red shadow-sm transition group-hover:bg-primary-red group-hover:text-white"
                    >
                      Call now
                    </a>
                    <a
                      href="/contact-us"
                      className="inline-flex items-center justify-center rounded-full border border-[#dddddd] bg-light-gray px-3 py-1.5 font-semibold text-[#333333] shadow-sm transition hover:border-primary-red hover:text-primary-red"
                    >
                      Request a quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
