import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";

function TotalsCard() {
  const { cart, totalPrice, price } = useCart();

  useEffect(() => {
    totalPrice();
  }, [cart]);

  return (
    <div className="w-[300px] rounded-lg shadow-md shadow-slate-200 p-4 bg-white">
      <h1 className="text-3xl font-bold mb-8">Total</h1>
      <div className="flex flex-col gap-1">
        {cart.map((prod) => {
          return (
            <div className="flex justify-between">
              <span>{prod.name}</span>
              <span>Rs. {prod.newPrice}</span>
            </div>
          );
        })}
      </div>
      <hr className="mt-6" />
      {
        <>
          <div className="flex justify-between">
            <span>Total Before Discount </span>
            <span>Rs. {price.oldTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Before Discount </span>
            <span>Rs. {price.total}</span>
          </div>
        </>
      }
    </div>
  );
}

export default TotalsCard;
