import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you offer 24/7 emergency services?",
      answer: "Yes! We provide 24/7 emergency plumbing services. Call us anytime at +27 861 758 623 for immediate assistance."
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer: "We guarantee a callback within 15 minutes of receiving your booking. Our technicians aim to be on-site as quickly as possible depending on your location."
    },
    {
      question: "Are your plumbers qualified and insured?",
      answer: "Absolutely. All our plumbers are fully qualified, experienced, and carry comprehensive insurance. Our teams are also security-cleared for your peace of mind."
    },
    {
      question: "What areas do you service?",
      answer: "We service multiple branches across South Africa. Use our 'Find Your Branch' page to locate your nearest service area."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Credit Cards (Visa, Mastercard, Maestro), Snapscan, EFT on completion of service, and account payments (with completed application form)."
    },
    {
      question: "Can I save money by booking online?",
      answer: "Yes! Book and pay online to save R300 on your service call."
    },
    {
      question: "Do you provide certificates of compliance?",
      answer: "Yes, we provide Certificates of Compliance (COC) for plumbing work, which are required for property sales and transfers."
    },
    {
      question: "What services do you specialize in?",
      answer: "We specialize in blocked drains, leak detection, burst pipes, geyser repairs and replacements, CCTV drain inspections, and general plumbing services."
    },
    {
      question: "Do I need to be present during the service?",
      answer: "Ideally yes, but if you can't be present, we can arrange for a responsible adult to be on site to grant access and authorize work."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Customer satisfaction is our priority. If you're not completely satisfied, please contact us immediately and we'll make it right."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Frequently Asked Questions</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our plumbing services
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-[--color-medium-gray] rounded-lg p-6 hover:border-[--color-primary-red] transition-colors">
                <h3 className="text-xl font-bold mb-3 text-[--color-black]">{faq.question}</h3>
                <p className="text-[--color-dark-gray]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-[--color-primary-red] text-white p-8 rounded-lg text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">Our friendly team is here to help. Give us a call!</p>
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
