const About = () => {



  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat text-gray-300"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/young-man-barber-s-shop-getting-his-beard-trimmed.jpg')`,
      }}
    >
      {/* Background decorative circles */}
      <span className="absolute top-[-80px] left-[-60px] w-80 h-80 bg-[#757442] opacity-20 rounded-full blur-3xl" />
      <span className="absolute bottom-[-80px] right-[-60px] w-80 h-80 bg-[#D6D7D6] opacity-10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-[#D6D7D6] mb-4 tracking-wide">
          About <span className="text-[#757442]">New Cut</span>
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          Welcome to <span className="text-white font-semibold">New Cut</span>, a modern salon where precision, comfort, and style come together. Our expert barbers provide top-notch grooming services in a space designed for relaxation and rejuvenation. Whether it's a fresh haircut, a clean shave, or a complete style makeover, we’ve got you covered.
        </p>

      </div>
    </section>
  );
};

export default About;

