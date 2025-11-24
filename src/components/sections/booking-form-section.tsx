"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import VanImage from "@/assets/van-2.webp";
import PlumbImage from "@/assets/plumb_1.webp";
import CameraImage from "@/assets/camera_nrew-1.webp";
import { useOptimizedTimer } from "@/hooks/useOptimizedTimer";

const servicesData = [
  { id: 'drains', name: 'Drains', description: 'Blocked Drain Incl. 1 Hour Labour', oldPrice: 1685, newPrice: 1385, materials: '' },
  { id: 'plumbing', name: 'Plumbing', description: 'Plumbing Repairs (General) Incl. 1 Hour Labour', oldPrice: 1685, newPrice: 1385, materials: '(Excluding Materials)' },
  { id: 'leak-detection', name: 'Leak Detection', description: 'Leak Detection Incl. 1 Hour Labour', oldPrice: 2085, newPrice: 1785, materials: '(Excluding Materials)' },
];

const sliderImages = [VanImage, PlumbImage, CameraImage];

const BookingFormSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="flex justify-center mt-4 space-x-2">
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
    </section>
  );
};

export default BookingFormSection;