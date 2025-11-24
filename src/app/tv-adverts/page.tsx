import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function TVAdvertsPage() {
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
                TV adverts
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                See The Drain Surgeon
                <span className="text-primary-red"> on your screen</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                A selection of our television commercials and brand stories, highlighting 24/7 emergency
                response, professional teams and our promise to treat every customer better than anyone else.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-black/5">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full rounded-xl"
                      src="https://www.youtube.com/embed/XUOm4Qfh3Us"
                      title="Drain Surgeon TV Advert 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-black">24/7 Emergency Response</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  A fast‑paced spot showing how our teams react when a burst pipe or blocked drain strikes in
                  the middle of the night – with a real 24/7 call centre behind every advert.
                </p>
              </article>

              <article className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-black/5">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full rounded-xl"
                      src="https://www.youtube.com/embed/WG8dtHb9rSs"
                      title="Drain Surgeon TV Advert 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-black">Professional Service</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Adverts that focus on our security‑screened plumbers, branded vehicles and clean, respectful
                  work on site – reinforcing why homeowners and businesses trust The Drain Surgeon.
                </p>
              </article>

              <article className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-black/5">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full rounded-xl"
                      src="https://www.youtube.com/embed/VpSU1qnNegs"
                      title="Drain Surgeon TV Advert 3"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-black">Blocked Drain Solutions</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Creative TV spots that show high‑pressure jetting, CCTV drain inspections and other advanced
                  techniques we use to clear even the toughest blockages.
                </p>
              </article>

              <article className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-black/5">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full rounded-xl"
                      src="https://www.youtube.com/embed/VhE3BGx98c4"
                      title="Drain Surgeon TV Advert 4"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-black">Customer Testimonials</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  Real customers sharing how quickly we arrived, how we solved their problem and why they
                  continue to recommend The Drain Surgeon to friends and family.
                </p>
              </article>

              <article className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-black/5">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full rounded-xl"
                      src="https://www.youtube.com/embed/lFdjIiN1ecI"
                      title="Drain Surgeon TV Advert 5"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-black">Brand Story</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  A brand‑building commercial that tells the story of The Drain Surgeon and our commitment to
                  superior customer service across South Africa.
                </p>
              </article>

              <article className="rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-black/5">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full rounded-xl"
                      src="https://www.youtube.com/embed/pidk3Yxg9xg"
                      title="Drain Surgeon TV Advert 6"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-black">Special Offer Campaign</h3>
                <p className="text-[13px] text-[#555555] leading-relaxed">
                  A promotional advert highlighting limited‑time specials and the benefits of booking The Drain
                  Surgeon when you need help fast.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Ready to experience the service behind the adverts?</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                Our 24/7 call centre and nationwide teams are standing by for any plumbing emergency, from
                burst pipes and leaking geysers to blocked drains and leak detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+27861758623"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
                >
                  Call +27 861 758 623
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-transparent border border-red-100 px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
                >
                  Book online &amp; save
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
