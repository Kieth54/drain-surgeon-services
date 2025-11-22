import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "FAQ", href: "/faq" },
  { name: "Find Your Branch", href: "/find-your-branch" },
  { name: "Download App", href: "/app" },
  { name: "Franchise", href: "https://surgeongroup.co.za/" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "TV Adverts", href: "/tv-adverts" },
  { name: "How to Videos", href: "/how-to-videos" },
  { name: "Contact", href: "/contact-us" },
];

const Header = () => {
  return (
    <header
      className="relative bg-white font-primary"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <div className="container mx-auto px-10 relative">
        <div
          className="absolute top-[138px] left-0 transform -translate-x-[calc(100%+20px)] w-[190px] hidden lg:block z-10 text-white bg-primary-red text-center py-4 px-2 shadow-lg"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px))' }}
        >
          <p className="font-bold text-base leading-tight">Buying or Selling a House?</p>
          <p className="text-sm my-2">Certificate of Compliance</p>
          <p className="font-bold text-base">COC PRICES</p>
          <p className="text-sm">From R1650</p>
          <div className="text-[11px] leading-tight mt-2">
            <p>Small House R1650</p>
            <p>Medium House R1850</p>
            <p>Large House R2050</p>
          </div>
          <p className="text-[9px] mt-2">*T&amp;C&apos;s dependent</p>
        </div>
        <div
          className="absolute top-[138px] right-0 transform translate-x-[calc(100%+20px)] w-[190px] hidden lg:block z-10 text-white bg-primary-red text-center py-4 px-3 shadow-lg"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px))' }}
        >
          <h6 className="text-xs font-bold leading-tight tracking-wider">DOWNLOAD OUR</h6>
          <h4 className="text-xl font-bold my-1">NEW APP</h4>
          <h6 className="text-xs font-bold leading-tight tracking-wider">GET EXCLUSIVE<br />SPECIALS</h6>
          <div className="mt-3 space-y-2">
            <a href="#" className="flex items-center justify-center bg-black text-white px-2 py-1 rounded-md w-full text-left">
              <div className="w-6 h-6 mr-2 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/google-play-icon.png')"}}></div>
              <div>
                <span className="block text-[10px] leading-none">POWERED BY</span>
                <span className="font-semibold text-sm">Google play</span>
              </div>
            </a>
            <a href="#" className="flex items-center justify-center bg-black text-white px-2 py-1 rounded-md w-full text-left">
              <div className="w-6 h-6 mr-2 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/apple-icon.png')"}}></div>
              <div>
                <span className="block text-[10px] leading-none">Download on the</span>
                <span className="font-semibold text-base">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/logo_drain-1.jpg"
                  alt="THE DRAIN SURGEON - No job too deep, too dark, or too dirty"
                  width={340}
                  height={112}
                  priority
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/ribbon-2.jpg"
                  alt="24/7"
                  width={80}
                  height={80}
                />
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-black">Emergency Response</p>
                <p className="text-[28px] font-bold">
                  <span className="text-black">CALL </span>
                  <a href="tel:+27861758623" className="text-primary-red hover:underline">+27 861 758 623</a>
                </p>
                <div className="mt-2 flex justify-end">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/new_credit-3.jpg"
                    alt="Payment methods: Mastercard, Maestro, Visa"
                    width={150}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <button className="p-2">
                <Menu size={28} className="text-primary-red" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-primary-red shadow-lg hidden lg:block">
        <div className="container mx-auto px-10">
          <div className="flex justify-center items-center h-[48px]">
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <li key={item.name} className="flex">
                  {item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white text-[15px] hover:bg-deep-red px-[14px] py-3 transition-colors duration-200 block whitespace-nowrap">
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link href={item.href} className="text-white text-[15px] hover:bg-deep-red px-[14px] py-3 transition-colors duration-200 block whitespace-nowrap">
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="lg:hidden bg-primary-red text-white">
        <p className="text-center py-3 font-bold">MENU</p>
      </div>
    </header>
  );
};

export default Header;