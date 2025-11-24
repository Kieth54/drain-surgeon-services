import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f3f4f6,_#ffffff)] page-fade">
      <Header />
      <main className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        {/* Animated background blobs */}
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

        {/* Hero section */}
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
                Franchising
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                Franchise opportunities with
                <span className="text-primary-red"> The Drain Surgeon</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Join South Africa&apos;s trusted plumbing brand and build a successful business with a
                proven system, national support and a name customers already know.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://surgeongroup.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary-red px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-deep-red"
                >
                  View franchise group site
                </a>
                <a
                  href="tel:+27861758623"
                  className="inline-flex items-center justify-center rounded-full border border-[#dddddd] bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#333333] shadow-sm transition hover:border-primary-red hover:text-primary-red"
                >
                  Call to discuss
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why join section */}
        <section className="mt-12">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-light-gray/70 p-6 sm:p-7 border border-[#eeeeee] shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-black text-center sm:text-left">
                Why join The Drain Surgeon?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary-red text-xl" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">Established brand</h3>
                    <p className="text-sm text-[#555555]">
                      Since 1979, we&apos;ve built a national reputation for dependable service and quality
                      workmanship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-red text-xl" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">Comprehensive training</h3>
                    <p className="text-sm text-[#555555]">
                      Full support and training programmes for franchisees and their teams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-red text-xl" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">Marketing support</h3>
                    <p className="text-sm text-[#555555]">
                      National brand campaigns combined with local marketing guidance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-red text-xl" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">Proven system</h3>
                    <p className="text-sm text-[#555555]">
                      A tested business model with systems, processes and support designed to help you
                      grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we&apos;re looking for & investment */}
        <section className="mt-12">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div>
                <h2 className="text-lg font-bold text-black mb-4">What we&apos;re looking for</h2>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white border border-[#e5e5e5] p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-black mb-1">Entrepreneurial spirit</h3>
                    <p className="text-sm text-[#555555]">
                      Passionate individuals ready to build and grow their own business.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white border border-[#e5e5e5] p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-black mb-1">Customer focus</h3>
                    <p className="text-sm text-[#555555]">
                      A commitment to providing exceptional, honest and friendly service.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white border border-[#e5e5e5] p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-black mb-1">Business acumen</h3>
                    <p className="text-sm text-[#555555]">
                      Strong management, leadership and financial discipline.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-primary-red p-6 sm:p-7 shadow-sm">
                <h2 className="text-lg font-bold text-black mb-4">Investment requirements</h2>
                <ul className="space-y-2 text-sm text-[#555555]">
                  <li>• Initial franchise fee</li>
                  <li>• Equipment and vehicle setup</li>
                  <li>• Working capital requirements</li>
                  <li>• Marketing launch package</li>
                </ul>
                <p className="mt-5 text-xs sm:text-sm text-[#777777] italic">
                  Detailed investment information and the full franchise prospectus are available directly
                  from the Franchise Group.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Ready to get started?</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                Take the next step towards owning your own Drain Surgeon franchise. Visit our Franchise
                Group site or contact our team to discuss territories and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://surgeongroup.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
                >
                  Visit Franchise Group site
                </a>
                <a
                  href="tel:+27861758623"
                  className="inline-flex items-center justify-center rounded-full bg-transparent border border-red-100 px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
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
