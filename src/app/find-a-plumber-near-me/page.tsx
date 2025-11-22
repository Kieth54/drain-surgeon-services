import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function FindPlumberPage() {
  const locations = [
    {
      name: "Gauteng",
      areas: ["Johannesburg", "Krugersdorp", "Pretoria", "Midrand", "Sandton", "Roodepoort"],
      slug: "gauteng"
    },
    {
      name: "Cape Town",
      areas: ["CBD", "Northern Suburbs", "Southern Suburbs", "Atlantic Seaboard", "Helderberg", "West Coast"],
      slug: "capetown"
    },
    {
      name: "Durban",
      areas: ["Durban Central", "North Coast", "South Coast", "Umhlanga", "Pinetown", "Westville"],
      slug: "durban"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Find a Plumber Near You
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              24/7 emergency plumbing services across South Africa's major cities
            </p>
          </div>

          {/* Emergency Banner */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Emergency? Call Us Now!</h2>
            <a
              href="tel:+27861758623"
              className="text-4xl font-bold hover:underline mb-4 block"
            >
              +27 861 758 623
            </a>
            <p className="text-lg">Available 24/7 for all plumbing emergencies</p>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Our Service Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[var(--color-primary-red)] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-8 h-8 text-[var(--color-primary-red)]" />
                    <h3 className="text-2xl font-bold text-black">{location.name}</h3>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {location.areas.map((area, areaIndex) => (
                      <li key={areaIndex} className="text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--color-primary-red)] rounded-full"></span>
                        {area}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${location.slug}`}
                    className="block text-center bg-[var(--color-primary-red)] text-white font-bold py-3 px-6 rounded hover:bg-[var(--color-deep-red)] transition-colors"
                  >
                    View {location.name} Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Why Choose The Drain Surgeon?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary-red)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">24/7 Service</h3>
                <p className="text-gray-600 text-sm">
                  Available round the clock for emergencies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary-red)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">Since 1979</h3>
                <p className="text-gray-600 text-sm">
                  Over 40 years of trusted service
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary-red)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">15 Min Callback</h3>
                <p className="text-gray-600 text-sm">
                  We respond to your inquiry within 15 minutes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary-red)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-black mb-2">Local Teams</h3>
                <p className="text-gray-600 text-sm">
                  Strategically located across major cities
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="bg-[var(--color-light-gray)] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "24HR Emergency Plumbing",
                "Blocked Drains",
                "Geyser Repairs",
                "Leak Detection",
                "CCTV Inspections",
                "Pipe Relining",
                "High-Pressure Jetting",
                "Burst Pipes",
                "Septic Tanks"
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded border-l-4 border-[var(--color-primary-red)] text-gray-700"
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
