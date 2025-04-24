"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import { fetchBarbers } from "@/redux/features/BarberSlice";
import { fetchServices } from "@/redux/features/ServicesSlice";
import { Users, Scissors, CalendarCheck } from "lucide-react";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();

  const { barbers, loading: barberLoading, error: barberError } = useSelector(
    (state: RootState) => state.barber
  );

  const {
    service,
    loading: serviceLoading,
    error: serviceError,
  } = useSelector((state: RootState) => state.service);


  useEffect(() => {
    dispatch(fetchBarbers());
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B1B1A] via-[#2B2B2B] to-[#757442] text-[#D6D7D6] p-10 flex items-center justify-center">
      <div className="max-w-6xl w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Barbers */}
        <div className="bg-[#2B2B2B] border border-[#757442] p-6 rounded-2xl shadow-lg hover:shadow-[#757442]/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-[#DBCBBD]">Barbers</h2>
              {barberLoading ? (
                <p className="text-yellow-400">Loading...</p>
              ) : barberError ? (
                <p className="text-red-500 text-sm">{barberError}</p>
              ) : (
                <p className="text-5xl font-bold text-[#C87941]">{barbers.length}</p>
              )}
            </div>
            <Users className="h-12 w-12 text-[#757442]" />
          </div>
          <p className="text-sm text-gray-400">Total registered barbers</p>
        </div>

        {/* Services */}
        <div className="bg-[#2B2B2B] border border-[#757442] p-6 rounded-2xl shadow-lg hover:shadow-[#757442]/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-[#DBCBBD]">Services</h2>
              {serviceLoading ? (
                <p className="text-yellow-400">Loading...</p>
              ) : serviceError ? (
                <p className="text-red-500 text-sm">{serviceError}</p>
              ) : (
                <p className="text-5xl font-bold text-[#C87941]">{service.length}</p>
              )}
            </div>
            <Scissors className="h-12 w-12 text-[#757442]" />
          </div>
          <p className="text-sm text-gray-400">Total services available</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
