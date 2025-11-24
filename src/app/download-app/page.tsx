import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function DownloadAppPage() {
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
                Mobile app
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                Download our
                <span className="text-primary-red"> Drain Surgeon app</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Book a plumber or electrician in a few taps, get notified of specials and track your
                job from your phone. Your first job booked through the app gets
                <span className="font-semibold text-primary-red"> R150 off</span>.
              </p>

              {/* Store buttons */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://apps.apple.com/za/app/the-surgeon-group/id1441305561"
                  className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-white shadow-sm transition hover:bg-[#111111]"
                >
                  <div className="flex items-center gap-3">
                    <FaApple className="text-2xl" aria-hidden="true" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-gray-300">
                        Download on the
                      </span>
                      <span className="text-sm font-semibold">App Store</span>
                    </div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.galactix.tsg&gl=ZA"
                  className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-white shadow-sm transition hover:bg-[#111111]"
                >
                  <div className="flex items-center gap-3">
                    <FaGooglePlay className="text-2xl" aria-hidden="true" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-gray-300">
                        Get it on
                      </span>
                      <span className="text-sm font-semibold">Google Play</span>
                    </div>
                  </div>
                </a>
              </div>

              <p className="mt-3 text-xs text-[#999999] max-w-md mx-auto">
                The app is free to download and easy to use. We appreciate your rating and feedback on
                the app stores to help us keep improving.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits & discounts */}
        <section className="mt-12">
          <div className="container max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
              <div className="rounded-2xl bg-light-gray/70 p-6 sm:p-7 border border-[#eeeeee] shadow-sm">
                <h2 className="text-lg font-bold text-black mb-3">
                  Save when you book and pay through the app
                </h2>
                <ul className="space-y-3 text-sm text-[#555555]">
                  <li>
                    <span className="font-semibold text-primary-red">R150 off</span> your first job
                    booked through the app.
                  </li>
                  <li>
                    <span className="font-semibold">5% discount</span> when you pay your invoice via the
                    app.
                  </li>
                  <li>
                    Request a plumber or electrician directly from the app without calling the control
                    room.
                  </li>
                  <li>
                    Push notifications for specials, competitions and promotions so you never miss a
                    deal.
                  </li>
                  <li>
                    View all our service offerings and plumbing products in one place.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm text-sm text-[#555555]">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-red mb-3">
                  Why we built the app
                </h3>
                <p className="mb-3">
                  With our mobile app we expand our service offering by letting you request and book a
                  technician directly from your phone. No call centre queue, no waiting for office hours.
                </p>
                <p className="mb-3">
                  You get the convenience of quick bookings, transparent discounts and access to
                  South Africa&apos;s largest plumbing maintenance and repair franchise operating
                  <span className="font-semibold"> 24/7, 365 days a year</span>.
                </p>
                <p>
                  We value your feedback and we are committed to continuously developing and improving
                  the app. Please share any suggestions or issues via the app stores when you rate us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="mt-14">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm">
                <p className="text-3xl mb-3" aria-hidden="true">
                  ⚡
                </p>
                <h3 className="text-sm font-semibold text-black mb-2">Fast booking</h3>
                <p className="text-sm text-[#555555]">
                  Request a service in seconds with a simple, streamlined booking flow.
                </p>
              </div>
              <div className="rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm">
                <p className="text-3xl mb-3" aria-hidden="true">
                  🎁
                </p>
                <h3 className="text-sm font-semibold text-black mb-2">Exclusive specials</h3>
                <p className="text-sm text-[#555555]">
                  Get notified about app-only specials, competitions and ongoing promotions.
                </p>
              </div>
              <div className="rounded-2xl border border-[#eeeeee] bg-white p-6 shadow-sm">
                <p className="text-3xl mb-3" aria-hidden="true">
                  📍
                </p>
                <h3 className="text-sm font-semibold text-black mb-2">Track your job</h3>
                <p className="text-sm text-[#555555]">
                  Keep everything in one place – booking details, updates and invoices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Need help right now?</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                If you don&apos;t have the app installed yet, you can still reach our 24/7 control room
                immediately by phone.
              </p>
              <a
                href="tel:+27861758623"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
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
