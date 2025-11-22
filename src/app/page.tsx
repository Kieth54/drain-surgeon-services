import Header from "@/components/sections/header";
import HeroBanner from "@/components/sections/hero-banner";
import BookingFormSection from "@/components/sections/booking-form-section";
import ServicesPaymentSection from "@/components/sections/services-payment";
import ClientsSection from "@/components/sections/clients-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <BookingFormSection />
        <ServicesPaymentSection />
        <ClientsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}