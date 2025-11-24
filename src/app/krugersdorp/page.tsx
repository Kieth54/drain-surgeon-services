import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Clock, CheckCircle, Phone } from "lucide-react";
import BranchImageSlider from "@/components/branch/BranchImageSlider";
import KrugersdorpImage from "@/assets/Rustenburg (1).jpg";
import VanImage from "@/assets/van-2.webp";
import FixImage from "@/assets/fix.webp";

export default function KrugersdorpPage() {
  const areas = [
    "Krugersdorp CBD",
    "Monument",
    "Rant-en-Dal",
    "Noordheuwel",
    "Kenmare",
    "Mindalore",
    "Kagiso",
    "Munsieville",
    "Toekomsrus",
    "West Village",
    "Silverfields",
    "Krugersdorp Game Reserve Area"
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
                Plumbers in Krugersdorp
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional 24/7 plumbing services for Krugersdorp and the West Rand
            </p>
          </div>

          {/* Image gallery */}
          <div className="mb-10">
            <BranchImageSlider
              images={[
                { src: KrugersdorpImage, alt: "Krugersdorp and West Rand area" },
                { src: VanImage, alt: "The Drain Surgeon van in the West Rand" },
                { src: FixImage, alt: "Plumbing repairs and maintenance work" },
              ]}
            >
              <div className="relative z-10 max-w-xl mx-auto">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white mb-2">
                  Krugersdorp & West Rand in pictures
                </h2>
                <p className="text-sm text-white/90">
                  Visuals from our work across Krugersdorp and the wider West Rand region.
                </p>
              </div>
            </BranchImageSlider>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Krugersdorp Plumbing Emergency?</h2>
            <a
              href="tel:+27861758623"
              className="text-4xl font-bold hover:underline mb-4 block"
            >
              +27 861 758 623
            </a>
            <p className="text-lg">Available 24 hours a day, 7 days a week</p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Krugersdorp & West Rand Coverage
              </h2>
              <p className="text-gray-600 mb-6">
                The Drain Surgeon has been serving Krugersdorp and the greater West Rand area since 1979. 
                Our local teams provide fast, reliable plumbing services to residential and commercial properties.
              </p>
              <div className="space-y-2 mb-6">
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[var(--color-light-gray)] p-3 rounded"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--color-success-green)] flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                We also service surrounding West Rand areas. Contact us to confirm coverage.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Local Krugersdorp Service
              </h2>
              <div className="space-y-4 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Quick Response</h3>
                      <p className="text-gray-600 text-sm">
                        Local teams based in Krugersdorp means faster arrival times
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">15 Minute Callback</h3>
                      <p className="text-gray-600 text-sm">
                        We guarantee to call you back within 15 minutes of your booking
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Experienced Team</h3>
                      <p className="text-gray-600 text-sm">
                        Security-cleared plumbers with decades of West Rand experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-primary-red)] text-white p-6 rounded-lg text-center">
                <p className="text-xl font-bold mb-2">Save R300!</p>
                <p className="text-sm">Book and pay online to receive your discount</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Krugersdorp Plumbing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Blocked Drains",
                  desc: "Expert drain clearing using high-pressure jetting and CCTV technology",
                  price: "From R1,385"
                },
                {
                  title: "Geyser Repairs",
                  desc: "Same-day geyser repairs and replacements for all brands",
                  price: "From R1,785"
                },
                {
                  title: "Leak Detection",
                  desc: "Electronic leak detection to find hidden leaks quickly",
                  price: "From R1,385"
                },
                {
                  title: "Burst Pipes",
                  desc: "Emergency burst pipe repairs available 24/7",
                  price: "Emergency rates"
                },
                {
                  title: "CCTV Inspections",
                  desc: "Camera inspections to diagnose drain and pipe problems",
                  price: "From R1,385"
                },
                {
                  title: "General Plumbing",
                  desc: "All residential and commercial plumbing services",
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

          {/* CTA */}
          <div className="bg-[var(--color-light-gray)] rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Need a Plumber in Krugersdorp?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Call us now or book online to receive your R300 discount
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
