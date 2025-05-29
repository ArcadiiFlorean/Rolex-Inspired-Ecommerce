import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./Header";  
import Footer from "./Footer";

function ProductPages() {
  const { state } = useLocation();
  const { title, image, description, price } = state || {};

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStrap, setSelectedStrap] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="bg-[#F4F1ED] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image & Actions */}
            <section   className="md:w-1/2 space-y-6">
              <figure className="h-[460px] rounded-lg overflow-hidden bg-gray-300 mb-4">
                <img   
             
                  className="w-full h-full object-cover"
                  src={image}
                  alt={title}
                 
                />
              </figure>

              {/* 360° View */}
              <div className="bg-white border p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">360° View</h3>
                <img
                  src="https://media.rolex.com/image/upload/q_auto,f_auto,t_s9/pim/rolexcom/prod/images/models/m126610ln-0001/model-page/gallery/gallery-01.jpg"
                  alt="360 View"
                  className="rounded-lg"
                />
              </div>

              {/* Video */}
              <div className="bg-white border p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">Watch Video</h3>
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src="https://www.youtube.com/embed/hB7aFjYQz1U"
                  title="Product Video"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex gap-4">
                <button className="w-full bg-[#003B28] text-white py-2 px-4 rounded-full font-bold hover:bg-[#002f22]">
                  Find a Retailer
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  Add to Wishlist
                </button>
              </div>
            </section>

            {/* Product Info */}
            <section className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-gray-800">
                {title}
              </h2>

              <p className="text-gray-700 text-base leading-relaxed">
                {description}
              </p>

              {/* Color Selection */}
              <div>
                <span className="font-bold text-gray-700">Select Color:</span>
                <div className="flex items-center mt-2 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-6 h-6 rounded-full ${color.class} border-2 ${
                        selectedColor === color.name ? "border-[#D4AF37]" : "border-transparent"
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Strap Type Selection */}
              <div>
                <span className="font-bold text-gray-700">Select Strap Type:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {strapTypes.map((strap) => (
                    <button
                      key={strap}
                      onClick={() => setSelectedStrap(strap)}
                      className={`py-2 px-4 rounded-full font-bold ${
                        selectedStrap === strap
                          ? "bg-[#D4AF37] text-white"
                          : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                      }`}
                    >
                      {strap}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="text-sm text-gray-800 space-y-1">
                <p><strong>Case:</strong> Oystersteel, 40 mm</p>
                <p><strong>Bezel:</strong> Cerachrom insert in ceramic</p>
                <p><strong>Glass:</strong> Scratch-resistant sapphire</p>
                <p><strong>Movement:</strong> Perpetual, mechanical, self-winding</p>
                <p><strong>Water Resistance:</strong> 300 meters / 1,000 feet</p>
              </div>

              <div>
                <span className="font-bold text-gray-700">Product Description:</span>
                <p className="text-gray-600 text-sm mt-2">
                  This exquisite timepiece combines iconic design with precise functionality. Crafted to the highest standards,
                  it’s a symbol of elegance and endurance. Featuring {selectedColor || "a choice of colors"} and a {selectedStrap || "versatile strap"}, the
                  <strong> {title} </strong> adapts to your lifestyle and completes your look with sophistication.
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
