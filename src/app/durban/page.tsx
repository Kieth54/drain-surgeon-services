import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Clock, CheckCircle, Waves } from "lucide-react";
import BranchImageSlider from "@/components/branch/BranchImageSlider";
import DurbanImage from "@/assets/Durban.jpg";
import PressureImage from "@/assets/pressure_new.webp";
import SepticImage from "@/assets/septic_1.webp";

export default function DurbanPage() {
  const areas = [
    "Durban CBD", "Umhlanga", "Ballito", "La Lucia",
    "Durban North", "Morningside", "Musgrave", "Berea",
    "Westville", "Pinetown", "Queensburgh", "Amanzimtoti",
    "Chatsworth", "Phoenix", "Verulam", "Mount Edgecombe",
    "Gateway", "uMhlanga Rocks", "Zimbali", "Salt Rock"
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
                Plumbers in Durban
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable 24/7 plumbing services across Durban and the KZN North & South Coast
            </p>
          </div>

          {/* Image gallery */}
          <div className="mb-10">
            <BranchImageSlider
              images={[
                { src: DurbanImage, alt: "Durban beachfront and city" },
                { src: PressureImage, alt: "High-pressure jetting equipment used in Durban" },
                { src: SepticImage, alt: "Septic and drainage services equipment" },
              ]}
            >
              <div className="relative z-10 max-w-xl mx-auto">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white mb-2">
                  Durban branch in action
                </h2>
                <p className="text-sm text-white/90">
                  Real work scenes from Durban and the KZN North & South Coast.
                </p>
              </div>
            </BranchImageSlider>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Durban Plumbing Emergency?</h2>
            <a
              href="tel:+27861758623"
              className="text-4xl font-bold hover:underline mb-4 block"
            >
              +27 861 758 623
            </a>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Clock className="w-5 h-5" />
              <span>Available 24/7 - We'll call you back in 15 minutes</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Durban & KZN Service Areas
              </h2>
              <p className="text-gray-600 mb-6">
                The Drain Surgeon provides professional plumbing services throughout Durban, 
                from the CBD to Umhlanga and the North Coast, as well as the South Coast areas.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-primary-red)] rounded-full flex-shrink-0"></span>
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Also servicing surrounding KZN areas. Call to confirm coverage in your location.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Why Durban Chooses Us
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Waves,
                    title: "Coastal Climate Expertise",
                    desc: "Specialized knowledge of plumbing challenges in humid coastal environments"
                  },
                  {
                    icon: Clock,
                    title: "Rapid Response",
                    desc: "Local teams positioned across Durban for fast emergency service"
                  },
                  {
                    icon: CheckCircle,
                    title: "Experienced Professionals",
                    desc: "Security-cleared, qualified plumbers with decades of experience"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 bg-white border-2 border-gray-200 rounded-lg p-4">
                      <Icon className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-black mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 bg-[var(--color-primary-red)] text-white p-6 rounded-lg text-center">
                <p className="text-xl font-bold mb-2">Special Online Discount</p>
                <p className="text-3xl font-bold mb-2">Save R300</p>
                <p className="text-sm opacity-90">When you book and pay online</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Durban Plumbing Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "24/7 Emergency Plumbing",
                  desc: "Round-the-clock emergency response for urgent plumbing issues",
                  price: "Call for rates"
                },
                {
                  title: "Blocked Drains",
                  desc: "High-pressure water jetting and drain clearing",
                  price: "From R1,385"
                },
                {
                  title: "Geyser Repairs",
                  desc: "Same-day geyser repairs and replacements",
                  price: "From R1,785"
                },
                {
                  title: "CCTV Drain Inspections",
                  desc: "Camera inspections to identify drain problems",
                  price: "From R1,385"
                },
                {
                  title: "Leak Detection",
                  desc: "Electronic leak detection without property damage",
                  price: "From R1,385"
                },
                {
                  title: "Burst Pipes",
                  desc: "Emergency burst pipe repairs any time",
                  price: "Emergency rates"
                },
                {
                  title: "Pipe Relining",
                  desc: "No-dig pipe repair technology",
                  price: "Quote on request"
                },
                {
                  title: "Septic Tanks",
                  desc: "Septic tank cleaning and maintenance",
                  price: "Quote on request"
                },
                {
                  title: "Commercial Plumbing",
                  desc: "Comprehensive services for businesses",
                  price: "Competitive rates"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[var(--color-primary-red)] transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                  <p className="text-[var(--color-primary-red)] font-bold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[var(--color-light-gray)] rounded-lg p-8 mb-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[var(--color-yellow-gold)] text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 text-lg">
                "The Drain Surgeon team was professional, fast, and fixed our blocked drain perfectly. 
                Highly recommend their service in Durban!"
              </p>
              <p className="text-gray-600 font-bold">- Durban Resident</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[var(--color-primary-red)] to-[var(--color-deep-red)] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Book Your Durban Plumber Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Professional plumbing services with transparent pricing and guaranteed quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-block bg-white text-[var(--color-primary-red)] font-bold py-4 px-8 rounded hover:bg-gray-100 transition-colors"
              >
                Book Online & Save R300
              </a>
              <a
                href="tel:+27861758623"
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded hover:bg-white/10 transition-colors"
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
