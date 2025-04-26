"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import { fetchBarbers, addBarber } from "../../../redux/features/BarberSlice";
import { useRouter } from 'next/navigation';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
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
  const [barberData, setBarberData] = useState({
    employeeName: "",
    employeeImage: File || null,
    duration: "",
    employeeFees: "",
    specialCut: "",
    description: "",
    isDeleted: false,
  });



  const router = useRouter();
  useEffect(() => {
    dispatch(fetchBarbers());

  }, [dispatch]);


  const handleSubmith = () => {

    console.log("Submitting barber data:", barberData);
    const formData = new FormData();
    Object.entries(barberData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    dispatch(addBarber(formData))
      .unwrap()
      .then(() => {
        console.log("Barber added successfully!");
        setBarberData({
          employeeName: "",
          employeeImage: File || null,
          duration: "",
          employeeFees: "",
          specialCut: "",
          description: "",
          isDeleted: false,
        });
      })
      .catch((error) => {
        console.error("Failed to add barber:", error);

      });
  };


  return (
    <div className="w-full min-h-screen px-4 py-10 bg-[#1B1B1A] text-[#D6D7D6]">

      <Drawer>
        <DrawerTrigger>
          <Button className="bg-white text-black hover:bg-gray-200">Add Employee</Button>
        </DrawerTrigger>

        <DrawerContent className="bg-black text-[#EDEDED] border border-[#2B2B2B] max-w-lg mx-auto h-[85vh] overflow-hidden rounded-t-2xl">
          <div className="flex flex-col h-full">
            <DrawerHeader className="px-6 pt-6 pb-3 shrink-0">
              <DrawerTitle className="text-lg font-semibold text-[#F5F5F5]">
                Add a New Employee
              </DrawerTitle>
              <DrawerDescription className="text-sm text-gray-400">
                Fill out the form below to add a new employee.
              </DrawerDescription>
            </DrawerHeader>

            <form
              className="flex-1 px-6 overflow-y-auto no-scrollbar space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* employeeName */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={barberData.employeeName}
                  onChange={(e) => {
                    setBarberData({ ...barberData, employeeName: e.target.value })
                  }}
                  required
                  placeholder="Enter barbar name"
                  className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              {/* employeeImage */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Employee Image</label>
                <input
                  type="file"
                  name="employeeImage"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setBarberData({ ...barberData, employeeImage: file });
                    }
                  }}
                  required
                  className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
              {/* duration */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={barberData.duration}
                  onChange={(e) => {
                    setBarberData({ ...barberData, duration: e.target.value });
                  }}
                  required
                  placeholder="e.g. 1 hour"
                  className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
                />

              </div>

              {/* employeeFees */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Employee Fees (₹)</label>
                <input
                  type="number"
                  name="employeeFees"
                  value={barberData.employeeFees}
                  onChange={(e) => {
                    setBarberData({ ...barberData, employeeFees: e.target.value });
                  }}
                  required
                  min={0}
                  placeholder="e.g. 299"
                  className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
                />

              </div>

              {/* specialCut */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Special Cut</label>
                <input
                  type="text"
                  name="specialCut"
                  value={barberData.specialCut}
                  onChange={(e) => {
                    setBarberData({ ...barberData, specialCut: e.target.value });
                  }}
                  required
                  placeholder="e.g. Skin Fade"
                  className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
                />

              </div>

              {/* description */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">Description</label>
                <input
                  type="text"
                  name="specialCut"
                  value={barberData.description}
                  onChange={(e) => {
                    setBarberData({ ...barberData, description: e.target.value });
                  }}
                  required
                  placeholder="e.g. Skin Fade"
                  className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
                />

              </div>

              <div className="h-24" />
            </form>

            <div className="px-6 pt-3 pb-6 border-t border-[#333] bg-black sticky bottom-0 shrink-0">
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 transition font-medium"
                  onClick={handleSubmith}
                >
                  Submit
                </Button>

                <DrawerClose asChild>
                  <Button className="w-full bg-transparent border border-gray-500 text-white hover:bg-[#2B2B2B]">
                    Cancel
                  </Button>
                </DrawerClose>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <h2 className="text-2xl font-bold text-center text-[#D6D7D6] mb-8">Our Barbers</h2>

      {/* Loading / Error */}
      {loading && <p className="text-center text-[#757442]">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {barbers.map((barber: Barber) => (
          <div key={barber._id} className="flex justify-center" >
            <div className="w-44 p-4 rounded-2xl shadow-lg bg-[#2B2B2B] border border-[#757442] hover:scale-105 transition-all duration-300" onClick={() => router.push(`/admin/barbers/${barber._id}/barberprofileview`)}>

              {/* Image */}
              <div className="w-full h-36 overflow-hidden rounded-xl mb-3" >
                <img
                  src={barber.employeeImage}
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
