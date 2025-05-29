import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";

function ProductPages() {
  const { state } = useLocation();
  const { title, image, reference, size, price } = state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1000, offset: 100, once: true });
    if (title) {
      document.title = `Rolex | ${title}`;
    }
  }, [title]);

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-red-600 text-xl">
        <p>No product data available.</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-[#F4F1ED] ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Descriere - stânga */}
            <div className="md:w-1/2 space-y-6" data-aos="fade-right">
              <h1 className="text-3xl font-serif font-bold text-gray-900">
                {title}
              </h1>
              <p className="text-gray-700 text-base">{size}</p>
              <p className="text-gray-700 text-base">{reference}</p>
              <p className="text-xl font-semibold text-[#003B28]">{price}</p>
            </div>

            {/* Imagine - dreapta */}
            <div className="md:w-1/2" data-aos="zoom-in">
              <img
                src={image}
                alt={title}
                className="w-full max-w-[500px] mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPages;
