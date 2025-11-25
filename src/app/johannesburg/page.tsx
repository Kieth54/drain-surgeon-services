import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Clock, Wrench, CheckCircle } from "lucide-react";
import BranchImageSlider from "@/components/branch/BranchImageSlider";
import JohannesburgImage from "@/assets/Johannesburg.jpg";
import VanImage from "@/assets/van-2.webp";
import OnJobImage from "@/assets/home-plumber-on-th-job.webp";

export default function JohannesburgPage() {
  const suburbs = [
    "Sandton", "Rosebank", "Parktown", "Bryanston", "Randburg",
    "Roodepoort", "Fourways", "Midrand", "Bedfordview", "Edenvale",
    "Kempton Park", "Benoni", "Boksburg", "Germiston", "Alberton",
    "Soweto", "Alexandra", "Johannesburg CBD", "Melville", "Parkhurst"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-10 h-10 text-[var(--color-primary-red)]" />
              <h1 className="text-4xl font-bold text-black">
                Plumbers in Johannesburg
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable 24/7 plumbing services across all Johannesburg suburbs
            </p>
          </div>

          {/* Image gallery */}
          <div className="mb-10">
            <BranchImageSlider
              images={[
                { src: JohannesburgImage, alt: "Johannesburg city skyline" },
                { src: VanImage, alt: "The Drain Surgeon van serving Johannesburg" },
                { src: OnJobImage, alt: "Plumber from The Drain Surgeon working on site" },
              ]}
            >
              <div className="relative z-10 max-w-xl mx-auto">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white mb-2">
                  Johannesburg branch in action
                </h2>
                <p className="text-sm text-white/90">
                  A glimpse of our teams, vehicles and the city we serve every day across Johannesburg.
                </p>
              </div>
            </BranchImageSlider>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Johannesburg Plumbing Emergency?</h2>
            <a
              href="tel:+27861758623"
              className="text-4xl font-bold hover:underline mb-4 block"
            >
              +27 861 758 623
            </a>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Clock className="w-5 h-5" />
              <span>15 minute callback guarantee</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Johannesburg Service Areas
              </h2>
              <p className="text-gray-600 mb-6">
                The Drain Surgeon provides professional plumbing services to all areas of Johannesburg, 
                including surrounding suburbs and townships. Our local teams know the city inside out.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {suburbs.map((suburb, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-primary-red)] rounded-full flex-shrink-0"></span>
                    {suburb}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                ...and many more. Call us to confirm service in your specific area.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Why Johannesburg Trusts Us
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Serving Joburg Since 1979",
                    desc: "Over 40 years of experience in Johannesburg's diverse neighborhoods"
                  },
                  {
                    title: "Multiple Local Teams",
                    desc: "Strategically positioned teams across the city for rapid response"
                  },
                  {
                    title: "All Major Clients",
                    desc: "Trusted by McDonald's, Coca-Cola, Woolworths, and more"
                  },
                  {
                    title: "Security-Cleared Plumbers",
                    desc: "All technicians are vetted and cleared for your peace of mind"
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden costs - book online and save R300"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success-green)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Wrench className="w-10 h-10 text-[var(--color-primary-red)]" />
              <h2 className="text-3xl font-bold text-black">
                Johannesburg Plumbing Services
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Emergency Plumbing",
                  desc: "24/7 emergency response for burst pipes, major leaks, and urgent repairs"
                },
                {
                  title: "Blocked Drains",
                  desc: "High-pressure jetting and CCTV inspections to clear any blockage"
                },
                {
                  title: "Geyser Services",
                  desc: "Installation, repair, and replacement of all geyser types"
                },
                {
                  title: "Leak Detection",
                  desc: "Electronic leak detection to find hidden leaks without damage"
                },
                {
                  title: "Pipe Relining",
                  desc: "Trenchless pipe repair - no digging up your property"
                },
                {
                  title: "COC Certificates",
                  desc: "Certificates of Compliance for property transactions"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.14)] hover:border-[var(--color-primary-red)]"
                >
                  <div>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[var(--color-primary-red)]">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-1.5 text-black">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Now Section */}
          <div className="bg-[var(--color-light-gray)] rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Book a Plumber in Johannesburg
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Save R300 when you book and pay online. Fast, professional service with transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-block bg-[var(--color-primary-red)] text-white font-bold py-4 px-8 rounded hover:bg-[var(--color-deep-red)] transition-colors"
              >
                Book Online & Save R300
              </a>
              <a
                href="tel:+27861758623"
                className="inline-block bg-white border-2 border-[var(--color-primary-red)] text-[var(--color-primary-red)] font-bold py-4 px-8 rounded hover:bg-gray-50 transition-colors"
              >
                Call: +27 861 758 623
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
