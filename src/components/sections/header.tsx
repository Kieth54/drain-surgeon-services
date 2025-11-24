"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "FAQ", href: "/faq" },
  { name: "Find Your Branch", href: "/find-branch" },
  { name: "Download App", href: "/download-app" },
  { name: "Franchise", href: "/franchise" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "TV Adverts", href: "/tv-adverts" },
  { name: "How to Videos", href: "/how-to-videos" },
  { name: "Contact", href: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="relative z-20 bg-transparent font-primary"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="pt-4 flex justify-center">
          <div className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/40 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 shadow-[0_8px_24px_rgba(15,23,42,0.10)] backdrop-blur supports-[backdrop-filter]:bg-white/5">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative h-[30px] w-[100px] sm:h-[36px] sm:w-[130px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/logo_drain-1.jpg"
                  alt="THE DRAIN SURGEON - No job too deep, too dark, or too dirty"
                  fill
                  sizes="(max-width: 640px) 160px, 220px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-[#dddddd] bg-white px-3 py-1.5 text-xs sm:text-sm font-semibold text-primary-red shadow-sm transition hover:border-primary-red/70 hover:text-primary-red"
              aria-label="Open navigation menu"
            >
              <Menu size={18} className="mr-1.5" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-40 flex h-full w-[280px] flex-col bg-white shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between border-b border-[#f0f0f0] px-5 py-4">
              <span className="text-sm font-semibold tracking-wide text-[#333333]">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-[#eeeeee] bg-white p-1.5 text-[#444444] hover:border-[#cccccc]"
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium text-[#333333] transition hover:bg-[#f5f5f5]"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#aaaaaa]">
                          External
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-full px-4 py-2.5 text-sm font-medium text-[#333333] transition hover:bg-[#f5f5f5]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};

export default Header;