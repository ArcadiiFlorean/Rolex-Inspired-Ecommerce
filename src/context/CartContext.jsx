import React, { createContext, useState } from "react";

// 1. Creăm contextul global
export const CartContext = createContext();

// 2. Furnizorul (provider) care va înconjura aplicația
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Funcție pentru a adăuga produse în coș
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Funcție pentru a elimina produsul din coș după index
  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // Returnăm contextul cu valorile dorite
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
