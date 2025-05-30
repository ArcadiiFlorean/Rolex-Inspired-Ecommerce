import { useState } from "react";

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

  const handleSelect = (i) => {
    setFade(true); // start fade out
    setTimeout(() => {
      setIndex(i);
      setFade(false); // fade back in
    }, 200); // match duration-200
  };

  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-bold mb-2">Customize your Rolex</h2>
      <p className="text-green-600 font-semibold cursor-pointer mb-6">
        💚 Add to favorites
      </p>

      <div className="relative w-60 h-60 mx-auto mb-6">
        {/* Ceasul de bază */}
        <img
          src={baseWatchImage}
          alt="Base Watch"
          className="absolute top-0 left-0 w-full h-full object-contain z-0"
        />

        {/* Variația suprapusă cu fade */}
        <img
          src={variations[index].image}
          alt={variations[index].label}
          className={`absolute top-0 left-0 w-full h-full object-contain z-10 transition-opacity duration-200 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Selectoare vizuale */}
      <div className="flex justify-center gap-4">
        {variations.map((v, i) => (
          <button
            key={v.id}
            onClick={() => handleSelect(i)}
            className={`w-14 h-14 border-2 rounded-full overflow-hidden transition-transform ${
              index === i ? "scale-110 border-[#D4AF37]" : "opacity-70"
            }`}
          >
            <img
              src={v.image}
              alt={v.label}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Numele variației curente */}
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
        {variations[index].label}
      </p>
    </section>
  );
}
