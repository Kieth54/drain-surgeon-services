import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  const services = [
    {
      title: "General 24HR Plumbing",
      description: "Emergency plumbing services available 24/7 for all your urgent plumbing needs.",
      icon: "🔧"
    },
    {
      title: "Geyser Repairs & Replacements",
      description: "Expert geyser installation, repair, and maintenance services.",
      icon: "♨️"
    },
    {
      title: "Blocked Drains",
      description: "Professional drain clearing and unblocking services using advanced equipment.",
      icon: "💧"
    },
    {
      title: "Electronic Leak Detection",
      description: "State-of-the-art leak detection technology to find hidden leaks quickly.",
      icon: "🔍"
    },
    {
      title: "Burst and Leaking Pipes",
      description: "Fast response to pipe emergencies to minimize water damage.",
      icon: "🚰"
    },
    {
      title: "CCTV Camera Drain Inspections",
      description: "Advanced camera inspections to diagnose drain issues accurately.",
      icon: "📹"
    },
    {
      title: "Septic Tanks & French Drains",
      description: "Complete septic tank and French drain installation and maintenance.",
      icon: "🏗️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Our Services</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive plumbing solutions for residential and commercial clients. 
            Available 24/7 for emergency services.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-[--color-primary-red] rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-[--color-black]">{service.title}</h3>
                <p className="text-center text-[--color-dark-gray]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[--color-primary-red] text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Emergency Service Available 24/7</h2>
            <p className="text-xl mb-6">Call us now for immediate assistance</p>
            <a href="tel:+27861758623" className="inline-block bg-white text-[--color-primary-red] font-bold py-3 px-8 rounded hover:bg-[--color-light-gray] transition-colors">
              +27 861 758 623
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
