import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-100px)] text-center bg-[#1c1c15] text-gray-300">
      <h1 className="text-5xl font-bold mb-4 text-[#C1A25D] tracking-wide">
        STYLE YOUR HAIR
      </h1>
      <h2 className="text-3xl mb-8 text-gray-400">
        DEFINE YOUR CONFIDENCE
      </h2>
      <button className="bg-[#C1A25D] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#AE8E50] transition duration-300 shadow-lg">
        BOOK NOW
      </button>
    </section>
  );
};

export default HeroSection;
