import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Cards() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const products = [
    {
      title: "ChronoEdge Sapphire Watch",
      image: "https://images.unsplash.com/photo-1619976491498-f2dadb25fb3b?q=80&w=1964&auto=format&fit=crop",
      description: "Unmatched elegance and precision — the legacy of Rolex.",
      price: "$2,999.99",
    },
    {
      title: "Rolex Gold Edition",
      image: "https://images.unsplash.com/photo-1619976396248-56d05beb2919?q=80&w=1964&auto=format&fit=crop",
      description: "Crafted to impress. Worn to lead.",
      price: "$4,199.99",
    },
    {
      title: "Rolex Deepsea",
      image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1964&auto=format&fit=crop",
      description: "Iconic design. Timeless performance.",
      price: "$3,599.99",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
      <div className="mx-auto max-w-[1160px]">
        <header className="h-12 mb-8 justify-between items-center flex">
          <h2 className="text-[#0A2025] dark:text-white text-2xl font-bold">
            ROLEX
          </h2>
        </header>

        <main className="flex flex-col md:flex-row gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                onClick={() => navigate("/product", { state: product })}
                className="mb-7 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                src={product.image}
                alt={product.title}
              />
              <div>
                <h3 className="text-[#0A2025] dark:text-white text-2xl font-bold">
                  {product.title}
                </h3>
                <p className="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm">
                  {product.description}
                </p>
                <button
                  onClick={() => navigate("/product", { state: product })}
                  className="text-[#3e9d26] text-sm font-semibold"
                >
                  Shop
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}

export default Cards;
