import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Customer Testimonials</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            See what our satisfied customers have to say about our plumbing services
          </p>
        </div>
        
        <TestimonialsSection />

        <div className="container mt-12">
          <div className="bg-[--color-primary-red] text-white p-8 rounded-lg text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Experience Our Service</h2>
            <p className="mb-6">Join thousands of satisfied customers. Book your plumber today!</p>
            <a href="/" className="inline-block bg-white text-[--color-primary-red] font-bold py-3 px-8 rounded hover:bg-[--color-light-gray] transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
