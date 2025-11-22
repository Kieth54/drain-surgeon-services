import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Droplets, Zap, Shield, CheckCircle } from "lucide-react";

export default function HighPressureJettingPage() {
  const benefits = [
    "Removes stubborn blockages effectively",
    "Cleans pipe walls thoroughly",
    "Environmentally friendly - no harsh chemicals",
    "Prevents future blockages",
    "Safe for all pipe types",
    "Cost-effective long-term solution"
  ];

  const applications = [
    { title: "Blocked Drains", desc: "Clear severe blockages that traditional methods can't remove" },
    { title: "Grease Build-up", desc: "Remove accumulated fats, oils, and grease from commercial kitchens" },
    { title: "Root Intrusion", desc: "Cut through tree roots that have penetrated your pipes" },
    { title: "Scale & Debris", desc: "Remove mineral deposits and accumulated debris" },
    { title: "Sewer Lines", desc: "Clean main sewer lines and restore full flow capacity" },
    { title: "Storm Drains", desc: "Clear outdoor drainage systems of leaves and sediment" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">
              High-Pressure Water Jetting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful drain cleaning technology for the toughest blockages
            </p>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Blocked Drain Emergency?</h2>
            <p className="text-lg mb-6">Our high-pressure jetting service is available 24/7</p>
            <a
              href="tel:+27861758623"
              className="inline-block bg-white text-[var(--color-primary-red)] font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors"
            >
              Call: +27 861 758 623
            </a>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What is High-Pressure Jetting */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">What is High-Pressure Jetting?</h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                High-pressure water jetting, also known as hydro-jetting, is an advanced drain cleaning 
                method that uses pressurized water to remove even the most stubborn blockages from your pipes.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our specialized equipment delivers water at pressures up to 4,000 PSI, powerful enough to 
                cut through tree roots, dissolve grease build-up, and blast away years of accumulated debris.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Unlike traditional drain snakes that simply punch holes through blockages, high-pressure 
                jetting actually cleans the entire interior surface of the pipe, restoring it to near-original condition.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This method is environmentally friendly as it uses only water - no harsh chemicals that could 
                damage your pipes or harm the environment.
              </p>
            </div>

            {/* Why Choose Jetting */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">Why Choose Jetting?</h2>
              </div>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[var(--color-light-gray)] border-l-4 border-[var(--color-primary-red)] p-6 rounded">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[var(--color-primary-red)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-2">Safe & Effective</h3>
                    <p className="text-gray-600 text-sm">
                      Our experienced technicians are trained to use high-pressure jetting equipment 
                      safely and effectively on all types of pipes without causing damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              What We Can Clear
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[var(--color-primary-red)] transition-colors"
                >
                  <h3 className="text-xl font-bold mb-3 text-black">{app.title}</h3>
                  <p className="text-gray-600">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Our Jetting Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Inspection", desc: "We inspect your drains to assess the blockage" },
                { step: "2", title: "Equipment Setup", desc: "Our high-pressure jetting equipment is positioned" },
                { step: "3", title: "Jetting", desc: "Pressurized water clears the blockage and cleans pipes" },
                { step: "4", title: "Verification", desc: "We verify clear flow and provide maintenance advice" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary-red)] text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-[var(--color-light-gray)] rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Service Pricing</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Competitive rates for residential and commercial high-pressure jetting services. 
              Contact us for a detailed quote based on your specific needs.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-[var(--color-primary-red)] text-white font-bold py-3 px-8 rounded hover:bg-[var(--color-deep-red)] transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
