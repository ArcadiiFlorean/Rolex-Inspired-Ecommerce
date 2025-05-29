import React, { useEffect } from "react";
import Button from "./Buttons";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/RolexHero.mp4" type="video/mp4" />
        </video>
        {/* Optional overlay for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* CONTENT */}
      <div className="flex relative z-10 items-center">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center pt-[320px] pb-16">
          {/* Text Section */}
          <div
            data-aos="fade-up"
            className="w-full lg:w-2/5 flex flex-col relative z-20 text-center lg:text-left text-white"
          >
            <span className="w-20 h-1 bg-[#D4AF37] mb-8 mx-auto lg:mx-0"></span>

            <h1 className="font-bebas-neue uppercase text-5xl sm:text-7xl font-black leading-none">
              Be on{" "}
              <span className="text-4xl sm:text-6xl text-[#D4AF37]">Time</span>
            </h1>

            <p className="mt-4 text-base italic text-gray-200">
              "A Crown for Every Achievement."
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-300">
              Time is more than a measure — it's a legacy. Crafted with
              precision and designed to endure, our watches embody the timeless
              elegance that defines your finest moments.
            </p>

            <div className="flex mt-8 gap-4 justify-center lg:justify-start">
              <Button label="Get Started" variant="primary" size="md" />
              <Button label="Read More" variant="secondary" size="md" />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-2/3 lg:w-3/5 relative mb-10 lg:mb-0">
            <img
              data-aos="fade-up"
              src="/rolex-logo.svg"
              className="max-w-[300px] sm:max-w-[380px] lg:max-w-[600px] m-auto"
              alt="Rolex Logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
