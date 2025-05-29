import Header from "../Header";
import Footer from "../Footer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Watch() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1200, offset: 80, once: true });
  }, []);

  const watches = [
    {
      title: "Rolex Submariner",
      price: "£9,100",
      image:
        "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2025/upright-c/m126610ln-0001",
      size: "Oyster, 40 mm, Oystersteel and white gold",
      reference: "Reference 126231",
    },
    {
      title: "Omega Seamaster",
      price: "£37,700",
      image:
        "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1200/v1/catalogue/2025/upright-c/m279138rbr-0023",
         size: "Oyster, 40 mm, Oystersteel and white gold",
      reference: "Reference 126231",
    },
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
    <>
      <Header />
      <section className="px-6 py-16 bg-gradient-to-br from-[#f5f5f5] to-[#dcdcdc] dark:from-[#0a0a0a] dark:to-[#1a1a1a] min-h-screen">
        <h1 className="text-4xl font-extrabold tracking-widest text-center text-[#0a0a0a] dark:text-white mb-12 uppercase">
          Luxury Timepieces
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto cursor-pointer">
          {watches.map((watch, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="relative bg-white dark:bg-[#111] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <img
                src={watch.image}
                alt={watch.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h2 className="text-2xl font-light tracking-wider text-[#0a0a0a] dark:text-white">
                  {watch.title}
                </h2>
                <p className="text-[#D4AF37] text-lg font-semibold mt-2">
                  {watch.price}
                </p>
                <button
                  onClick={() => navigate("/product", { state: watch })}
                  className="mt-4 inline-block px-5 py-2 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-white transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Watch;
