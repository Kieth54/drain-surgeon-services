import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Contact Us</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Get in touch with The Drain Surgeon. We're here to help 24/7.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[--color-primary-red]">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📞</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">24/7 Emergency Hotline</h3>
                      <a href="tel:+27861758623" className="text-[--color-primary-red] text-xl font-bold hover:underline">
                        +27 861 758 623
                      </a>
                      <p className="text-sm text-[--color-dark-gray]">Available 24 hours a day, 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl mr-4">✉️</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <a href="mailto:info@drainsurgeon.co.za" className="text-[--color-primary-red] hover:underline">
                        info@drainsurgeon.co.za
                      </a>
                      <p className="text-sm text-[--color-dark-gray]">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📍</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Head Office</h3>
                      <p className="text-[--color-dark-gray]">
                        123 Main Street<br />
                        Johannesburg, 2000<br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl mr-4">⏰</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                      <p className="text-[--color-dark-gray]">
                        24/7 Emergency Service<br />
                        Office Hours: Mon-Fri 8am-5pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[--color-light-gray] p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">We Promise:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[--color-primary-red] mr-2">✓</span>
                      <span>15-minute callback guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[--color-primary-red] mr-2">✓</span>
                      <span>Professional, security-cleared teams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[--color-primary-red] mr-2">✓</span>
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[--color-primary-red] mr-2">✓</span>
                      <span>Quality workmanship guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[--color-primary-red]">Send Us a Message</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold mb-2">
                        First Name <span className="text-[--color-primary-red]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border-2 border-[--color-medium-gray] rounded focus:border-[--color-primary-red] focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold mb-2">
                        Last Name <span className="text-[--color-primary-red]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border-2 border-[--color-medium-gray] rounded focus:border-[--color-primary-red] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">
                      Email <span className="text-[--color-primary-red]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border-2 border-[--color-medium-gray] rounded focus:border-[--color-primary-red] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">
                      Phone Number <span className="text-[--color-primary-red]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border-2 border-[--color-medium-gray] rounded focus:border-[--color-primary-red] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold mb-2">
                      Subject <span className="text-[--color-primary-red]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border-2 border-[--color-medium-gray] rounded focus:border-[--color-primary-red] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-2">
                      Message <span className="text-[--color-primary-red]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border-2 border-[--color-medium-gray] rounded focus:border-[--color-primary-red] focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[--color-primary-red] text-white font-bold py-3 px-8 rounded hover:bg-[--color-deep-red] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-[--color-primary-red] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-lg mb-6">Don't wait - call us now for emergency plumbing service</p>
              <a href="tel:+27861758623" className="inline-block bg-white text-[--color-primary-red] font-bold py-3 px-8 rounded hover:bg-[--color-light-gray] transition-colors text-xl">
                📞 +27 861 758 623
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
