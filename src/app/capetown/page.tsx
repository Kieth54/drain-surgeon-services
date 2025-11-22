import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { MapPin, Clock, CheckCircle, Waves } from "lucide-react";

export default function CapeTownPage() {
  const areas = [
    "Cape Town CBD", "Sea Point", "Camps Bay", "Clifton",
    "Green Point", "Waterfront", "Table View", "Blouberg",
    "Milnerton", "Durbanville", "Bellville", "Paarl",
    "Somerset West", "Strand", "Gordon's Bay", "Constantia",
    "Wynberg", "Claremont", "Newlands", "Rondebosch",
    "Observatory", "Woodstock", "Salt River", "Parow"
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
                Plumbers in Cape Town
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              24/7 emergency plumbing services across the Mother City and surrounds
            </p>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Cape Town Plumbing Emergency?</h2>
            <a
              href="tel:+27861758623"
              className="text-4xl font-bold hover:underline mb-4 block"
            >
              +27 861 758 623
            </a>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Clock className="w-5 h-5" />
              <span>24/7 service across all Cape Town areas</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Cape Town Service Coverage
              </h2>
              <p className="text-gray-600 mb-6">
                The Drain Surgeon provides comprehensive plumbing services throughout Cape Town, 
                from the CBD and Atlantic Seaboard to the Northern and Southern Suburbs, and the Helderberg area.
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
                ...and throughout the Western Cape. Contact us to confirm service availability in your area.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Cape Town's Trusted Plumbers
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Waves,
                    title: "Water-Wise Solutions",
                    desc: "Expertise in Cape Town's unique water conservation requirements"
                  },
                  {
                    icon: Clock,
                    title: "Fast Response Times",
                    desc: "Multiple teams across Cape Town ensure rapid emergency response"
                  },
                  {
                    icon: CheckCircle,
                    title: "Coastal Expertise",
                    desc: "Specialized knowledge of plumbing challenges in coastal areas"
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

              <div className="mt-6 bg-[var(--color-light-gray)] border-l-4 border-[var(--color-primary-red)] p-6 rounded">
                <h3 className="font-bold text-black mb-2">Save R300 on Your Service</h3>
                <p className="text-gray-600 text-sm">
                  Book and pay online to receive an instant R300 discount on your plumbing service
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Cape Town Plumbing Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Emergency Plumbing",
                  desc: "24/7 emergency response for all plumbing crises",
                  highlight: true
                },
                {
                  title: "Blocked Drains",
                  desc: "High-pressure jetting and CCTV drain inspections"
                },
                {
                  title: "Geyser Services",
                  desc: "Installation, repair, and maintenance of solar and electric geysers"
                },
                {
                  title: "Leak Detection",
                  desc: "Advanced electronic leak detection technology"
                },
                {
                  title: "Pipe Relining",
                  desc: "Trenchless pipe repair - no excavation needed"
                },
                {
                  title: "Water-Saving Solutions",
                  desc: "Rainwater harvesting and greywater systems"
                },
                {
                  title: "Burst Pipes",
                  desc: "Fast repair of burst and leaking pipes"
                },
                {
                  title: "Certificates of Compliance",
                  desc: "COC for property sales and rentals"
                },
                {
                  title: "Commercial Plumbing",
                  desc: "Services for businesses, offices, and retail spaces"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-lg p-6 hover:border-[var(--color-primary-red)] transition-colors ${
                    service.highlight ? 'border-[var(--color-primary-red)] bg-red-50' : 'border-gray-200'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[var(--color-primary-red)] to-[var(--color-deep-red)] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Book Your Cape Town Plumber Now
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Professional service, transparent pricing, and a 15-minute callback guarantee
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
