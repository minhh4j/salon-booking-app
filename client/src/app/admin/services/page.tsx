"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import { fetchServices, deleteService , addService } from "../../../redux/features/ServicesSlice";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface Service {
  _id: string;
  serviceName: string;
  serviceCharge: number;
  duration: string;
  serviceDescription?: string;
  image?: string;
}

const ServiceManagement: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { service, loading, error } = useSelector((state: RootState) => state.service);

  const [formData , setFormData] = useState({
    serviceName: "",
    serviceCharge: "",
    image: "",
    duration: "",
    serviceDescription: ""
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target;
  
    if (type === "file") {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        setFormData({ ...formData, [name]: target.files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e : any) => {
    e.preventDefault();
  
    const newService = {
      ...formData,
      serviceCharge: Number(formData.serviceCharge),
    };
  
    const result = await dispatch(addService(newService));
    if (addService.fulfilled.match(result)) {
    }
  };
  
  

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleDelete = (serviceId: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      dispatch(deleteService(serviceId));
    }
  };

  return (
    <div className="w-full px-4 py-6 bg-[#2B2B2B] min-h-screen">

<Drawer>
  <DrawerTrigger>
    <Button className="bg-white text-black hover:bg-gray-200">Add Service</Button>
  </DrawerTrigger>

  <DrawerContent className="bg-black text-[#EDEDED] border border-[#2B2B2B] max-w-lg mx-auto h-[85vh] overflow-hidden rounded-t-2xl">
    <div className="flex flex-col h-full">
      <DrawerHeader className="px-6 pt-6 pb-3 shrink-0">
        <DrawerTitle className="text-lg font-semibold text-[#F5F5F5]">
          Add a New Service
        </DrawerTitle>
        <DrawerDescription className="text-sm text-gray-400">
          Fill out the form below to add a new service offering.
        </DrawerDescription>
      </DrawerHeader>

      {/* Scrollable form */}
      <form
        className=" no-scrollbar flex-1 px-6 overflow-y-auto space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block text-sm text-gray-300 mb-1">Service Name</label>
          <input
            type="text"
            name="serviceName"
            required
            className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="e.g. Haircut"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Service Charge (₹)</label>
          <input
            type="text"
            name="serviceCharge"
            required
            className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="e.g. 499"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Image URL</label>
          <input
            type="file"
            name="image"
            required
            className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Duration</label>
          <input
            type="text"
            name="duration"
            required
            className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="e.g. 30 mins"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Description</label>
          <textarea
            name="serviceDescription"
            rows={3}
            required
            className="w-full px-3 py-2 text-sm rounded-md bg-[#1A1A1A] text-[#F1F1F1] border border-[#444] focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="Brief description of the service"
          />
        </div>

        <div className="h-24" />
      </form>

      {/* Sticky footer */}
      <div className="px-6 pt-3 pb-6 border-t border-[#333] bg-black sticky bottom-0 shrink-0">
        <div className="flex flex-col gap-3">
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 transition font-medium"
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

      <h2 className="text-3xl font-bold text-center text-[#D6D7D6] mb-10">
        Our Services
      </h2>

      {loading && (
        <p className="text-center text-yellow-400 font-semibold">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4">
        {Array.isArray(service) && service.length > 0 ? (
          service.map((item: Service) => (
            <div key={item._id} className="flex justify-center">
              <div className="relative w-44 p-3 bg-[#1B1B1A] border border-[#757442] rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="w-full h-32 relative mb-3 overflow-hidden rounded-xl border border-[#757442]">
                  <img
                    src={item.image || "/placeholder-service.jpg"}
                    alt={item.serviceName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center text-[#D6D7D6] space-y-1">
                  <h6 className="text-md font-bold truncate">{item.serviceName}</h6>
                  <p className="text-sm text-[#757442] font-semibold">
                    ₹ {item.serviceCharge}
                  </p>
                  <p className="text-xs text-gray-400">{item.duration}</p>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {item.serviceDescription}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-3 w-full py-1.5 text-sm font-semibold rounded-md text-[#2B2B2B] bg-[#D6D7D6] hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 italic mt-6">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceManagement;