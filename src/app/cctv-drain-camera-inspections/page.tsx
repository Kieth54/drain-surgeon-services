import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Camera, Search, FileText, CheckCircle } from "lucide-react";

export default function CCTVInspectionPage() {
  const benefits = [
    "Accurate diagnosis of drain problems",
    "No unnecessary digging or excavation",
    "Detailed video footage of pipe interior",
    "Written report with recommendations",
    "Cost-effective problem identification",
    "Locate blockages, cracks, and root intrusion"
  ];

  const whatWeInspect = [
    "Blocked drains and sewers",
    "Pipe damage and cracks",
    "Root intrusion",
    "Collapsed or broken pipes",
    "Pipe misalignment",
    "Build-up and scaling",
    "Foreign objects in pipes",
    "Pipe material deterioration"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">
              CCTV Drain Camera Inspections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced camera technology for accurate drain and pipe diagnostics
            </p>
          </div>

          {/* Emergency CTA */}
          <div className="bg-[var(--color-primary-red)] text-white p-8 rounded-lg text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Need a CCTV Inspection?</h2>
            <p className="text-lg mb-6">Call us now for same-day service</p>
            <a
              href="tel:+27861758623"
              className="inline-block bg-white text-[var(--color-primary-red)] font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors"
            >
              Call: +27 861 758 623
            </a>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What is CCTV Inspection */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">What is CCTV Drain Inspection?</h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                CCTV drain camera inspection is a modern, non-invasive method of examining the interior 
                of your drainage system. Our high-resolution cameras are inserted into your pipes to 
                provide real-time video footage of the pipe's condition.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This technology allows us to accurately identify problems such as blockages, cracks, 
                root intrusion, and structural damage without the need for costly excavation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The camera is attached to a flexible rod that can navigate through your entire drainage 
                system, capturing detailed images that help us provide accurate diagnoses and effective solutions.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-10 h-10 text-[var(--color-primary-red)]" />
                <h2 className="text-3xl font-bold text-black">Benefits of CCTV Inspection</h2>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What We Inspect */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Search className="w-10 h-10 text-[var(--color-primary-red)]" />
              <h2 className="text-3xl font-bold text-black">What We Can Detect</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatWeInspect.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 p-4 rounded-lg text-center hover:border-[var(--color-primary-red)] transition-colors"
                >
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Our Inspection Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Initial Consultation", desc: "We discuss your drainage concerns and schedule an inspection" },
                { step: "2", title: "Camera Insertion", desc: "Our high-tech camera is carefully inserted into your drainage system" },
                { step: "3", title: "Video Recording", desc: "We record detailed footage of your entire pipe system" },
                { step: "4", title: "Report & Recommendations", desc: "You receive a comprehensive report with video evidence and solutions" }
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

          {/* Pricing Section */}
          <div className="bg-[var(--color-light-gray)] rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-10 h-10 text-[var(--color-primary-red)]" />
              <h2 className="text-3xl font-bold text-black">Inspection Pricing</h2>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our CCTV drain inspections are competitively priced and include a detailed video recording 
              and comprehensive written report with recommendations.
            </p>
            <div className="inline-block bg-white border-2 border-[var(--color-primary-red)] rounded-lg p-6">
              <p className="text-[var(--color-primary-red)] text-4xl font-bold mb-2">R1,385</p>
              <p className="text-gray-600">(incl. VAT)</p>
              <p className="text-sm text-gray-500 mt-2">Standard inspection</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
