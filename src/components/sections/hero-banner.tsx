import { Droplet, IdCard, Wrench } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="w-full bg-white pb-16">
      <div className="container mx-auto px-10">
        <div className="text-center pt-8 sm:pt-12">
          {/* Emergency Response section */}
          <h2 className="text-xl font-bold text-[#666666]">
            Emergency Response
          </h2>
          <a href="tel:+27861758623" className="mt-2 text-primary-red no-underline group">
            <h1 className="text-4xl sm:text-[48px] font-bold">
              <span className="text-primary-red">Call: </span>
              <span className="text-black">+27 861 758 623</span>
            </h1>
          </a>
          <p className="mt-4 text-[#666666] text-base leading-relaxed max-w-[550px] mx-auto">
            Our team is well sanitised and takes all efforts to keep precautionary measures while working in your house.
          </p>
        </div>

        {/* Ribbon Banner */}
        <div className="flex justify-center my-8 sm:my-10">
          <div className="relative bg-primary-red text-white py-3 px-6 shadow-[0_3px_6px_rgba(0,0,0,0.3)] w-full max-w-[450px] text-center">
            <div className="absolute left-0 bottom-[-19px] w-0 h-0 border-t-[19px] border-t-transparent border-r-[20px] border-r-[#b30000] border-l-[10px] border-l-transparent -z-10" aria-hidden="true"></div>
            <h4 className="text-[22px] font-bold uppercase tracking-wide">
              PLUMBERS SINCE 1979
            </h4>
            <div className="absolute right-0 bottom-[-19px] w-0 h-0 border-t-[19px] border-t-transparent border-l-[20px] border-l-[#b30000] border-r-[10px] border-r-transparent -z-10" aria-hidden="true"></div>
          </div>
        </div>
        
        {/* Book a Plumber section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary-red uppercase tracking-wide">
            BOOK A PLUMBER NOW!
          </h3>
          <p className="mt-2 text-[22px] text-black">
            (We will call you back in 15 Minutes)
          </p>
        </div>

        {/* Book Online Banner */}
        <div className="mt-8 bg-primary-red text-white italic text-[22px] font-normal text-center py-4">
          <h2>Book Online and make your experience smooth and enjoyable...</h2>
        </div>

        {/* Features section */}
        <div className="mt-12 sm:mt-16 flex flex-col md:flex-row justify-center items-center md:items-start md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div className="flex flex-col items-center gap-4 text-center w-52">
            <Droplet size={48} strokeWidth={1} className="text-black" />
            <h5 className="font-medium text-base uppercase tracking-wider text-black">
              BLOCKED DRAIN SPECIALISTS
            </h5>
          </div>
          <div className="flex flex-col items-center gap-4 text-center w-52">
            <IdCard size={48} strokeWidth={1} className="text-black" />
            <h5 className="font-medium text-base uppercase tracking-wider text-black">
              SECURITY-CLEARED TEAMS
            </h5>
          </div>
          <div className="flex flex-col items-center gap-4 text-center w-52">
            <Wrench size={48} strokeWidth={1} className="text-black" />
            <h5 className="font-medium text-base uppercase tracking-wider text-black">
              EXPERIENCED PLUMBERS
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;