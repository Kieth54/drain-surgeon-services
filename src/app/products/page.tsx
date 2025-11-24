import Image from "next/image";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import DrainCleaner from "@/assets/draincleaner_150.webp";
import DrainActivator from "@/assets/drainactivator_150.webp";
import RootKiller from "@/assets/rootkiller_150.webp";
import SepticActivator from "@/assets/septic_1.webp";

export default function ProductsPage() {
  const chemicalProducts = [
    {
      name: "Drain Cleaner",
      image: DrainCleaner,
      description:
        "Powerful chemical formula for clearing stubborn blockages and organic build-up in domestic and commercial drains.",
    },
    {
      name: "Drain Activator",
      image: DrainActivator,
      description:
        "Bio-active product that helps keep drains and fat traps flowing by breaking down grease and organic matter over time.",
    },
    {
      name: "Root Killer",
      image: RootKiller,
      description:
        "Helps control root intrusion in underground pipework, protecting your drains and sewer lines from recurring blockages.",
    },
    {
      name: "Septic Tank Activator",
      image: SepticActivator,
      description:
        "Supports healthy bacterial activity in septic tanks and French drains, reducing odours and improving system performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white page-fade">
      <Header />
      <main className="pb-16 pt-10 sm:pt-14">
        <section className="bg-white">
          <div className="container max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f9f9f] text-center">
              Products
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
              Specialist drain and septic care
              <span className="text-primary-red"> products</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto text-center">
              The Drain Surgeon supplies a focused range of chemical and bio-active products to support our
              plumbing servicesfrom clearing blocked drains and fat traps to maintaining septic tanks and
              French drains.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="container max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {chemicalProducts.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col rounded-2xl border border-[#eeeeee] bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-xl bg-[#f7f7f7]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-sm font-semibold text-black mb-2 text-center">{product.name}</h2>
                  <p className="text-xs text-[#555555] text-center flex-1">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                  Plumbing equipment we work with
                </h2>
                <p className="text-sm text-[#555555] mb-3">
                  While we focus on supplying our own speciality products, our teams also install and
                  maintain a wide range of trusted plumbing equipment and fixtures.
                </p>
                <ul className="space-y-1.5 text-sm text-[#444444]">
                  <li>• Geysers and geyser accessories</li>
                  <li>• Pipes, fittings and connectors</li>
                  <li>• Bathroom and kitchen fixtures</li>
                  <li>• Drainage components and covers</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-light-gray/60 p-6 flex flex-col justify-center text-center">
                <h2 className="text-lg font-bold text-black mb-2">Need help choosing the right product?</h2>
                <p className="text-sm text-[#555555] mb-4 max-w-md mx-auto">
                  Our team can advise you on the best combination of services and products to solve your
                  specific plumbing or drainage problem.
                </p>
                <a
                  href="tel:+27861758623"
                  className="inline-flex items-center justify-center rounded-full bg-primary-red px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-deep-red mx-auto"
                >
                  Call +27 861 758 623
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
