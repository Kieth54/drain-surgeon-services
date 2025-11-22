import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Our Products</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Quality plumbing products and equipment from trusted brands
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-[--color-primary-red]">Geysers</h3>
                <ul className="space-y-2 text-[--color-dark-gray]">
                  <li>• Solar geysers</li>
                  <li>• Electric geysers</li>
                  <li>• Gas geysers</li>
                  <li>• Geyser accessories</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-[--color-primary-red]">Pipes & Fittings</h3>
                <ul className="space-y-2 text-[--color-dark-gray]">
                  <li>• PVC pipes</li>
                  <li>• Copper pipes</li>
                  <li>• Pipe fittings</li>
                  <li>• Connectors</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-[--color-primary-red]">Bathroom Fixtures</h3>
                <ul className="space-y-2 text-[--color-dark-gray]">
                  <li>• Taps and faucets</li>
                  <li>• Shower systems</li>
                  <li>• Toilets</li>
                  <li>• Basins and sinks</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-[--color-primary-red]">Drainage Solutions</h3>
                <ul className="space-y-2 text-[--color-dark-gray]">
                  <li>• Drain covers</li>
                  <li>• Gully traps</li>
                  <li>• Inspection chambers</li>
                  <li>• Drainage pipes</li>
                </ul>
              </div>
            </div>

            <div className="bg-[--color-light-gray] p-8 rounded-lg mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
              <p className="mb-6">Our experts can help you select the right products for your needs.</p>
              <a href="tel:+27861758623" className="inline-block bg-[--color-primary-red] text-white font-bold py-3 px-8 rounded hover:bg-[--color-deep-red] transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
