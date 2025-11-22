"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote?: string;
  readMoreUrl?: string;
  name?: string;
  nameUrl?: string;
  date?: string;
  rating?: number;
};

const testimonialsData: Testimonial[] = [
  {
    quote:
      "Besides being the best plumbing company, Drain Surgeon is one of the best companies I’ve ever dealt with - all round Professional , excellent service and so pleasant to...",
    readMoreUrl: "#",
    name: "R-zE KATZ",
    nameUrl: "#",
    date: "2022-02-25",
    rating: 5,
  },
  {},
  {},
  {},
  {},
  {},
  {},
];

const TestimonialsSection = () => {
  const activeIndex = 0;
  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section className="bg-light-gray pt-[60px] pb-10">
      <div className="container mx-auto px-10">
        <h3 className="text-center text-2xl font-bold text-[#626262] mb-12">
          Read our client feedback:
        </h3>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative flex items-center justify-center">
            <button className="hidden md:block absolute left-[-60px] top-1/2 -translate-y-1/2 text-[#bebebe] hover:text-dark-gray transition-colors">
              <ChevronLeft size={36} />
            </button>

            {currentTestimonial.quote && (
              <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] w-full text-center py-10 px-12 relative">
                <span className="font-serif text-7xl text-gray-200/80 absolute top-4 left-6 z-0">
                  “
                </span>
                <span className="font-serif text-7xl text-gray-200/80 absolute top-4 right-6 z-0">
                  ”
                </span>

                <div className="relative z-10">
                  <div className="flex justify-center mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          currentTestimonial.rating && i < currentTestimonial.rating
                            ? "text-yellow-gold fill-yellow-gold"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="text-dark-gray italic text-lg leading-relaxed mb-5">
                    {currentTestimonial.quote}
                    <a
                      href={currentTestimonial.readMoreUrl}
                      className="text-primary-red hover:underline ml-1"
                    >
                      read more
                    </a>
                  </blockquote>

                  <div className="flex justify-center items-center my-6 space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-[90px] h-[90px] rounded-full bg-gray-200 mb-4 overflow-hidden">
                      {/* Placeholder for reviewer's avatar image */}
                    </div>
                    <h5 className="font-bold text-black text-base">
                      <a
                        href={currentTestimonial.nameUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-primary-red transition-colors"
                      >
                        {currentTestimonial.name}
                      </a>
                    </h5>
                    <p className="text-sm text-dark-gray mt-1">
                      {currentTestimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 text-[#bebebe] hover:text-dark-gray transition-colors">
              <ChevronRight size={36} />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-gray-600"
                    : "border border-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;