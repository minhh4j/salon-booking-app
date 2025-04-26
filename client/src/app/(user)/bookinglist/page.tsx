"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import { fetchServices } from "@/redux/features/ServicesSlice";
import { fetchBarbers } from "@/redux/features/BarberSlice";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { toast, Toaster } from "sonner";

interface Barber {
  _id: string;
  employeeName: string;
  employeeFees: number;
  specialCut: string;
  description?: string;
  employeeImage?: string;
}

const Bookinglist = () => {
  const dispatch: AppDispatch = useDispatch();
  const { service, loading: loadingServices, error: serviceError } = useSelector((state: RootState) => state.service);
  const { barbers, loading: loadingBarbers, error: barberError } = useSelector((state: RootState) => state.barber);
  const { user } = useUser();
  const scrollServiceRef = useRef<HTMLDivElement | null>(null);
  const scrollBarberRef = useRef<HTMLDivElement | null>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBarbers, setSelectedBarbers] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchBarbers());
    toast.info("Select both barber and service")
  }, [dispatch]);

  const scroll = (direction: "left" | "right", target: "service" | "barber") => {
    const ref = target === "service" ? scrollServiceRef.current : scrollBarberRef.current;
    if (ref) {
      ref.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleBooking = () => {
    if (selectedServices.length && selectedBarbers.length) {
      const selectedServiceDetails = service.filter((item: any) =>
        selectedServices.includes(item._id)
      );
      const totalPrice = selectedServiceDetails.reduce(
        (acc, cur) => acc + cur.serviceCharge,
        0
      );
      localStorage.setItem("barberId", selectedBarbers[0]);
      localStorage.setItem("serviceId", JSON.stringify(selectedServices));
      localStorage.setItem("price", JSON.stringify(totalPrice));
      localStorage.setItem("userId", user?.id as string);
      setSelectedServices([]);
      setSelectedBarbers([]);
      toast.success('Appointment booked successfully!')
      router.push("/appointment");
    } else {
      toast.error("Please select at least one service and one barber.")
    }
  };

  const toggleServiceSelect = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleBarberSelect = (id: string) => {
    setSelectedBarbers((prev) => (prev[0] === id ? [] : [id]));
  };

  return (
    <div className="text-[#D6D7D6] px-8 pt-28 pb-12 space-y-24 bg-[#1B1B1A] min-h-screen">
      <Toaster  richColors />
      {/* Services Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#666b3a] mb-1">Choose Your Services</h2>
          <p className="text-base text-[#a0a09a]">Tailored for your perfect look</p>
        </div>
        <div className="relative group">
          <button
            onClick={() => scroll("left", "service")}
            className="absolute z-40 left-0 top-1/2 -translate-y-1/2 bg-[#2B2B2B] hover:bg-[#757442] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollServiceRef}
            className="overflow-x-auto no-scrollbar whitespace-nowrap flex gap-5 px-2 py-4 scroll-smooth"
          >
            {loadingServices ? (
              <p className="text-gray-400">Loading...</p>
            ) : serviceError ? (
              <p className="text-red-500">Error loading services</p>
            ) : (
              service.map((item: any, index: number) => {
                const isSelected = selectedServices.includes(item._id);
                return (
                  <div
                    key={index}
                    onClick={() => toggleServiceSelect(item._id)}
                    className={`relative w-[250px] h-[220px] flex-shrink-0 bg-[#2B2B2B]/90 border rounded-2xl p-4 cursor-pointer backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_#75744266] ${
                      isSelected ? "border-blue-500" : "border-[#757442]/30"
                    }`}
                  >
                    {isSelected && (
                      <CheckCircle className="absolute top-2 right-2 text-blue-500 bg-[#1B1B1A] rounded-full" size={20} />
                    )}
                    <img
                      src={item.image}
                      alt={item.serviceName}
                      className="w-full h-[110px] object-cover rounded-md mb-3"
                    />
                    <h4 className="text-xl font-semibold truncate text-[#D6D7D6]">
                      {item.serviceName}
                    </h4>
                    <p className="text-sm text-[#a0a09a] mt-1">₹ {item.serviceCharge}</p>
                  </div>
                );
              })
            )}
          </div>

          <button
            onClick={() => scroll("right", "service")}
            className="absolute z-40 right-0 top-1/2 -translate-y-1/2 bg-[#2B2B2B] hover:bg-[#757442] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Barbers Section */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#636c36] mb-1">Pick Your Barber</h2>
          <p className="text-sm text-[#cecec0]">Craftsmanship that speaks for itself</p>
        </div>
        <div className="relative group">
          <button
            onClick={() => scroll("left", "barber")}
            className="absolute z-40 left-0 top-1/2 -translate-y-1/2 bg-[#2B2B2B] hover:bg-[#757442] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollBarberRef}
            className="overflow-x-auto no-scrollbar whitespace-nowrap flex gap-4 px-2 py-3 scroll-smooth"
          >
            {loadingBarbers ? (
              <p className="text-gray-400">Loading barbers...</p>
            ) : barberError ? (
              <p className="text-red-500">Error loading barbers</p>
            ) : (
              barbers.map((barber: Barber) => {
                const isSelected = selectedBarbers.includes(barber._id);
                return (
                  <div
                    key={barber._id}
                    onClick={() => toggleBarberSelect(barber._id)}
                    className={`relative w-[180px] flex-shrink-0 p-4 rounded-2xl border backdrop-blur bg-[#2B2B2B]/80 shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_#75744266] ${
                      isSelected ? "border-blue-500" : "border-[#757442]/40"
                    }`}
                  >
                    {isSelected && (
                      <CheckCircle
                        className="absolute top-2 right-2 text-blue-500 bg-[#1B1B1A] rounded-full"
                        size={18}
                      />
                    )}
                    <div className="w-full h-32 overflow-hidden rounded-xl mb-3 border border-[#757442]/20">
                      <img
                        src={barber.employeeImage || "/placeholder.png"}
                        alt={barber.employeeName}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="text-center space-y-1">
                      <h6 className="text-base font-semibold truncate text-[#D6D7D6]">{barber.employeeName}</h6>
                      <p className="text-xs italic text-[#cecec0]">{barber.specialCut}</p>
                      <p className="text-sm font-bold text-[#D6D7D6]">₹ {barber.employeeFees}</p>
                      <p className="text-xs text-gray-400 line-clamp-2 h-10">{barber.description}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <button
            onClick={() => scroll("right", "barber")}
            className="absolute z-40 right-0 top-1/2 -translate-y-1/2 bg-[#2B2B2B] hover:bg-[#757442] text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* Book Now */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={handleBooking}
          className="bg-[#757442] hover:bg-[#636c36] text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
         Next
        </button>
      </div>
    </div>
  );
};

export default Bookinglist;
