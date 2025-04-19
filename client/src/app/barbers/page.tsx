"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import { fetchBarbers } from "../../redux/features/BarberSlice";
import { useRouter } from 'next/navigation';


interface Barber {
  _id: string;
  employeeName: string;
  employeeFees: number;
  specialCut: string;
  description?: string;
  employeeImage?: string;
}

const Barber = () => {
  const dispatch: AppDispatch = useDispatch();
  const { barbers, loading, error } = useSelector((state: RootState) => state.barber);
  console.log(barbers,"fghj");
  
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchBarbers());
  }, [dispatch]);

  return (
    <div className="text-white p-8 bg-gradient-to-br from-[#1B1B1A] via-[#2B2B2B] to-[#757442] min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#D6D7D6] mb-2">Meet Our <span className="text-[#757442]">Barbers</span></h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Browse through our talented professionals and choose your favorite to book an appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {barbers.map((barber: Barber) => (
          <div key={barber._id} className="flex justify-center">
            <div
              className="w-52 p-4 rounded-3xl shadow-xl bg-[#2B2B2B]/80 border border-[#757442]/50 hover:scale-105 hover:shadow-[#757442]/50 transition-all duration-300 backdrop-blur-lg cursor-pointer"
              onClick={() => router.push(`/admin/barbers/${barber._id}/barberprofileview`)}
            >
              {/* Image */}
              <div className="w-full h-40 overflow-hidden rounded-2xl mb-4 border border-[#D6D7D6]/10">
                <img
                  src={barber.employeeImage || '/placeholder.png'}
                  alt={barber.employeeName}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-2">
                <h6 className="text-lg font-bold text-[#D6D7D6] truncate">{barber.employeeName}</h6>
                <p className="text-sm text-[#757442] italic">{barber.specialCut}</p>
                <p className="text-sm font-bold text-[#D6D7D6]">₹ {barber.employeeFees}</p>
                <p className="text-xs text-gray-400 line-clamp-2 h-10 overflow-hidden">{barber.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Barber;
