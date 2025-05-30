import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Fixed video background stays while scrolling */}
      <div id="hero"  className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video-Rolex.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Section with centered text that scrolls away */}
      <section  className="relative h-screen flex items-center justify-center px-6 text-white text-center">
        <div className="space-y-6 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide">
            A Crown for Every Achievement
          </h1>
          <p className="text-lg text-gray-300 italic">
            Timeless precision, crafted for those who define their own legacy.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
