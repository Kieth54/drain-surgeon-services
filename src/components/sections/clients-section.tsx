import Image from "next/image";

import McDonaldsLogo from "@/assets/mcdonalds-5.svg";
import PPClogo from "@/assets/ppc.svg";
import BidvestLogo from "@/assets/Bidvest Group Logo SVG.svg";
import CosmopolitanLogo from "@/assets/cosmopolitan-magazine-logo.svg";
import TrafalgarLogo from "@/assets/trafalgar-seeklogo.svg";
import HuurkorLogo from "@/assets/huurkor.jpg";
import CocaColaLogo from "@/assets/coca-cola-4.svg";
import NestleLogo from "@/assets/nestle-4.svg";
import WoolworthsLogo from "@/assets/woolworths-1.svg";
import TransnetLogo from "@/assets/Transnet.svg";

// High-recognition client logos for the pitch strip
const clients = [
  {
    src: McDonaldsLogo,
    alt: "McDonald's logo",
    width: 119,
    height: 75,
  },
  {
    src: CocaColaLogo,
    alt: "Coca-Cola logo",
    width: 150,
    height: 49,
  },
  {
    src: NestleLogo,
    alt: "Nestlé logo",
    width: 150,
    height: 39,
  },
  {
    src: WoolworthsLogo,
    alt: "Woolworths logo",
    width: 150,
    height: 20,
  },
  {
    src: TransnetLogo,
    alt: "Transnet logo",
    width: 150,
    height: 42,
  },
  {
    src: PPClogo,
    alt: "PPC Cement logo",
    width: 150,
    height: 63,
  },
  {
    src: BidvestLogo,
    alt: "Bidvest logo",
    width: 150,
    height: 25,
  },
  {
    src: CosmopolitanLogo,
    alt: "Cosmopolitan logo",
    width: 150,
    height: 22,
  },
  {
    src: TrafalgarLogo,
    alt: "Trafalgar logo",
    width: 150,
    height: 34,
  },
  {
    src: HuurkorLogo,
    alt: "Huurkor logo",
    width: 150,
    height: 48,
  },
];

const ClientsSection = () => {
  return (
    <section className="bg-[#fafafa] py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm border border-[#e5e5e5] md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">
              Trusted by leading brands in South Africa
            </p>
            <p className="mt-1 text-xs text-[#666666]">
              Commercial clients who rely on The Drain Surgeon for plumbing and drain emergencies.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {clients.map((client) => (
              <div key={client.alt} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  className="max-w-[70px] h-auto object-contain md:max-w-[90px] lg:max-w-[110px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;