/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState({total: 0, oldTotal: 0});

  // To see changes
  useEffect(() => {
    console.log("Cart item added/changed", cart);
  }, [cart]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart && storedCart.length > 0) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function totalPrice() {
    const total = cart.reduce((acc, curr) => acc + curr.newPrice, 0);
    const oldTotal = cart.reduce((acc, curr) => acc + curr.oldPrice, 0);
    setPrice({total, oldTotal});
  }

  const addToCart = (product) => {
    setCart((prevCart) => {
      [...prevCart, { ...product }]});
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, price, totalPrice }}>{children}</CartContext.Provider>;
}

// Hook for using context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within a CartProvider");
  }
  return context;
}
