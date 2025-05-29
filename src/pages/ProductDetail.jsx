import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductDetail() {
  const location = useLocation();
  const product = location.state;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  if (!product) {
    return <p className="text-center p-10">No product found.</p>;
  }

  return (
    <>
      <Header />
      <main className="bg-[#F4F1ED] text-[#1A1A1A] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <img
        data-aos="fade-up"
              src={product.image}
              alt={product.title}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-serif font-semibold uppercase tracking-wide mb-2">
              {product.title}
            </h1>
            <p className="text-sm text-gray-600 italic mb-6">Oyster Perpetual Collection</p>

            <p className="text-base leading-relaxed text-gray-700 mb-8">
              The emblematic diver’s watch. Designed for deep-sea exploration and legendary reliability,
              the {product.title} blends technical innovation with classic elegance. A statement of prestige,
              performance and precision, engineered for those who value timeless craftsmanship.
            </p>

            {/* SPECIFICATIONS */}
            <div className="border-t border-gray-300 pt-6 text-sm space-y-2">
              <p><strong>Case:</strong> Oystersteel, 40 mm</p>
              <p><strong>Bezel:</strong> Unidirectional rotatable, Cerachrom insert</p>
              <p><strong>Movement:</strong> Perpetual, mechanical, self-winding</p>
              <p><strong>Waterproof:</strong> 300 meters / 1,000 feet</p>
              <p><strong>Glass:</strong> Scratch-resistant sapphire</p>
              <p><strong>Bracelet:</strong> Oyster, flat three-piece links</p>
            </div>

            {/* FIND A RETAILER */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-block border border-[#003B28] text-[#003B28] px-6 py-3 rounded hover:bg-[#003B28] hover:text-white transition"
              >
                Find a Retailer
              </a>
            </div>
          </div>
        </div>

        {/* HISTORY / LEGACY (optional section) */}
        <div className="max-w-4xl mx-auto mt-20 px-6">
          <h2 className="text-2xl font-serif font-semibold mb-4">Legacy of Excellence</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Since its introduction in 1953, the {product.title} has set the standard for professional divers’ watches.
            It remains a true icon, appreciated by adventurers and horology enthusiasts alike. Its timeless design
            and robust functionality make it a modern classic — and a lifelong companion.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductDetail;
