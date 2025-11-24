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

const clients = [
  {
    src: McDonaldsLogo,
    alt: "McDonald's logo",
    width: 119,
    height: 75,
  },
  {
    src: PPClogo,
    alt: "PPC Cement logo",
    width: 150,
    height: 63,
  },
  {
    src: BidvestLogo,
    alt: "Bidvest Bank logo",
    width: 150,
    height: 25,
  },
  {
    src: TransnetLogo,
    alt: "Transnet logo",
    width: 150,
    height: 42,
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
];

const ClientsSection = () => {
  return (
    <section className="bg-[#fafafa] py-12">
      <div className="container">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">
            Trusted by leading brands
          </p>
          <h3 className="mt-2 text-2xl font-bold text-black">Our Valued Clients</h3>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
            {clients.map((client) => (
              <div
                key={client.alt}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-200"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  className="max-w-full h-auto object-contain"
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