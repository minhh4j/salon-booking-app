"use client";

import React from "react";
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

const generateTimeSlots = () => {
  const slots = [];
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
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [selectedSlot, setSelectedSlot] = React.useState("");

  const timeSlots = generateTimeSlots();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setSelectedSlot("");
    setOpenDrawer(true);
  };

  return (
    <div className="bg-[#1B1B1A] min-h-screen p-6 flex flex-col justify-center items-center text-white space-y-8">
      {/* Heading */}
      <h1 className=" text-[#D6D7D6] text-3xl font-extrabold tracking-wide text-center">
        Book Your Appointment
      </h1>

      {/* Calendar */}
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-xl border border-[#494831] bg-[#252525] text-white shadow-md scale-150"
        />
      </div>

      {/* Drawer for time slots */}
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="bg-[#2B2B2B] text-white border-t border-[#757442] px-4 pt-4 pb-2 rounded-t-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-[#D6D7D6] text-lg font-semibold">
              Choose Time Slot
            </DrawerTitle>
            <DrawerDescription className="text-sm text-gray-400">
              {date?.toDateString()}
            </DrawerDescription>
          </DrawerHeader>

          <div className="grid grid-cols-10 gap-2 px-1 py-1">
            {timeSlots.map((slot, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className={`text-sm py-1 px-1 rounded-lg border ${
                  selectedSlot === slot
                    ? "bg-[#757442] text-black"
                    : "border-[#757442] text-white hover:bg-[#3c3c3c]"
                }`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>

          <DrawerFooter className="px-1 pt-1">
            <Button
              onClick={() =>
                selectedSlot
                  ? alert(
                      `Appointment booked for ${date?.toDateString()} at ${selectedSlot}`
                    )
                  : alert("Please select a time slot.")
              }
              className="bg-[#757442] text-black w-full"
            >
              Confirm
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="border-[#757442] text-black w-full hover:bg-[#3c3c3c]"
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
