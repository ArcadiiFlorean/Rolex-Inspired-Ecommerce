import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";  
import Footer from "./Footer";

function ProductPages() {
  const { state } = useLocation();
  const { title, image, description, price } = state || {};

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStrap, setSelectedStrap] = useState(null);

  // Scroll to top & set page title
  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) {
      document.title = `Rolex | ${title}`;
    }
  }, [title]);

  // Show message if accessed directly
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

  const colors = [
    { name: "Black", class: "bg-gray-800 dark:bg-gray-200" },
    { name: "Gold", class: "bg-yellow-500" },
    { name: "Silver", class: "bg-gray-400" },
    { name: "Blue", class: "bg-blue-600" },
  ];

  const strapTypes = ["Leather", "Metal", "Silicone"];

  return (
    <>
      <Header />

   <div className="bg-gray-100 dark:bg-gray-800 py-16">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image & Actions */}
            <section className="md:w-1/2">
              <figure className="h-[460px] rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={title}
                />
              </figure>

              <div className="flex gap-4">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  🛒 Add to Cart
                </button>
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  ❤️ Wishlist
                </button>
              </div>
            </section>

            {/* Product Info */}
            <section className="md:w-1/2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>

              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    {price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Color:
                </span>
                <div className="flex items-center mt-2 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-6 h-6 rounded-full ${
                        color.class
                      } border-2 ${
                        selectedColor === color.name
                          ? "border-[#D4AF37]"
                          : "border-transparent"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Strap Type Selection */}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Strap Type:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {strapTypes.map((strap) => (
                    <button
                      key={strap}
                      onClick={() => setSelectedStrap(strap)}
                      className={`py-2 px-4 rounded-full font-bold ${
                        selectedStrap === strap
                          ? "bg-[#D4AF37] text-white"
                          : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
                      }`}
                    >
                      {strap}
                    </button>
                  ))}
                </div>
              </div>

              {/* Static Product Description */}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  This exquisite watch features automatic Swiss movement,
                  scratch-resistant sapphire crystal, and water resistance up to
                  100 meters. Whether you're at the office or on a night out,
                  the
                  <strong> {title} </strong>
                  ensures you're always on time — and in style.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPages;
