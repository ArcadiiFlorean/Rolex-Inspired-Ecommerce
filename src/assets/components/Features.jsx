import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FeatureSection({ title, description, imageUrl, reverse }) {
  return (
    <div
      className="relative py-16"
      data-aos={reverse ? "fade-left" : "fade-right"}
    >
      <div
        className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8 ${
          reverse ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Text Section */}
        <div
          className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${
            reverse ? "lg:col-start-2" : ""
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-[#1A1A1A] font-serif uppercase">
              {title}
            </h2>

            {/* Golden Line */}
            <div className="w-20 h-1 bg-[#D4AF37] mt-4 mb-6"></div>

            <p className="text-lg text-[#5C5C5C] font-light leading-relaxed">
              {description}
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex rounded-full border border-[#D4AF37] px-6 py-2 text-base font-medium text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div
            className={`${
              reverse ? "-ml-48 pr-6" : "-mr-48 pl-6"
            } lg:relative lg:m-0 lg:h-full lg:px-0`}
          >
            <img
              data-aos="zoom-in"
              src={imageUrl}
              alt=""
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#EFE7DC] py-20 ">
      <FeatureSection
        title="Precision Crafted Design"
        description="Experience timeless elegance with our handcrafted watches, combining premium materials with minimalist aesthetics to suit every occasion."
        imageUrl="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop"
      />
      <FeatureSection
        title="Unmatched Durability"
        description="Built to withstand the elements, our watches are designed with scratch-resistant sapphire glass and water-resistant casings for long-lasting performance."
        imageUrl="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=2070&auto=format&fit=crop"
        reverse={true}
      />
      <FeatureSection
        title="Engineered for Accuracy"
        description="Powered by advanced Swiss movement technology, every timepiece offers precise timekeeping, ensuring you're always on time, in style."
        imageUrl="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?q=80&w=1920&auto=format&fit=crop"
      />
    </div>
  );
}
