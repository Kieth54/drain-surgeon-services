import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function DownloadAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-[--color-primary-red]">Download Our App</h1>
            <p className="text-xl mb-8">
              Get exclusive specials and book plumbing services on the go
            </p>

            <div className="bg-[--color-light-gray] rounded-lg p-12 mb-12">
              <div className="mb-8">
                <div className="text-6xl mb-4">📱</div>
                <h2 className="text-3xl font-bold mb-4">The Drain Surgeon App</h2>
                <p className="text-lg text-[--color-dark-gray] mb-8">
                  Book services, track your plumber, view exclusive app-only specials, and more!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#" className="inline-block">
                  <div className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[--color-dark-gray] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">📱</span>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-lg font-bold">App Store</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="inline-block">
                  <div className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[--color-dark-gray] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">▶️</span>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-lg font-bold">Google Play</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Fast Booking</h3>
                <p className="text-[--color-dark-gray]">
                  Book a plumber in seconds with our streamlined mobile interface
                </p>
              </div>

              <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-3">Exclusive Specials</h3>
                <p className="text-[--color-dark-gray]">
                  Access app-only discounts and special offers on services
                </p>
              </div>

              <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3">Track Your Plumber</h3>
                <p className="text-[--color-dark-gray]">
                  See real-time updates on your plumber's arrival time
                </p>
              </div>
            </div>

            <div className="bg-[--color-primary-red] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Need Help Now?</h2>
              <p className="mb-6">Don't have the app? Call us for immediate assistance</p>
              <a href="tel:+27861758623" className="inline-block bg-white text-[--color-primary-red] font-bold py-3 px-8 rounded hover:bg-[--color-light-gray] transition-colors">
                +27 861 758 623
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
