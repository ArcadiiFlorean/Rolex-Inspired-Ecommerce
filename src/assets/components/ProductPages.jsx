import { useLocation } from "react-router-dom";

function ProductPages() {
  const { state } = useLocation();
  const { title, image, description, price } = state || {};

  // Protecție în caz că accesezi pagina direct (fără state)
  if (!state) {
    return (
      <div className="text-center text-red-600 text-xl mt-10">
        No product data available.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image and Buttons */}
          <div className="md:w-1/2">
            <div className="h-[460px] rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={title}
              />
            </div>
            <div className="flex gap-4">
              <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                Add to Cart
              </button>
              <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 space-y-6">
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
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Color:
              </span>
              <div className="flex items-center mt-2 gap-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200" />
                <button className="w-6 h-6 rounded-full bg-yellow-500" />
                <button className="w-6 h-6 rounded-full bg-gray-400" />
                <button className="w-6 h-6 rounded-full bg-blue-600" />
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Strap Type:
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Leather", "Metal", "Silicone"].map((strap) => (
                  <button
                    key={strap}
                    className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600"
                  >
                    {strap}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                This exquisite watch features automatic Swiss movement,
                scratch-resistant sapphire crystal, and water resistance up to
                100 meters. Whether you're at the office or on a night out, the
                {` ${title} `}
                ensures you're always on time — and in style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPages;
