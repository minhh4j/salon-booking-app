"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HeroSection: React.FC = () => {
  const router = useRouter()
  return (
    <section
      className="flex flex-col justify-center items-center h-[calc(120.5vh-150px)] text-center bg-cover bg-center bg-no-repeat text-gray-300 no-scrollbar "
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('/hairdresser-cutting-man-s-hair-barber-shop (1).jpg')
        `,
      }}
    >
      <h1 className="text-5xl font-bold mb-4 text-[#f7ad0c] tracking-wide">
        STYLE YOUR HAIR
      </h1>
      <h2 className="text-3xl mb-8 text-gray-400">
        DEFINE YOUR CONFIDENCE
      </h2>
      <button className="bg-[#C1A25D] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#AE8E50] transition duration-300 shadow-lg"
      onClick={() =>router.push("/bookinglist")}
      >
        BOOK NOW
      </button>
    </section>
  );
};

export default HeroSection;
