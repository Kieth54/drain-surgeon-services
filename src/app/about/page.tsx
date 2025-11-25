import Image from "next/image";
import Link from "next/link";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ClientsSection from "@/components/sections/clients-section";
import PlumberImage from "@/assets/plumber.png";
import VanImage from "@/assets/plumb_1.webp";
import OnJobImage from "@/assets/camera_nrew-1.webp";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white page-fade">
      <Header />
      <main className="pb-16 pt-10 sm:pt-14">
        <section className="bg-white">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
              <div className="relative">
                <div
                  className="hero-animated-blob -left-24 -top-24 h-64 w-64 hidden lg:block"
                  aria-hidden="true"
                />
                <div
                  className="hero-animated-blob -right-10 bottom-[-60px] h-52 w-52 hidden lg:block opacity-60"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">
                  About The Drain Surgeon
                </p>
                <h1 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-[34px] lg:text-[38px]">
                  Plumbers since 1979, built on
                  <span className="text-primary-red"> service and trust</span>.
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-xl">
                  For more than four decades, The Drain Surgeon has grown by treating every customer
                  with care, professionalism, and respect. We see every call-out as an opportunity to
                  deliver craftsmanship and service that people remember.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#666666] max-w-xl">
                  Today the group operates nationally with true 24/7 availability, security-cleared
                  teams, and a focus on solving plumbing emergencies quickly and safely.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full bg-primary-red px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-deep-red"
                  >
                    View our services
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-full border border-[#dddddd] bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#333333] shadow-sm transition hover:border-primary-red hover:text-primary-red"
                  >
                    Contact our team
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-4 sm:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
                  <Image
                    src={PlumberImage}
                    alt="The Drain Surgeon plumbing team"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative z-10 space-y-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#555555]">
                    Our mission
                  </h2>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    We aim to deliver a superior level of customer service on every job we attend.
                    That means quality workmanship, honest communication, and friendly, courteous
                    teams who are totally committed to serving you better than anyone else.
                  </p>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Customer satisfaction is not a slogan; it is our primary goal and the reason
                    behind the growth of The Drain Surgeon across South Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-light-gray/60 py-12">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eeeeee]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                  Why choose us
                </h3>
                <p className="text-sm text-[#555555] mb-4">
                  The Drain Surgeon Group, established in 1979, operates nationally under The Drain
                  Surgeon and The Electro Surgeon brands. We provide a true 24-hour service, 7 days a
                  week, at no extra charge.
                </p>
                <ul className="space-y-2 text-sm text-[#444444]">
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Geared for first-class service with efficiency, dependability and customer
                    satisfaction as core priorities.
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Corporate maintenance options to help businesses budget for the unexpected.
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Skilled two-person teams in each vehicle, carrying the right tools and materials.
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Ongoing technical and customer-service training to keep standards high.
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eeeeee]">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                    Corporate profile
                  </h3>
                  <p className="text-sm text-[#555555]">
                    We are one of the largest plumbing repair companies in the southern hemisphere
                    and members of key professional bodies. Our founder and managing director, Glenn
                    Pratt, is a master plumber and has held leadership roles in the Institute of
                    Plumbing South Africa (IOPSA).
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#eeeeee]">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                    Security & peace of mind
                  </h3>
                  <ul className="space-y-2 text-sm text-[#444444]">
                    <li>
                      <span className="mr-2 text-primary-red font-bold"></span>
                      Workmanship guaranteed, with comprehensive insurance cover for faulty
                      workmanship and public liability.
                    </li>
                    <li>
                      <span className="mr-2 text-primary-red font-bold"></span>
                      Boldly branded vehicles that are easy to identify when arriving at your
                      property.
                    </li>
                    <li>
                      <span className="mr-2 text-primary-red font-bold"></span>
                      Security-cleared staff carrying personalised ID cards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] items-stretch">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-black">On the road, fully equipped</h2>
                <p className="text-sm text-[#555555]">
                  Our teams operate from clearly branded vehicles that are stocked with the tools and
                  materials needed to resolve most problems on the first visit. From blocked drains to
                  burst pipes, we arrive ready to get your home or business back up and running.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden border border-[#f0f0f0] bg-[#f7f7f7]">
                    <Image
                      src={VanImage}
                      alt="The Drain Surgeon service van on the road"
                      fill
                      sizes="(min-width: 768px) 260px, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden border border-[#f0f0f0] bg-[#f7f7f7]">
                    <Image
                      src={OnJobImage}
                      alt="Plumber from The Drain Surgeon working on site"
                      fill
                      sizes="(min-width: 768px) 260px, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm flex flex-col justify-center">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                  24/7 emergency response
                </h3>
                <p className="text-sm text-[#555555] mb-2">
                  Whether it is a late-night burst pipe or an early-morning blocked drain, our
                  security-cleared teams and dispatch control room coordinate rapid response across our
                  franchised areas.
                </p>
                <p className="text-sm text-[#555555]">
                  Because our vehicles and teams are fully equipped, we can diagnose and repair most
                  issues on-site without unnecessary delays, helping you avoid further damage and
                  disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold text-black mb-3">Services we specialise in</h2>
                <p className="text-sm text-[#555555] mb-3">
                  From emergency call-outs to scheduled maintenance, we cover the full spectrum of
                  plumbing services for homes, businesses and industrial facilities.
                </p>
                <ul className="space-y-1.5 text-sm text-[#444444]">
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    General 24-hour plumbing
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Geyser repairs and replacements
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Blocked drains and high-pressure jetting
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Electronic leak detection and burst pipe repairs
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    CCTV drain inspections
                  </li>
                  <li>
                    <span className="mr-2 text-primary-red font-bold"></span>
                    Septic tanks and French drains
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-light-gray/60 p-6">
                <h2 className="text-xl font-bold text-black mb-3">Franchising</h2>
                <p className="text-sm text-[#555555] mb-3">
                  The Drain Surgeon Franchising Africa (Pty) Ltd is a full member of the Franchise
                  Association of South Africa (FASA) and operates in line with the FASA Code of
                  Ethics and Business Practices.
                </p>
                <p className="text-sm text-[#555555] mb-4">
                  If you are interested in owning your own plumbing franchise backed by a
                  well-known national brand, you can learn more about our opportunity.
                </p>
                <a
                  href="https://surgeongroup.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary-red px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-deep-red"
                >
                  Learn about franchising
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <ClientsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
