import React from 'react';

const services = [
  "General 24HR Plumbing",
  "Geyser Repairs & Replacements",
  "Blocked Drains",
  "Electronic Leak Detection",
  "Burst and Leaking Pipes",
  "CCTV Camera Drain Inspections",
  "Septic Tanks & French Drains",
];

const paymentConditions = [
  "Credit Card/Yoco",
  "Snapscan",
  "EFT on Completion of Service",
  "Account (Application Form Completed)",
];

const ServicesPaymentSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12">
          {/* Services Column */}
          <div>
            <h2 className="text-primary font-bold text-xl uppercase mb-6 tracking-wide text-center">
              SERVICES
            </h2>
            <div className="border-2 border-primary rounded-lg px-8 py-10 bg-white h-full">
              <ul className="space-y-5">
                {services.map((service, index) => (
                  <li key={index} className="text-secondary-foreground text-center text-base leading-relaxed font-sans">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Conditions Column */}
          <div>
            <h2 className="text-primary font-bold text-xl uppercase mb-6 tracking-wide text-center">
              PAYMENT CONDITIONS:
            </h2>
            <div className="border-2 border-primary rounded-lg px-8 py-10 bg-white h-full flex flex-col justify-center">
               <ul className="space-y-5">
                {paymentConditions.map((condition, index) => (
                  <li key={index} className="text-secondary-foreground text-center text-base leading-relaxed font-sans">
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPaymentSection;