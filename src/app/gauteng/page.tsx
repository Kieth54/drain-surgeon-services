import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function GautengPage() {
  const areas = [
    "Johannesburg CBD",
    "Krugersdorp",
    "Pretoria",
    "Sandton",
    "Roodepoort",
    "Randburg",
    "Midrand",
    "Centurion",
    "Boksburg",
    "Benoni",
    "Kempton Park",
    "Germiston"
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
                Plumbers in Gauteng
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional 24/7 plumbing services across all Gauteng areas
            </p>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Gauteng Emergency Plumbing</h2>
            <a
              href="tel:+27861758623"
              className="text-4xl font-bold hover:underline mb-4 block"
            >
              +27 861 758 623
            </a>
            <p className="text-lg">We'll call you back within 15 minutes</p>
          </div>

          {/* Service Areas */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Areas We Cover in Gauteng
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
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
              <p className="mt-6 text-gray-600">
                Don't see your area listed? We service all of Gauteng. Call us to confirm coverage in your specific location.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Why Choose Us in Gauteng?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Rapid Response</h3>
                    <p className="text-gray-600 text-sm">
                      Multiple teams strategically located across Gauteng for fast response times
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Local Expertise</h3>
                    <p className="text-gray-600 text-sm">
                      We understand Gauteng's unique plumbing challenges and building codes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">24/7 Availability</h3>
                    <p className="text-gray-600 text-sm">
                      Emergency plumbing services available around the clock, every day of the year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Cities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Featured Service Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/johannesburg"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[var(--color-primary-red)] transition-colors"
              >
                <h3 className="text-2xl font-bold mb-3 text-black">Johannesburg</h3>
                <p className="text-gray-600 mb-4">
                  Complete plumbing services across all Johannesburg suburbs and CBD
                </p>
                <span className="text-[var(--color-primary-red)] font-bold">
                  Learn more →
                </span>
              </Link>
              <Link
                href="/krugersdorp"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[var(--color-primary-red)] transition-colors"
              >
                <h3 className="text-2xl font-bold mb-3 text-black">Krugersdorp</h3>
                <p className="text-gray-600 mb-4">
                  Trusted plumbing services for Krugersdorp and surrounding West Rand areas
                </p>
                <span className="text-[var(--color-primary-red)] font-bold">
                  Learn more →
                </span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="bg-[var(--color-light-gray)] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Gauteng Plumbing Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Emergency Plumbing",
                "Blocked Drains",
                "Geyser Installation & Repair",
                "Leak Detection",
                "Burst Pipes",
                "CCTV Drain Inspections",
                "High-Pressure Jetting",
                "Pipe Relining",
                "Certificates of Compliance"
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded border-l-4 border-[var(--color-primary-red)] text-gray-700 font-medium"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
