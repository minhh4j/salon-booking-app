"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import { fetchBarbers } from "../../redux/features/BarberSlice";

interface Barber {
  _id: string;
  employeeName: string;
  employeeFees: number;
  specialCut: string;
  description?: string;
  employeeImage?: string;
}

const BarberManagement: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { barbers, loading, error } = useSelector((state: RootState) => state.barber);

  useEffect(() => {
    dispatch(fetchBarbers());
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen px-4 py-10 bg-[#1B1B1A] text-[#D6D7D6]">
      <h2 className="text-2xl font-bold text-center text-[#D6D7D6] mb-8">Our Barbers</h2>

      {/* Loading / Error */}
      {loading && <p className="text-center text-[#757442]">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {barbers.map((barber: Barber) => (
          <div key={barber._id} className="flex justify-center">
            <div className="w-44 p-4 rounded-2xl shadow-lg bg-[#2B2B2B] border border-[#757442] hover:scale-105 transition-all duration-300">
              
              {/* Image */}
              <div className="w-full h-36 overflow-hidden rounded-xl mb-3">
                <img
                  src={barber.employeeImage || "/placeholder-barber.jpg"}
                  alt={barber.employeeName}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-1">
                <h6 className="text-lg font-semibold text-white truncate">{barber.employeeName}</h6>
                <p className="text-sm text-[#757442]">{barber.specialCut}</p>
                <p className="text-sm font-bold text-[#D6D7D6]">₹ {barber.employeeFees}</p>
                <p className="text-xs text-gray-400 line-clamp-2">{barber.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarberManagement;
