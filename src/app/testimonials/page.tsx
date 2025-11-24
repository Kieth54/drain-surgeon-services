import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function TestimonialsPage() {
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
                Testimonials
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                What our customers
                <span className="text-primary-red"> say about us</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                The main reason behind the growth of The Drain Surgeon is simple: we treat customers
                better than anyone else. Here is a selection of feedback from homeowners, tenants and
                businesses who have trusted us with their plumbing emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="mt-12">
          <div className="container max-w-5xl">
            <TestimonialsSection />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Experience our service for yourself</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                Join thousands of satisfied customers who rely on The Drain Surgeon for fast, professional
                24/7 plumbing help.
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
              >
                Book online &amp; save
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
