import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { CheckCircle, Clock, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-[var(--color-success-green)] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl font-bold mb-4 text-black">
              Thank You for Your Booking!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your plumbing service request has been successfully submitted.
            </p>

            {/* Confirmation Details */}
            <div className="bg-[var(--color-light-gray)] rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-black">
                What Happens Next?
              </h2>
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary-red)] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Confirmation Email</h3>
                    <p className="text-gray-600">
                      You will receive a confirmation email with your booking details shortly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary-red)] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">15 Minute Callback</h3>
                    <p className="text-gray-600">
                      Our team will call you back within 15 minutes to confirm your appointment 
                      and discuss any specific requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary-red)] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Plumber Dispatch</h3>
                    <p className="text-gray-600">
                      Our nearest qualified plumber will be dispatched to your location at the scheduled time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary-red)] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Service Completion</h3>
                    <p className="text-gray-600">
                      Your plumbing issue will be resolved professionally and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Callback Promise */}
            <div className="bg-[var(--color-primary-red)] text-white rounded-lg p-8 mb-8">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">15 MINUTES</h3>
              <p className="text-lg">Your business is important to us</p>
              <p className="mt-4 opacity-90">
                If you don't receive a callback within 15 minutes, please contact us directly.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <Phone className="w-8 h-8 text-[var(--color-primary-red)] mx-auto mb-3" />
                <h3 className="font-bold text-black mb-2">Need Immediate Help?</h3>
                <a
                  href="tel:+27861758623"
                  className="text-[var(--color-primary-red)] text-xl font-bold hover:underline"
                >
                  +27 861 758 623
                </a>
                <p className="text-gray-600 text-sm mt-2">24/7 Emergency Line</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <Mail className="w-8 h-8 text-[var(--color-primary-red)] mx-auto mb-3" />
                <h3 className="font-bold text-black mb-2">Email Inquiries</h3>
                <a
                  href="mailto:info@drainsurgeon.co.za"
                  className="text-[var(--color-primary-red)] hover:underline"
                >
                  info@drainsurgeon.co.za
                </a>
                <p className="text-gray-600 text-sm mt-2">General Inquiries</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[var(--color-light-gray)] border-l-4 border-[var(--color-primary-red)] p-6 rounded text-left mb-8">
              <h3 className="font-bold text-black mb-2">Important Reminders:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Please ensure someone is available at the property during the scheduled time</li>
                <li>• Our plumbers will wear masks and follow all safety protocols</li>
                <li>• Payment can be made upon completion of service</li>
                <li>• You saved R300 by booking online!</li>
              </ul>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-[var(--color-primary-red)] text-white font-bold py-3 px-8 rounded hover:bg-[var(--color-deep-red)] transition-colors"
              >
                Return to Homepage
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white border-2 border-[var(--color-primary-red)] text-[var(--color-primary-red)] font-bold py-3 px-8 rounded hover:bg-gray-50 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
