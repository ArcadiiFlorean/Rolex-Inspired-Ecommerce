import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Cards() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  const products = [
        {
      title: "Omega Aqua Terra",
      price: "£41,200",
      image:
        "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2025/upright-c/m126508-0008",
      size: "Oyster, 40 mm, Oystersteel and white gold",
      reference: "Reference 126231",
    },
    {
      title: "Cosmograph Daytona",
      price: "£31,750",
      image:
        "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2025/upright-c/m126518ln-0014",
      size: "Oyster, 40 mm, Oystersteel and white gold",
      reference: "Reference 126231",
    },
    {
      title: "Rolex Day-Date",
      price: "£50,600",
      image:
        "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2025/upright-c/m336935-0005",
      size: "Oyster, 40 mm, Oystersteel and white gold",
      reference: "Reference 126231",
    },
    {
      title: "Rolex Yacht-Master",
      price: "£13,600",
      image:
        "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2025/upright-c/m126231-0020",
      size: "Oyster, 40 mm, Oystersteel and white gold",
      reference: "Reference 126231",
    },
  ];

  return (
    <section className="w-full bg-[#EFE7DC] py-20 px-6">
      <div className="mx-auto max-w-[1240px]">
        <header className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0A2025] uppercase tracking-wide">
            Signature Timepieces
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
        </header>

        <main className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => navigate("/product", { state: product })}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#0A2025] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm text-[#444] mt-2 mb-3">
                  {product.description}
                </p>
                <p className="text-[#217A3C] font-bold text-lg">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}

export default Cards;
