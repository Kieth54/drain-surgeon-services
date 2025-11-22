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
        <div className="fixed bottom-4 left-4 z-50 w-full max-w-[350px] rounded-[5px] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col">
                <p className="text-[11px] leading-[18px] text-[#333333]">
                    We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "
                    <a role="button" className="cursor-pointer font-bold text-black no-underline">Cookie Settings</a>
                    " to provide a controlled consent. View our {' '}
                    <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-bold text-black no-underline hover:underline">Privacy Policy</Link>
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-start gap-2">
                    <button
                        className="rounded-[4px] bg-[#eeeeee] px-3 py-2 text-[12px] font-bold text-black"
                    >
                        Cookie Settings
                    </button>
                    <button
                        onClick={handleAccept}
                        className="rounded-[4px] bg-[#00aa00] px-3 py-2 text-[12px] font-bold text-white"
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
            <footer id="Footer" className="relative clear-both bg-primary-red">
                <div className="py-10">
                    <div className="container text-center">
                        <div className="inline-block">
                            <Image
                                src="https://drainsurgeon.co.za/wp-content/uploads/2019/12/logo-footer.png"
                                alt="The Drain Surgeon Logo"
                                width={58}
                                height={59}
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-t-[rgba(255,255,255,0.1)]">
                    <div className="container py-5">
                      <div className="text-center text-sm leading-[25px] text-white">
                          Plan Two Plumbing Services (PTY) LTD 2023 | All Rights Reserved |{' '}
                          <Link href="/privacy-policy" className="text-white hover:underline">
                              View Our Privacy Policy
                          </Link>
                          {' '} | Developed by {' '}
                          <a href="http://networds.co.za" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                              Networds
                          </a>
                      </div>
                    </div>
                </div>
            </footer>
            <a
                href="https://api.whatsapp.com/send?phone=27764213233&text=I'm%20interested%20in%20your%20services"
                className="fixed bottom-10 right-10 z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[2px_2px_3px_rgba(0,0,0,0.4)]"
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