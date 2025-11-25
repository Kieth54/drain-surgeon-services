"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import plumbImg from "@/assets/plumb_1.webp";
import cameraImg from "@/assets/camera_nrew-1.webp";
import burstImg from "@/assets/burst_pipes_new.webp";
import geyserImg from "@/assets/geyser_new.webp";
import runningToiletImg from "@/assets/HOW TO FIX A RUNNING TOILET YOURSELF.webp";
import preventLeaksImg from "@/assets/PREVENT LEAKS.webp";

type BlogPost = {
  title: string;
  excerpt: string;
  longDescription: string;
  date: string;
  category: string;
  url: string;
  image: any;
};

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      title: "Hydro jetting drain services: 7 reasons to book today",
      excerpt:
        "Seven clear reasons why high‑pressure hydro jetting is one of the best ways to clear stubborn blockages and protect your drains.",
      longDescription:
        "Hydro jetting uses a high‑pressure hose and precision nozzle to send water through your drains at up to 8,000 PSI. The article explains when to consider it – like slow draining fixtures, bad smells, gurgling noises, recurring blockages and water pooling outside – and why it’s so effective. It doesn’t just punch a small hole: it scours the full pipe interior, removes fat, scale and roots, is eco‑friendly because it uses only water, works on most common pipe materials, and helps prevent costly future repairs. It also compares hydro jetting to snaking and harsh chemicals, showing why a full, non‑corrosive clean done by trained Drain Surgeon plumbers is safer and longer‑lasting than DIY options.",
      date: "2023-11-01",
      category: "Blocked Drains",
      url: "https://example.com/hydro-jetting-drain-services-7-reasons-to-book-today/",
      image: plumbImg,
    },
    {
      title: "How to save money on your plumbing bills",
      excerpt: "Simple habits and maintenance tips to keep your water use under control and avoid costly call-outs.",
      longDescription:
        "This article gives a clear checklist for bringing your plumbing costs down. It starts with scheduling regular maintenance so small faults are fixed before they become expensive, and urges you to repair leaks as soon as you spot them so water and money aren’t wasted. It explains how insulating hot‑water pipes and using low‑flow shower heads and toilets can cut both water and energy bills, and why being careful about what you put down the drain helps avoid costly blockages. It also recommends keeping a small emergency plumbing fund for unexpected repairs, and reminds you that Drain Surgeon’s security‑screened plumbers are available 24/7 to help with anything from minor leaks to major breakdowns.",
      date: "2023-10-20",
      category: "Saving Money",
      url: "https://example.com/how-to-save-money-on-your-plumbing-bills/",
      image: cameraImg,
    },
    {
      title: "The importance of regular plumbing maintenance",
      excerpt: "Why routine inspections and servicing are essential to prevent emergencies and extend the life of your plumbing.",
      longDescription:
        "Regular plumbing maintenance is all about preventing problems before they become disasters. The article explains how planned inspections help detect early signs of leaks, corrosion and blocked drains, reducing the risk of burst pipes, sewage overflows and water damage inside walls or under floors. By keeping pipes, geysers and drainage in good condition, you protect your family’s health, avoid structural damage to your home and extend the lifespan of your plumbing system – which means far fewer emergency call‑outs and big repair bills over time.",
      date: "2023-09-30",
      category: "Maintenance",
      url: "https://example.com/importance-of-regular-plumbing-maintenance/",
      image: geyserImg,
    },
    {
      title: "The dangers of ignoring a blocked drain",
      excerpt: "Learn what can happen if you leave a blocked drain too long and how to catch problems early.",
      longDescription:
        "A slow or blocked drain is more than an inconvenience – it can lead to overflowing sewage, bad smells in your home and even structural damage if water starts undermining foundations. The Drain Surgeon article walks through early warning signs, health risks from contaminated water and why getting a professional in quickly is the safest option.",
      date: "2023-09-10",
      category: "Blocked Drains",
      url: "https://example.com/the-dangers-of-ignoring-a-blocked-drain/",
      image: burstImg,
    },
    {
      title: "How to unblock your toilet",
      excerpt: "Step-by-step advice to safely clear a blocked toilet and when to call a professional instead.",
      longDescription:
        "This step‑by‑step guide explains how to deal with a blocked toilet calmly and safely. It covers which plungers work best, how to use them correctly, why you should be careful with chemical products, and when a more serious blockage in the main line means it’s time to stop trying and call a professional plumber.",
      date: "2023-08-25",
      category: "How To",
      url: "https://example.com/how-to-unblock-your-toilet/",
      image: plumbImg,
    },
    {
      title: "Common holiday plumbing problems",
      excerpt: "A look at the plumbing issues that strike most often over the holidays and how to avoid them.",
      longDescription:
        "The festive season puts extra pressure on your plumbing as more people use the kitchen and bathrooms. The article lists typical holiday problems – like guests over‑flushing toilets, fat and grease going down the sink, and pipes bursting while you’re away – and gives practical tips to prepare your home before the holidays begin.",
      date: "2023-08-05",
      category: "Seasonal Tips",
      url: "https://example.com/common-holiday-plumbing-problems/",
      image: cameraImg,
    },
    {
      title: "How to keep your drain in tip-top condition",
      excerpt: "Everyday best practices to keep sinks, showers and outside drains flowing freely.",
      longDescription:
        "Good drain habits make a huge difference over time. This piece explains what should and shouldn’t go down your kitchen sink, how strainers and regular hot‑water flushes help, and why cleaning outside gulleys and stormwater drains before rainy season can prevent unexpected flooding.",
      date: "2023-07-18",
      category: "Prevention",
      url: "https://example.com/how-to-keep-your-drain-in-tip-top-condition/",
      image: geyserImg,
    },
    {
      title: "Want to fix a running toilet? Here's how",
      excerpt: "A practical walkthrough for diagnosing and fixing a running toilet, and when to call a plumber.",
      longDescription:
        "A running toilet can quietly waste hundreds of litres of water. This guide shows you how to check the flapper, float and fill valve inside the cistern, what simple adjustments you can make yourself, and when worn parts or hidden leaks mean you should rather book a qualified plumber.",
      date: "2023-07-01",
      category: "How To",
      url: "https://example.com/how-to-fix-a-running-toilet-yourself/",
      image: runningToiletImg,
    },
    {
      title: "Prevent leaks at home",
      excerpt: "Proactive checks and simple upgrades that reduce the risk of leaks and water damage.",
      longDescription:
        "This guide focuses on stopping leaks before they start. It looks at common weak points like flexible hoses to toilets and basins, old galvanised pipes and high water pressure, and explains how simple checks – including watching your water meter when everything is off – can reveal hidden leaks early.",
      date: "2023-06-15",
      category: "Prevention",
      url: "https://example.com/prevent-leaks-in-your-home-heres-how/",
      image: preventLeaksImg,
    },
  ];

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const closeModal = () => setSelectedPost(null);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f3f4f6,_#ffffff)] page-fade">
      <Header />
      <main className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        {/* Animated background blobs */}
        <div
          className="hero-animated-blob pointer-events-none -left-40 top-32 h-64 w-64 hidden lg:block opacity-40"
          aria-hidden="true"
        />
        <div
          className="hero-animated-blob pointer-events-none right-[-60px] top-1/2 h-72 w-72 hidden lg:block opacity-30"
          aria-hidden="true"
        />
        <div
          className="hero-animated-blob pointer-events-none -left-24 bottom-[-80px] h-56 w-56 hidden lg:block opacity-35"
          aria-hidden="true"
        />

        {/* Hero section */}
        <section className="bg-white">
          <div className="container max-w-4xl">
            <div className="relative text-center">
              <div
                className="hero-animated-blob -left-24 -top-24 h-56 w-56 hidden lg:block"
                aria-hidden="true"
              />
              <div
                className="hero-animated-blob -right-16 bottom-[-40px] h-48 w-48 hidden lg:block opacity-60"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">
                Plumbing blog
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                Tips &amp; advice from
                <span className="text-primary-red"> The Drain Surgeon</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Practical guides, maintenance tips and insights to help you look after your plumbing,
                avoid emergencies and know when it&apos;s time to call in the experts.
              </p>
            </div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="mt-12">
          <div className="container max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-red mb-2">
                      {post.category}
                    </div>
                    <h2 className="text-base sm:text-lg font-bold mb-2 text-black group-hover:text-primary-red transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[13px] text-[#555555] leading-relaxed mb-4 line-clamp-4">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-[11px] text-[#888888]">
                      <span>{post.date}</span>
                      <button
                        type="button"
                        className="font-semibold text-primary-red hover:underline"
                        onClick={() => setSelectedPost(post)}
                      >
                        View more
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {selectedPost && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4 py-6"
            onClick={closeModal}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-red mb-2">
                  {selectedPost.category}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
                  {selectedPost.title}
                </h2>
                <div className="text-[11px] text-[#999999] mb-3">{selectedPost.date}</div>
                <p className="text-[13px] text-[#555555] leading-relaxed mb-5 max-h-40 overflow-y-auto">
                  {selectedPost.longDescription}
                </p>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-full border border-gray-200 px-5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <section className="mt-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Need a plumber, not just advice?</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                When a leaking pipe or blocked drain can&apos;t wait, our 24/7 teams are ready to help
                anywhere in South Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+27861758623"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
                >
                  Call +27 861 758 623
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-transparent border border-red-100 px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
                >
                  Book online &amp; save
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
