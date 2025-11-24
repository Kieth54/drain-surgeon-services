import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
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
                Contact
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                Get in touch with
                <span className="text-primary-red"> The Drain Surgeon</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Whether it&apos;s an emergency burst pipe, a blocked drain or a general enquiry, our 24/7 teams
                and friendly office staff are ready to help.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              {/* Contact Information */}
              <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-7 shadow-sm">
                <h2 className="text-base sm:text-lg font-bold mb-4 text-primary-red">Get in touch</h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-lg" aria-hidden="true">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-1">24/7 Emergency Hotline</h3>
                      <a
                        href="tel:+27861758623"
                        className="text-primary-red text-[15px] font-bold hover:underline"
                      >
                        +27 861 758 623
                      </a>
                      <p className="text-[12px] text-[#777777]">Available 24 hours a day, 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-lg" aria-hidden="true">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-1">Email</h3>
                      <a
                        href="mailto:info@drainsurgeon.co.za"
                        className="text-primary-red text-[13px] hover:underline"
                      >
                        info@drainsurgeon.co.za
                      </a>
                      <p className="text-[12px] text-[#777777]">We aim to respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-lg" aria-hidden="true">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-1">Head office</h3>
                      <p className="text-[13px] text-[#555555]">
                        123 Main Street
                        <br />
                        Johannesburg, 2000
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-lg" aria-hidden="true">
                      ⏰
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-1">Business hours</h3>
                      <p className="text-[13px] text-[#555555]">
                        24/7 emergency service
                        <br />
                        Office hours: Mon–Fri 08:00–17:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-[#f5f5f5] px-5 py-4">
                  <h3 className="font-semibold text-[14px] mb-2">We promise:</h3>
                  <ul className="space-y-1.5 text-[13px] text-[#444444]">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-red" aria-hidden="true">
                        ✓
                      </span>
                      <span>15-minute callback guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-red" aria-hidden="true">
                        ✓
                      </span>
                      <span>Professional, security-cleared teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-red" aria-hidden="true">
                        ✓
                      </span>
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-red" aria-hidden="true">
                        ✓
                      </span>
                      <span>Quality workmanship guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-7 shadow-sm">
                <h2 className="text-base sm:text-lg font-bold mb-4 text-primary-red">Send us a message</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-[12px] font-semibold mb-1">
                        First name <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full rounded-md border border-[#dddddd] px-3 py-2 text-[13px] focus:border-primary-red focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[12px] font-semibold mb-1">
                        Last name <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full rounded-md border border-[#dddddd] px-3 py-2 text-[13px] focus:border-primary-red focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[12px] font-semibold mb-1">
                      Email <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-[#dddddd] px-3 py-2 text-[13px] focus:border-primary-red focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[12px] font-semibold mb-1">
                      Phone number <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-md border border-[#dddddd] px-3 py-2 text-[13px] focus:border-primary-red focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[12px] font-semibold mb-1">
                      Subject <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-[#dddddd] px-3 py-2 text-[13px] focus:border-primary-red focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[12px] font-semibold mb-1">
                      Message <span className="text-primary-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full rounded-md border border-[#dddddd] px-3 py-2 text-[13px] leading-relaxed focus:border-primary-red focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-primary-red px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_35px_rgba(15,23,42,0.25)] transition hover:bg-[#c9101c]"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Need immediate assistance?</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                Don&apos;t wait when water is leaking or drains are overflowing. Call our 24/7 emergency hotline
                and a member of The Drain Surgeon team will call you back within 15 minutes.
              </p>
              <a
                href="tel:+27861758623"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
              >
                📞 +27 861 758 623
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
