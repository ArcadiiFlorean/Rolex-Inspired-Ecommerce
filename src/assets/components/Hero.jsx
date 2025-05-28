import React from "react";
import Button from "./Buttons";

function Hero() {
  return (
    <main className="dark:bg-[#0A2025] bg-white relative overflow-hidden h-screen">
      <div className="bg-[#0A2025] flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center pt-[250px] pb-16">
          {/* Text Section */}
          <div className="w-full lg:w-2/5 flex flex-col relative z-20 text-center lg:text-left">
            <span className="w-20 h-1 bg-[#D4AF37] mb-8 mx-auto lg:mx-0"></span>

            <h1 className="font-bebas-neue uppercase text-5xl sm:text-7xl font-black leading-none text-white">
              Be on <span className="text-4xl sm:text-6xl text-[#D4AF37]">Time</span>
            </h1>

            <p className="mt-4 text-base text-gray-300 italic">
              "A Crown for Every Achievement."
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-400">
             Time is more than a measure — it's a legacy. Crafted with precision and designed to endure, our watches embody the timeless elegance that defines your finest moments.


            </p>

            <div className="flex mt-8 gap-4 justify-center lg:justify-start">
              <Button label="Get Started" variant="primary" size="md" />
              <Button label="Read More" variant="secondary" size="md" />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-2/3 lg:w-3/5 relative mb-10 lg:mb-0">
            <img
              src="rolex-logo.svg"
              className="max-w-[300px] sm:max-w-[380px] lg:max-w-[460px] m-auto"
              alt="Rolex Logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
