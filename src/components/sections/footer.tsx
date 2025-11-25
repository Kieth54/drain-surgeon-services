"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    const handleAccept = () => {
        setIsVisible(false);
    };

    return (
        <div className="fixed bottom-4 left-4 z-50 w-full max-w-[360px] rounded-xl bg-white/95 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur-sm">
            <div className="flex flex-col gap-3">
                <p className="text-[11px] leading-[18px] text-[#333333]">
                    We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "
                    <a role="button" className="cursor-pointer font-bold text-black no-underline">Cookie Settings</a>
                    " to provide a controlled consent. View our {' '}
                    <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-bold text-black no-underline hover:underline">Privacy Policy</Link>
                </p>
                <div className="flex flex-wrap items-center justify-start gap-2">
                    <button
                        className="rounded-full border border-[#dddddd] bg-[#f5f5f5] px-3 py-2 text-[11px] font-semibold text-[#333333] transition hover:border-[#bbbbbb]"
                    >
                        Cookie Settings
                    </button>
                    <button
                        onClick={handleAccept}
                        className="rounded-full bg-[#00aa00] px-3 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#008a00]"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <>
            <footer id="Footer" className="relative clear-both bg-primary-red text-white">
                <div className="border-t border-t-[rgba(255,255,255,0.2)]">
                    <div className="container py-10">
                        <div className="grid gap-8 text-xs md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr] md:text-left text-center">
                            <div className="space-y-3 flex flex-col items-center md:items-start">
                                <p className="font-semibold tracking-[0.18em] uppercase text-white/70 text-[11px]">
                                    24/7 Emergency Plumbing &amp; Drains
                                </p>
                                <p className="text-white/90 text-[12px] max-w-xs">
                                    The Drain Surgeon provides nationwide, security-cleared plumbing teams on call
                                    day and night for homes, businesses and industrial sites.
                                </p>
                                <a
                                    href="tel:+27861758623"
                                    className="inline-flex items-center justify-center rounded-full bg-white text-primary-red px-4 py-2 mt-2 text-[12px] font-bold shadow-sm hover:bg-yellow-50"
                                >
                                    Call 24/7: +27 861 758 623
                                </a>
                            </div>
                            <div className="space-y-3">
                                <p className="font-semibold tracking-[0.18em] uppercase text-white/80 text-[11px]">
                                    Quick Links
                                </p>
                                <div className="flex flex-col gap-1 text-[12px] text-white/85">
                                    <Link href="/services" className="hover:underline">
                                        Services
                                    </Link>
                                    <Link href="/find-branch" className="hover:underline">
                                        Find Your Branch
                                    </Link>
                                    <Link href="/download-app" className="hover:underline">
                                        Download App
                                    </Link>
                                    <Link href="/franchise" className="hover:underline">
                                        Franchise
                                    </Link>
                                    <Link href="/contact-us" className="hover:underline">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <p className="font-semibold tracking-[0.18em] uppercase text-white/80 text-[11px]">
                                    Contact &amp; Hours
                                </p>
                                <div className="space-y-1 text-[12px] text-white/85">
                                    <p>
                                        <a href="mailto:info@drainsurgeon.co.za" className="hover:underline">
                                            info@drainsurgeon.co.za
                                        </a>
                                    </p>
                                    <p className="text-white/80">24 hours a day, 7 days a week</p>
                                    <p className="text-white/65 text-[11px]">
                                        Residential, commercial and industrial plumbing across South Africa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-t-[rgba(255,255,255,0.18)]">
                    <div className="container py-4">
                      <div className="text-center text-[12px] leading-[22px] text-white/80">
                          Plan Two Plumbing Services (PTY) LTD 2023 &copy; All Rights Reserved |{' '}
                          <Link href="/privacy-policy" className="font-medium text-white hover:underline">
                              View Our Privacy Policy
                          </Link>
                          {' '} | Developed by {' '}
                          <a href="http://networds.co.za" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                              Networds
                          </a>
                      </div>
                    </div>
                </div>
            </footer>
            <a
                href="https://api.whatsapp.com/send?phone=27764213233&text=I'm%20interested%20in%20your%20services"
                className="fixed bottom-8 right-8 z-40 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)] transition hover:scale-[1.03] hover:bg-[#1ebe5d]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <WhatsAppIcon />
            </a>
            <CookieBanner />
        </>
    );
};

export default Footer;