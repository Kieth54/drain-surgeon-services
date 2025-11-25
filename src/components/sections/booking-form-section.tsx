"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import VanImage from "@/assets/van-2.webp";
import PlumbImage from "@/assets/plumb_1.webp";
import CameraImage from "@/assets/camera_nrew-1.webp";
import CapeTownImage from "@/assets/Cape Town.jpg";
import DurbanImage from "@/assets/Durban.jpg";
import EastLondonImage from "@/assets/East London.jpg";
import JohannesburgImage from "@/assets/Johannesburg.jpg";
import NelspruitImage from "@/assets/Nelspruit.jpg";
import RustenburgImage from "@/assets/Rustenburg.jpg";
import HuurkorImage from "@/assets/huurkor.jpg";
import BurstPipesImage from "@/assets/burst_pipes_new.webp";
import CutImage from "@/assets/cut.webp";
import DrainActivatorImage from "@/assets/drainactivator_150.webp";
import DrainCleanerImage from "@/assets/draincleaner_150.webp";
import DrainCleanerAltImage from "@/assets/draincleaner_150-1.webp";
import FixImage from "@/assets/fix.webp";
import GeyserImage from "@/assets/geyser_new.webp";
import GuysImage from "@/assets/guys-1.webp";
import HomePlumberImage from "@/assets/home-plumber-on-th-job.webp";
import PlumberCutoutImage from "@/assets/plumber.png";
import PressureImage from "@/assets/pressure_new.webp";
import SepticImage from "@/assets/septic_1.webp";
import BlogBestBlockedImage from "@/assets/blog/BEST BLOCKED DRAINS SOLUTIONS.webp";
import BlogBlockedDrainBiggerProblemsImage from "@/assets/blog/BLOCKED DRAIN – BIGGER PROBLEMS.webp";
import BlogBlockedDrainBiggerProblemsAltImage from "@/assets/blog/BLOCKED DRAIN – BIGGER PROBLEMSo.webp";
import BlogFlushAnimalPooImage from "@/assets/blog/CAN I FLUSH ANIMAL POO – TO FLUSH OR NOT TO FLUSH.webp";
import BlogCommonGeyserProblemsImage from "@/assets/blog/COMMON PROBLEMS WITH GEYSERS.webp";
import BlogCommonHolidayProblemsImage from "@/assets/blog/Common Holiday Plumbing Problems.webp";
import BlogWinterReadyImage from "@/assets/blog/GET YOUR PLUMBING WINTER-READY.webp";
import BlogFindPlumberImage from "@/assets/blog/HOW TO FIND A PLUMBER NEAR YOU.webp";
import BlogFixRunningToiletImage from "@/assets/blog/HOW TO FIX A RUNNING TOILET YOURSELF.webp";
import BlogPlumbingLicenseImage from "@/assets/blog/HOW TO GET A PLUMBING LICENSE.webp";
import BlogRemoveRustStainsImage from "@/assets/blog/HOW TO REMOVE STUBBORN RUST STAINS FROM YOUR TOILET.webp";
import BlogPipesWornOutImage from "@/assets/blog/HOW TO TELL IF YOUR PIPES ARE WORN OUT.webp";
import BlogUnblockSoilPipesImage from "@/assets/blog/HOW TO UNBLOCK SOIL PIPES.webp";
import BlogDrainTipTopImage from "@/assets/blog/How To Keep Your Drain In Tip-Top Condition.webp";
import BlogUnblockToiletGuideImage from "@/assets/blog/How to Unblock a Toilet – The Ultimate Guide.webp";
import BlogPreventLeaksHomeImage from "@/assets/blog/PREVENT LEAKS IN YOUR HOME! HERE’S HOW.webp";
import BlogPreventLeaksImage from "@/assets/blog/PREVENT LEAKS.webp";
import BlogRisksBusinessImage from "@/assets/blog/Plumbing Risks In Your Business.webp";
import BlogPlumbingTipsUnblockToiletImage from "@/assets/blog/Plumbing Tips – How To Unblock Your Toilet.webp";
import BlogRegularMaintenanceImage from "@/assets/blog/Regular-Plumbing-Maintenance-768x250.webp";
import BlogCommonProblemsAvoidImage from "@/assets/blog/THE MOST COMMON PLUMBING PROBLEMS AND HOW TO AVOID THEM.webp";
import BlogBestPlumberCapeTownImage from "@/assets/blog/The Best Plumber In Cape Town.webp";
import BlogBestPlumberPretoriaImage from "@/assets/blog/The Best Plumber In Pretoria.webp";
import BlogBurstGeyserImage from "@/assets/blog/WHAT TO DO WHEN YOUR ELECTRICAL GEYSER BURSTS.webp";
import BlogGreatPlumbingCompanyImage from "@/assets/blog/WHAT TO LOOK FOR IN A GREAT, PROFESSIONAL PLUMBING COMPANY.webp";
import BlogCommonGeyserProblems1Image from "@/assets/blog/common-problems-with-geysers 1.webp";
import BlogCommonGeyserProblems2Image from "@/assets/blog/common-problems-with-geysers 2.webp";
import BlogRemoveRustStainsAltImage from "@/assets/blog/how-to-remove-stubborn-rust-stains-from-your-toilet.webp";
import BlogPipesWornOutAltImage from "@/assets/blog/how-to-tell-if-your-pipes-are-worn-out.webp";
import BlogHydrojettingImage from "@/assets/blog/hydrojetting.webp";
import BlogSaveMoneyBillsImage from "@/assets/blog/save-money-on-plumbing-bills-768x250.webp";
import BlogIgnoringBlockedDrainImage from "@/assets/blog/the dangers of ingnoring a blocked drain.webp";
import BlogTimeForGeyserServiceImage from "@/assets/blog/time for a geyser service.webp";
import BlogBurstGeyserAltImage from "@/assets/blog/what-to-do-when-your-electrical-geyser-bursts.webp";
import BlogGreatPlumbingCompanyAltImage from "@/assets/blog/what-to-look-for-in-a-great-professional-plumbing-company.webp";

import { useOptimizedTimer } from "@/hooks/useOptimizedTimer";

const servicesData = [
  { id: 'drains', name: 'Drains', description: 'Blocked Drain Incl. 1 Hour Labour', oldPrice: 1685, newPrice: 1385, materials: '' },
  { id: 'plumbing', name: 'Plumbing', description: 'Plumbing Repairs (General) Incl. 1 Hour Labour', oldPrice: 1685, newPrice: 1385, materials: '(Excluding Materials)' },
  { id: 'leak-detection', name: 'Leak Detection', description: 'Leak Detection Incl. 1 Hour Labour', oldPrice: 2085, newPrice: 1785, materials: '(Excluding Materials)' },
];

const sliderImages = [VanImage, PlumbImage, CameraImage];

// Expanded gallery images: all major marketing and blog assets (excluding clearly unsafe filenames)
const galleryImages = [
  VanImage,
  PlumbImage,
  CameraImage,
  CapeTownImage,
  DurbanImage,
  EastLondonImage,
  JohannesburgImage,
  NelspruitImage,
  RustenburgImage,
  HuurkorImage,
  BurstPipesImage,
  CutImage,
  DrainActivatorImage,
  DrainCleanerImage,
  DrainCleanerAltImage,
  FixImage,
  GeyserImage,
  GuysImage,
  HomePlumberImage,
  PlumberCutoutImage,
  PressureImage,
  SepticImage,
  BlogBestBlockedImage,
  BlogBlockedDrainBiggerProblemsImage,
  BlogBlockedDrainBiggerProblemsAltImage,
  BlogFlushAnimalPooImage,
  BlogCommonGeyserProblemsImage,
  BlogCommonHolidayProblemsImage,
  BlogWinterReadyImage,
  BlogFindPlumberImage,
  BlogFixRunningToiletImage,
  BlogPlumbingLicenseImage,
  BlogRemoveRustStainsImage,
  BlogPipesWornOutImage,
  BlogUnblockSoilPipesImage,
  BlogDrainTipTopImage,
  BlogUnblockToiletGuideImage,
  BlogPreventLeaksHomeImage,
  BlogPreventLeaksImage,
  BlogRisksBusinessImage,
  BlogPlumbingTipsUnblockToiletImage,
  BlogRegularMaintenanceImage,
  BlogCommonProblemsAvoidImage,
  BlogBestPlumberCapeTownImage,
  BlogBestPlumberPretoriaImage,
  BlogBurstGeyserImage,
  BlogGreatPlumbingCompanyImage,
  BlogCommonGeyserProblems1Image,
  BlogCommonGeyserProblems2Image,
  BlogRemoveRustStainsAltImage,
  BlogPipesWornOutAltImage,
  BlogHydrojettingImage,
  BlogSaveMoneyBillsImage,
  BlogIgnoringBlockedDrainImage,
  BlogTimeForGeyserServiceImage,
  BlogBurstGeyserAltImage,
  BlogGreatPlumbingCompanyAltImage,
];

const BookingFormSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleServiceChange = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId) 
        : [...prev, serviceId]
    );
  };
  
  const unselectAll = () => {
    setSelectedServices([]);
  };

  useEffect(() => {
    const total = selectedServices.reduce((acc, serviceId) => {
      const service = servicesData.find(s => s.id === serviceId);
      return acc + (service ? service.newPrice : 0);
    }, 0);
    setTotalPrice(total);
  }, [selectedServices]);

  // Use optimized timer for image rotation
  useOptimizedTimer(
    'booking-image-rotation',
    5000,
    () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }
  );

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#booking") {
        setIsModalOpen(true);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const formatPrice = (price: number) => `R${price.toLocaleString('en-ZA')}`;

  return (
    <section id="booking" className="bg-light-gray py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 rounded-2xl bg-white px-5 py-4 shadow-sm border border-medium-gray/20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-gray mb-2 text-center sm:text-left">
            HOW IT WORKS
          </p>
          <div className="grid gap-4 text-xs text-dark-gray sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-[11px] font-bold">
                1
              </span>
              <div>
                <p className="font-semibold text-black">Tell us what&apos;s wrong</p>
                <p>Choose your service and share a few details about the problem.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-[11px] font-bold">
                2
              </span>
              <div>
                <p className="font-semibold text-black">We confirm your booking</p>
                <p>Our control room calls you back within 15 minutes to confirm.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-[11px] font-bold">
                3
              </span>
              <div>
                <p className="font-semibold text-black">Plumber on the way</p>
                <p>A security-cleared Drain Surgeon plumber is dispatched to your door.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
          <div className="flex flex-col items-center justify-center mb-8 lg:mb-0">

            <div className="relative w-full max-w-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden">
              <Image
                src={sliderImages[currentImage]}
                alt="Drain Surgeon Service Truck"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between w-full max-w-lg">
              <div className="flex justify-center space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full border border-gray-400 transition-colors ${
                      currentImage === index ? 'bg-primary' : 'bg-white'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="mt-1 inline-flex items-center justify-center rounded-full border border-medium-gray bg-white px-4 py-1.5 text-xs font-semibold text-dark-gray shadow-sm transition hover:border-primary hover:text-primary"
              >
                View gallery
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center space-y-4">
            <h3 className="text-primary text-2xl font-bold">
              Book and Pay Online and Save R300!
            </h3>
            <p className="text-sm text-dark-gray max-w-md">
              Secure your booking in minutes and get priority scheduling for your plumbing emergency.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-deep-red"
            >
              Book Now
            </button>
            <p className="mt-1 flex items-center text-xs text-dark-gray">
              <Clock className="mr-1.5 h-4 w-4" />
              We aim to call you back within 15 minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl mt-8">
        <div className="bg-primary text-white text-center py-4 px-6 font-bold text-[17px]">
          We will call you back within{' '}
          <span className="inline-flex items-center bg-black px-2 py-1 rounded mx-1 text-sm">
            <Clock className="w-4 h-4 mr-1.5 inline-block" /> 15 MINUTES
          </span>{' '}
          / Your business is important to us.
        </div>
      </div>

      {isModalOpen && (
        <>
          <button
            type="button"
            aria-label="Close booking form"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-[0_24px_80px_rgba(15,23,42,0.55)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Secure Your Speedy Service – Save R300
                  </h3>
                  <p className="mt-1 text-xs text-dark-gray">
                    Complete the form below and we will confirm your booking shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-medium-gray bg-white px-2 py-1 text-sm text-dark-gray hover:border-primary"
                >
                  Close
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">Name *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full p-3 border border-medium-gray rounded-[4px] focus:ring-primary focus:border-primary"/>
                    <input type="text" placeholder="Last Name" className="w-full p-3 border border-medium-gray rounded-[4px] focus:ring-primary focus:border-primary"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-black mb-2 block">Email *</label>
                    <input type="email" placeholder="Enter Email" className="w-full p-3 border border-medium-gray rounded-[4px] focus:ring-primary focus:border-primary"/>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-black mb-2 block">Phone *</label>
                    <input type="tel" placeholder="Enter Number" className="w-full p-3 border border-medium-gray rounded-[4px] focus:ring-primary focus:border-primary"/>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-bold text-black mb-2 block">Address *</label>
                  <input type="text" placeholder="Location" className="w-full p-3 border border-medium-gray rounded-[4px] focus:ring-primary focus:border-primary"/>
                  <p className="text-xs text-dark-gray mt-1">Enter your Street Name or Physical Address</p>
                </div>
                
                <div>
                  <label className="text-sm font-bold text-black mb-3 block">Please Choose: *</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="pay-now" name="payment-choice" value="pay-now" className="w-4 h-4 accent-primary" defaultChecked />
                      <label htmlFor="pay-now" className="text-sm text-dark-gray font-normal">Pay Now &amp; Save!</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="pay-later" name="payment-choice" value="pay-later" className="w-4 h-4 accent-primary" />
                      <label htmlFor="pay-later" className="text-sm text-dark-gray font-normal">Pay Later (No Discount)</label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-black mb-4 block">Book a Plumber for:</label>
                  <div className="space-y-4">
                    {servicesData.map(service => (
                      <div key={service.id}>
                        <p className="font-bold text-black">{service.name}</p>
                        {service.materials && <p className="text-xs text-dark-gray -mt-1 mb-1">{service.materials}</p>}
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id={service.id} checked={selectedServices.includes(service.id)} onChange={() => handleServiceChange(service.id)} className="w-4 h-4 accent-primary"/>
                          <label htmlFor={service.id} className="text-sm text-dark-gray">
                            {service.description}{' '}
                            <span className="line-through">{formatPrice(service.oldPrice)}</span>{' '}
                            <span className="font-bold text-primary">{formatPrice(service.newPrice)} (incl. VAT)</span>
                          </label>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={unselectAll} className="text-sm text-primary underline">Unselect All</button>
                  </div>
                </div>

                <div className="text-lg font-bold text-black">
                  Total <span className="float-right">{`R${totalPrice}`}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="w-4 h-4 accent-primary" />
                    <label htmlFor="terms" className="text-xs text-dark-gray">
                      By using this form you agree with the storage and handling of your data by this website.*
                    </label>
                  </div>
                  <a href="#" className="text-primary text-sm underline block">Terms & Conditions</a>
                </div>
                
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-[4px] hover:bg-deep-red transition-colors text-base">
                  Book Now Confirmation
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {isGalleryOpen && (
        <>
          <button
            type="button"
            aria-label="Close gallery"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsGalleryOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-[0_24px_80px_rgba(15,23,42,0.55)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black">Service Gallery</h3>
                  <p className="mt-1 text-xs text-dark-gray">
                    A closer look at some of our team, vehicles and specialist equipment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen(false)}
                  className="rounded-full border border-medium-gray bg-white px-3 py-1 text-xs font-semibold text-dark-gray hover:border-primary"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-xl border border-medium-gray/40 bg-light-gray">
                    <Image
                      src={image}
                      alt={`Drain Surgeon gallery image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default BookingFormSection;