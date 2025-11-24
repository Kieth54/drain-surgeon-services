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
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-wide text-black">
            Services &amp; Payment Options
          </h2>
          <p className="mt-2 text-sm text-secondary-foreground max-w-2xl mx-auto">
            Reliable 24/7 plumbing services with simple, flexible ways to pay on completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-x-12">
          {/* Services Column */}
          <div className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-primary/20 bg-white px-8 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <h3 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-6">
                Services
              </h3>
              <ul className="space-y-3 text-sm text-secondary-foreground">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start justify-center text-center md:justify-start md:text-left"
                  >
                    <span className="mr-2 mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Conditions Column */}
          <div className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-primary/20 bg-white px-8 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <h3 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-6">
                Payment Conditions
              </h3>
              <ul className="space-y-3 text-sm text-secondary-foreground">
                {paymentConditions.map((condition, index) => (
                  <li
                    key={index}
                    className="flex items-start justify-center text-center md:justify-start md:text-left"
                  >
                    <span className="mr-2 mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{condition}</span>
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