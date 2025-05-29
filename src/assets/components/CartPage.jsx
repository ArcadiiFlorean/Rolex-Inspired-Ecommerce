import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Header from "./Header";

function CartPage() {
  // Obținem datele din context, inclusiv funcția removeFromCart
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculăm totalul
  const totalPrice = cartItems
    .reduce(
      (acc, item) => acc + parseFloat(item.price.replace(/[^0-9.]/g, "")),
      0
    )
    .toFixed(2);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            🛒 Your Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center text-gray-600 dark:text-gray-300">
              Your cart is empty.
              <div className="mt-4">
                <Link
                  to="/"
                  className="inline-block bg-[#D4AF37] text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition"
                >
                  Go Back to Shop
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-800 rounded-xl shadow p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Color: {item.color} | Strap: {item.strap}
                    </p>
                    <p className="text-lg text-[#D4AF37] font-bold mt-2">
                      {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium"
                  >
                    🗑️ Remove
                  </button>
                </div>
              ))}

              {/* Total + Checkout */}
              <div className="text-right mt-6">
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Total: <span className="text-[#D4AF37]">£{totalPrice}</span>
                </p>
                <button className="mt-4 inline-block bg-[#003B28] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#005f45] transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
