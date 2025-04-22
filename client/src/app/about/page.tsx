const About = () => {
    return (
      <section
      className="flex flex-col justify-center items-center h-[calc(120.5vh-150px)] text-center bg-cover bg-center bg-no-repeat text-gray-300 no-scrollbar "
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('/young-man-barber-s-shop-getting-his-beard-trimmed.jpg')
        `,
      }}
    >
        <div className="absolute top-[-80px] left-[-60px] w-80 h-80 bg-[#757442] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-60px] w-80 h-80 bg-[#D6D7D6] opacity-10 rounded-full blur-3xl" />
  
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-[#D6D7D6] mb-4 tracking-wide">
            About <span className="text-[#757442]">New Cut</span>
          </h2>
  
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
            Welcome to <span className="text-white font-semibold">New Cut</span>, where precision, comfort, and modern
            style combine. Our professional barbers are committed to providing top-notch grooming experiences
            in a space designed for you.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skilled Barbers",
                desc: "Our experts know the trends and techniques to deliver fresh, sharp looks.",
                icon: "💇‍♂️",
              },
              {
                title: "Vibe & Comfort",
                desc: "From ambient music to comfy chairs, every detail is designed for your chill.",
                icon: "🎶",
              },
              {
                title: "Easy Bookings",
                desc: "Choose your barber, pick a time — your slot is instantly locked in.",
                icon: "📆",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#757442]/30 rounded-2xl p-6 text-left shadow-md hover:shadow-[#757442]/40 hover:scale-105 transition-all duration-300 backdrop-blur-md"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#D6D7D6] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  
