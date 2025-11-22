import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Franchise Opportunities</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Join South Africa's trusted plumbing brand. Build a successful business with our proven system.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[--color-light-gray] rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Join The Drain Surgeon?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-[--color-primary-red] text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-bold mb-2">Established Brand</h3>
                    <p className="text-[--color-dark-gray]">Since 1979, we've built a reputation for excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[--color-primary-red] text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-bold mb-2">Comprehensive Training</h3>
                    <p className="text-[--color-dark-gray]">Full support and training programs for franchisees</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[--color-primary-red] text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-bold mb-2">Marketing Support</h3>
                    <p className="text-[--color-dark-gray]">National marketing campaigns and local support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[--color-primary-red] text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-bold mb-2">Proven System</h3>
                    <p className="text-[--color-dark-gray]">Tested business model with strong ROI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What We're Looking For</h2>
              <div className="space-y-4">
                <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Entrepreneurial Spirit</h3>
                  <p className="text-[--color-dark-gray]">
                    Passionate individuals ready to build and grow their own business
                  </p>
                </div>
                <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                  <p className="text-[--color-dark-gray]">
                    Commitment to providing exceptional customer service
                  </p>
                </div>
                <div className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Business Acumen</h3>
                  <p className="text-[--color-dark-gray]">
                    Strong business management and leadership skills
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Investment Requirements</h2>
              <div className="bg-white border-2 border-[--color-primary-red] rounded-lg p-8">
                <ul className="space-y-3 text-lg">
                  <li>• Initial franchise fee</li>
                  <li>• Equipment and vehicle setup</li>
                  <li>• Working capital requirements</li>
                  <li>• Marketing launch package</li>
                </ul>
                <p className="mt-6 text-[--color-dark-gray] italic">
                  Contact us for detailed investment information and franchise prospectus
                </p>
              </div>
            </div>

            <div className="bg-[--color-primary-red] text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6">Contact us today to learn more about franchise opportunities</p>
              <a href="tel:+27861758623" className="inline-block bg-white text-[--color-primary-red] font-bold py-3 px-8 rounded hover:bg-[--color-light-gray] transition-colors mr-4">
                Call +27 861 758 623
              </a>
              <a href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-[--color-primary-red] transition-colors">
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
