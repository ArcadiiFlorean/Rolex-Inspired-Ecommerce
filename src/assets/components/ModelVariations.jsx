import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const baseWatchImage =
  "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7/c_limit,w_1920/v1/catalogue/2025/upright-c/m228235-0002";

const variations = [
  {
    id: 1,
    label: "Silver Dial",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/v1/catalogue/2025/configurator/raw-dial-with-shadow/51222_p_40",
  },
  {
    id: 2,
    label: "Black Dial",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-main-configurator/c_limit,w_800/v1/catalogue/2025/configurator/raw-dial-with-shadow/53678_p_40",
  },
  {
    id: 3,
    label: "Green Dial",
    image:
      "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-main-configurator/c_limit,w_800/v1/catalogue/2025/configurator/raw-dial-with-shadow/50833_p_40",
  },
];

export default function ModelVariations() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleSelect = (i) => {
    setFade(true);
    setTimeout(() => {
      setIndex(i);
      setFade(false);
    }, 200);
  };

  return (
    <section className="text-center py-10 px-4">
      <h2
        data-aos="fade-up"
        className="text-5xl font-serif tracking-widest uppercase text-[#D4AF37] drop-shadow-md mb-6"
      >
        Customize your Rolex
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-green-600 font-semibold cursor-pointer mb-8"
      >
        💚 Add to favorites
      </p>

      <div
        className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] mx-auto mb-10"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={baseWatchImage}
          alt="Base Watch"
          className="absolute top-0 left-0 w-full h-full object-contain z-0"
        />
        <img
          src={variations[index].image}
          alt={variations[index].label}
          className={`absolute top-0 left-0 w-full h-full object-contain z-10 transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          } hover:scale-105 transition-transform`}
        />
      </div>

      <div
        className="flex flex-wrap justify-center gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {variations.map((v, i) => (
          <div key={v.id} className="flex flex-col items-center">
            <button
              onClick={() => handleSelect(i)}
              className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 rounded-full overflow-hidden transition-transform duration-300 ${
                index === i
                  ? "scale-110 border-[#D4AF37] shadow-xl"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              data-aos="zoom-in"
              data-aos-delay={400 + i * 100}
            >
              <img
                src={v.image}
                alt={v.label}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </button>
            <p className="mt-2 text-sm sm:text-base text-gray-800 dark:text-white font-medium">
              {v.label}
            </p>
          </div>
        ))}
      </div>

      <p
        className="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-200"
        data-aos="fade-in"
        data-aos-delay="600"
      >
        {variations[index].label}
      </p>
    </section>
  );
}
