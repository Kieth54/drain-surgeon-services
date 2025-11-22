import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Wrench, Shovel, Clock, CheckCircle, TrendingUp } from "lucide-react";

export default function PipeReliningPage() {
  const benefits = [
    "No excavation required - save your landscaping",
    "Faster completion than traditional methods",
    "Cost-effective compared to pipe replacement",
    "Minimal disruption to your property",
    "Long-lasting 50+ year warranty",
    "Seamless, joint-free pipe interior",
    "Resistant to root intrusion",
    "Environmentally friendly solution"
  ];

  const suitableFor = [
    "Cracked or broken pipes",
    "Root-damaged pipes",
    "Corroded pipes",
    "Leaking joints",
    "Pipe misalignment",
    "Aging pipe systems"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Trenchless Pipe Relining
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern no-dig pipe repair technology - save your garden and your wallet
            </p>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Need Pipe Repair?</h2>
            <p className="text-lg mb-6">Ask us about our trenchless pipe relining solutions</p>
            <a
              href="tel:+27861758623"
              className="inline-block bg-white text-[var(--color-primary-red)] font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors"
            >
              Call: +27 861 758 623
            </a>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What is Pipe Relining */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">What is Pipe Relining?</h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pipe relining, also known as cured-in-place pipe (CIPP), is a revolutionary trenchless 
                technology that repairs damaged pipes from the inside without any digging or excavation.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The process involves inserting a resin-saturated liner into the damaged pipe. This liner 
                is then inflated and cured in place, creating a strong, seamless "pipe within a pipe" 
                that's as durable as a brand new pipe.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The new lining is resistant to root intrusion, corrosion, and can last for 50+ years, 
                making it a long-term solution that's often more cost-effective than traditional pipe replacement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Best of all, the entire process can typically be completed in just one day, with minimal 
                disruption to your daily routine and no damage to your landscaping.
              </p>
            </div>

            {/* Traditional vs Relining */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shovel className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">Why Not Dig?</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-bold text-black mb-2">Traditional Pipe Replacement:</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>✗ Excavation destroys landscaping</li>
                    <li>✗ Takes multiple days or weeks</li>
                    <li>✗ Expensive restoration costs</li>
                    <li>✗ Disrupts entire property</li>
                    <li>✗ May require permits and inspections</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h3 className="font-bold text-black mb-2">Trenchless Pipe Relining:</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>✓ No digging or excavation</li>
                    <li>✓ Completed in 1 day typically</li>
                    <li>✓ No restoration needed</li>
                    <li>✓ Minimal property disruption</li>
                    <li>✓ Often more cost-effective</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <CheckCircle className="w-10 h-10 text-[var(--color-primary-red)]" />
              <h2 className="text-3xl font-bold text-black">Benefits of Pipe Relining</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center hover:border-[var(--color-primary-red)] transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-[var(--color-success-green)] mx-auto mb-2" />
                  <p className="text-gray-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">Suitable For</h2>
              </div>
              <div className="space-y-3">
                {suitableFor.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[var(--color-light-gray)] p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success-green)] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">The Process</h2>
              </div>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Inspection", desc: "CCTV camera inspection identifies the problem areas" },
                  { num: "2", title: "Cleaning", desc: "High-pressure jetting cleans the pipe interior" },
                  { num: "3", title: "Insertion", desc: "Resin-saturated liner is inserted into the pipe" },
                  { num: "4", title: "Curing", desc: "Liner is inflated and cured using heat or UV light" },
                  { num: "5", title: "Verification", desc: "Final inspection confirms perfect installation" }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-[var(--color-primary-red)] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Warranty & Pricing */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-light-gray)] rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-black">50+ Year Warranty</h3>
              <p className="text-gray-600 mb-6">
                Our pipe relining solutions come with an industry-leading warranty, giving you peace of mind for decades to come.
              </p>
              <CheckCircle className="w-16 h-16 text-[var(--color-success-green)] mx-auto" />
            </div>

            <div className="bg-[var(--color-primary-red)] text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Get a Quote</h3>
              <p className="mb-6">
                Every pipe relining project is unique. Contact us for a detailed assessment and competitive quote.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-[var(--color-primary-red)] font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors"
              >
                Request Assessment
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
