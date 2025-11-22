import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function TVAdvertsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Our TV Adverts</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Watch our television commercials showcasing our emergency plumbing services
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[--color-light-gray] rounded-lg p-6">
                <div className="aspect-video bg-[--color-medium-gray] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl">▶️</div>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Response</h3>
                <p className="text-[--color-dark-gray]">
                  See how our teams respond to plumbing emergencies at any time of day or night.
                </p>
              </div>

              <div className="bg-[--color-light-gray] rounded-lg p-6">
                <div className="aspect-video bg-[--color-medium-gray] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl">▶️</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                <p className="text-[--color-dark-gray]">
                  Learn about our security-cleared teams and professional approach to plumbing.
                </p>
              </div>

              <div className="bg-[--color-light-gray] rounded-lg p-6">
                <div className="aspect-video bg-[--color-medium-gray] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl">▶️</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Blocked Drain Solutions</h3>
                <p className="text-[--color-dark-gray]">
                  Watch our specialists tackle even the toughest blocked drain challenges.
                </p>
              </div>

              <div className="bg-[--color-light-gray] rounded-lg p-6">
                <div className="aspect-video bg-[--color-medium-gray] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl">▶️</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Testimonials</h3>
                <p className="text-[--color-dark-gray]">
                  Hear directly from our satisfied customers about their experiences.
                </p>
              </div>
            </div>

            <div className="bg-[--color-primary-red] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
              <p className="text-xl mb-6">We're available 24/7 for all your plumbing needs</p>
              <a href="tel:+27861758623" className="inline-block bg-white text-[--color-primary-red] font-bold py-3 px-8 rounded hover:bg-[--color-light-gray] transition-colors mr-4">
                Call +27 861 758 623
              </a>
              <a href="/" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-[--color-primary-red] transition-colors">
                Book Online
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
