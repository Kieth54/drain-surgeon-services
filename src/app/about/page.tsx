import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-8 text-[--color-primary-red]">About The Drain Surgeon</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Plumbers Since 1979</h2>
              <p className="text-lg mb-4">
                The Drain Surgeon has been providing professional plumbing services for over 40 years. 
                Our commitment to excellence and customer satisfaction has made us one of the most trusted 
                names in the industry.
              </p>
              <p className="text-lg mb-4">
                We specialize in emergency plumbing services, blocked drains, leak detection, and general 
                plumbing maintenance. Our team of experienced, security-cleared professionals is available 
                24/7 to handle any plumbing emergency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[--color-light-gray] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[--color-primary-red]">Our Mission</h3>
                <p>
                  To provide fast, reliable, and professional plumbing services with a focus on 
                  customer satisfaction and quality workmanship.
                </p>
              </div>
              
              <div className="bg-[--color-light-gray] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[--color-primary-red]">Our Vision</h3>
                <p>
                  To be the leading plumbing service provider, known for our emergency response, 
                  skilled technicians, and commitment to excellence.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[--color-primary-red] font-bold mr-2">✓</span>
                  <span><strong>24/7 Emergency Service:</strong> We're available around the clock for all your plumbing emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary-red] font-bold mr-2">✓</span>
                  <span><strong>Experienced Professionals:</strong> Our team has decades of combined experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary-red] font-bold mr-2">✓</span>
                  <span><strong>Security-Cleared Teams:</strong> All our technicians are thoroughly vetted and background-checked</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary-red] font-bold mr-2">✓</span>
                  <span><strong>15-Minute Callback:</strong> We respond to your booking within 15 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-primary-red] font-bold mr-2">✓</span>
                  <span><strong>Trusted by Major Corporations:</strong> Serving clients like McDonald's, Coca-Cola, Woolworths, and more</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
