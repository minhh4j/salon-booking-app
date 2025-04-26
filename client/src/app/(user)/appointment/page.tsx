"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/app/store";
import { createAppointment } from "@/redux/features/AppoinmentSlice";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

const generateTimeSlots = () => {
  const slots: string[] = [];
  const start = new Date();
  start.setHours(9, 0, 0, 0);
  const end = new Date();
  end.setHours(21, 0, 0, 0);

  while (start <= end) {
    const hour = start.getHours();
    const min = start.getMinutes();
    const formatted =
      (hour % 12 === 0 ? 12 : hour % 12) +
      ":" +
      (min < 10 ? "0" + min : min) +
      (hour < 12 ? " AM" : " PM");
    slots.push(formatted);
    start.setMinutes(start.getMinutes() + 30);
  }
  return slots;
  
};

const Appointment = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const timeSlots = generateTimeSlots();

  useEffect(() => {
    if (date) {
      localStorage.setItem("date",date.toISOString());
    }
    localStorage.setItem("timeslots", JSON.stringify(selectedSlots));
  }, [date, selectedSlots]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setSelectedSlots([]);
    setOpenDrawer(true);

    const allAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const formattedDate = selectedDate?.toISOString().split("T")[0];
    const bookedForSelectedDate = allAppointments
      .filter((a: any) => a.date === formattedDate)
      .map((a: any) => a.timeSlot);
    setBookedSlots(bookedForSelectedDate);
  };

  const handleSlotToggle = (slot: string) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  const handleConfirm = () => {
    const userId = localStorage.getItem("userId");
    const barberId = localStorage.getItem("barberId");
    const serviceId = JSON.parse(localStorage.getItem("serviceId") || "[]");
    const price = Number(localStorage.getItem("price"));
    const date = localStorage.getItem("date");

    if (!userId || !barberId || !serviceId.length || !date || !selectedSlots.length || !price) {
      toast.error("Missing required fields.")
      return;
    }

    const payload = {
      userId,
      barberId,
      serviceId,
      date,
      timeSlot: selectedSlots[0],
      price,
      status: "pending",
      paymentStatus: "unpaid",
    };
    toast.success('Appointment Confirmed!')
    dispatch(createAppointment(payload));
    setOpenDrawer(false);
    localStorage.clear();
    router.push("/displaybookings"); 
  };


  return (
    <div className="bg-[#2e2e22] min-h-screen p-6 flex flex-col justify-center items-center text-orange-300 space-y-8">
        <Toaster  richColors />
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-xl border border-[#5c5a34] bg-[#292920] text-gray-300 shadow-md scale-150"
      />

      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="bg-[#2B2B2B] text-white border-t border-[#757442] px-4 pt-4 pb-2 rounded-t-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-[#ffffff] text-lg font-semibold">
              Choose Time Slot(s)
            </DrawerTitle>
            <DrawerDescription className="text-sm text-gray-400">
              {date?.toDateString()}
            </DrawerDescription>
          </DrawerHeader>

          <div className="grid grid-cols-10 gap-2 px-1 py-1">
            {timeSlots.map((slot, idx) => {
              const isBooked = bookedSlots.includes(slot);
              return (
                <Button
                  key={idx}
                  variant="ghost"
                  disabled={isBooked}
                  className={`text-sm py-1 px-1 rounded-lg border ${
                    selectedSlots.includes(slot)
                      ? "bg-[#757442] text-black"
                      : "border-[#757442] text-white hover:bg-[#d2c077] "
                  } ${isBooked ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => !isBooked && handleSlotToggle(slot)}
                >
                  {slot}
                </Button>
              );
            })}
          </div>

          <DrawerFooter className="px-1 pt-1">
            <Button onClick={handleConfirm} className="bg-[#9f9e39] text-black w-full hover:bg-amber-200">
              Confirm
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="border-[#757442] text-black w-full hover:bg-[#b0a6a6]"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Appointment;
