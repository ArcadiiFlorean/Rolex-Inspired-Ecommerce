import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollVideo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  return (
    <section className="relative min-h-screen z-10">
      {/* Background doar pentru contrast */}
      <div className="absolute inset-0 bg-black/80 -z-10" />

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen px-6 text-white text-center">
        <div className="max-w-3xl" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            A Legacy in Motion
          </h2>
          <p className="text-lg text-gray-300">
            From the depths of the ocean to the heights of achievement, every
            Rolex is a symbol of endurance, elegance, and innovation. Crafted
            with purpose — worn with pride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
