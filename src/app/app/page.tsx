import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Smartphone, Bell, MapPin, Clock, CreditCard, Star } from "lucide-react";

export default function AppPage() {
  const features = [
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Book a plumber in seconds with our easy-to-use interface"
    },
    {
      icon: Bell,
      title: "Real-Time Updates",
      description: "Get instant notifications about your service appointment"
    },
    {
      icon: MapPin,
      title: "Track Your Plumber",
      description: "See your plumber's location and estimated arrival time"
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Pay securely through the app and save R300"
    },
    {
      icon: Star,
      title: "Exclusive Specials",
      description: "Access app-only deals and promotional offers"
    },
    {
      icon: Smartphone,
      title: "Service History",
      description: "View all your past services and invoices in one place"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Download The Drain Surgeon App
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book plumbers, track services, and get exclusive app-only specials
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>
            </div>

            {/* App Screenshot Placeholder */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-100 rounded-lg p-8 border-2 border-[var(--color-primary-red)]">
                <Smartphone className="w-24 h-24 mx-auto text-[var(--color-primary-red)] mb-4" />
                <p className="text-gray-600">App interface preview</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              App Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-[var(--color-primary-red)] rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary-red)]" />
                    <h3 className="text-xl font-bold mb-3 text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-[var(--color-primary-red)] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Save R300 When You Book Through The App!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Download our app today and get exclusive access to special offers and discounts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
              <a
                href="#"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
