import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-black">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Get in touch with The Drain Surgeon. We're here to help 24/7.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Emergency Contact */}
                <div className="bg-[var(--color-primary-red)] text-white p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">24/7 Emergency Line</h3>
                      <a href="tel:+27861758623" className="text-2xl font-bold hover:underline">
                        +27 861 758 623
                      </a>
                      <p className="mt-2 text-sm opacity-90">
                        Available around the clock for all plumbing emergencies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border-2 border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 text-[var(--color-primary-red)] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-black">Email Us</h3>
                      <a href="mailto:info@drainsurgeon.co.za" className="text-[var(--color-primary-red)] hover:underline">
                        info@drainsurgeon.co.za
                      </a>
                      <p className="mt-2 text-gray-600 text-sm">
                        For general inquiries and quotes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="border-2 border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 mt-1 text-[var(--color-primary-red)] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-black">Office Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 8:00 AM - 1:00 PM</p>
                        <p>Sunday: Emergency calls only</p>
                        <p className="font-bold text-[var(--color-primary-red)] mt-2">
                          Emergency service available 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="border-2 border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 text-[var(--color-primary-red)] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-black">Service Areas</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Gauteng (Johannesburg, Krugersdorp)</li>
                        <li>• Cape Town</li>
                        <li>• Durban</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[var(--color-primary-red)] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[var(--color-primary-red)] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[var(--color-primary-red)] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[var(--color-primary-red)] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Service Area
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[var(--color-primary-red)] outline-none">
                    <option value="">Select your area</option>
                    <option value="johannesburg">Johannesburg</option>
                    <option value="krugersdorp">Krugersdorp</option>
                    <option value="capetown">Cape Town</option>
                    <option value="durban">Durban</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[var(--color-primary-red)] outline-none resize-none"
                    placeholder="Tell us about your plumbing needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary-red)] text-white font-bold py-4 rounded hover:bg-[var(--color-deep-red)] transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We will respond within 15 minutes during business hours
                </p>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-black">
              Our Service Coverage
            </h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600 text-lg">Map showing service areas</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
