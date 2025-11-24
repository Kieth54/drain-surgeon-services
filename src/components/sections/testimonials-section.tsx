"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { useOptimizedTimer } from "@/hooks/useOptimizedTimer";

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
      "Fast efficient and professional service. Solved a difficult problem and returned promptly to fix a second issue within 5 days. Highly recommended for all difficult drain and plumbing problems!",
    name: "Cyril Harrisberg",
    date: "2022-05-25",
    rating: 5,
  },
  {
    quote:
      "Besides being the best plumbing company, Drain Surgeon is one of the best companies I’ve ever dealt with – all round professional, excellent service and so pleasant to deal with. What’s more, their call out rate is the same 7 days per week.",
    name: "Raze Katz",
    date: "2022-02-25",
    rating: 5,
  },
  {
    quote: "They were on time and did a good job.",
    name: "Bettie Strauss",
    date: "2020-08-25",
    rating: 5,
  },
  {
    quote:
      "I appreciated the call from the head office regarding my complaint. Kathy was very fast to contact me. For that reason I am giving them 5 stars.",
    name: "Adam Thabet",
    date: "2019-08-25",
    rating: 5,
  },
  {
    quote: "On time and of good help.",
    name: "Lee-anne Booys",
    date: "2021-08-25",
    rating: 5,
  },
  {
    quote:
      "David and Jean were both professional and thorough when clearing and solving a blocked sewerage pipe. They arrived on time and it was a pleasure dealing with them both.",
    name: "Dyan Belonje",
    date: "2020-08-25",
    rating: 5,
  },
  {
    quote: "Friendly staff, quick solutions and reasonably priced. Highly recommended!",
    name: "Chavonne Snyman",
    date: "2019-08-25",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const validTestimonials = testimonialsData.filter((t) => t.quote);

  // Always show up to 7 cards in the loop
  const displayTestimonials: Testimonial[] = validTestimonials.length
    ? Array.from({ length: 7 }, (_, i) => validTestimonials[i % validTestimonials.length])
    : [];

  // Use optimized timer for testimonials rotation
  useOptimizedTimer(
    'testimonials-rotation',
    5000,
    () => {
      if (displayTestimonials.length > 0) {
        setActiveIndex((prev) => (prev + 1) % displayTestimonials.length);
      }
    },
    displayTestimonials.length > 0
  );

  return (
    <section className="bg-light-gray pt-[60px] pb-10">
      <div className="container mx-auto px-10">
        <h3 className="text-center text-2xl font-bold text-[#626262] mb-3">
          Read our client feedback
        </h3>
        <p className="text-center text-sm text-dark-gray mb-10 max-w-xl mx-auto">
          Real reviews from homeowners and businesses who trust The Drain Surgeon with their plumbing emergencies.
        </p>

        {displayTestimonials.length > 0 && (
          <div className="relative mx-auto max-w-5xl overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / displayTestimonials.length)}%)` }}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[220px] max-w-[260px] flex-[0_0_auto] rounded-2xl bg-white px-4 py-5 shadow-[0_10px_35px_rgba(15,23,42,0.16)]"
                >
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          testimonial.rating && i < testimonial.rating
                            ? "text-yellow-gold fill-yellow-gold"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-[12px] leading-relaxed text-dark-gray italic line-clamp-4">
                    {testimonial.quote}
                  </p>
                  <div className="mt-3 text-xs font-semibold text-black">
                    {testimonial.name}
                  </div>
                  {testimonial.date && (
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {testimonial.date}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;