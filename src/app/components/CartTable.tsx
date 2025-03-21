// app/cart/page.tsx
"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container text-black mx-auto p-6">
      <h1 className="text-2xl  text-black font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 shadow-md">
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center justify-between border-b py-4"
            >
              <Image src={item.image} alt={item.title} width={80} height={80} />
              <p className="font-semibold">{item.title}</p>
              <p>Rs. {item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-400 cursor-pointer text-white px-3 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">
            Total Price: Rs. {totalPrice}
          </div>
        </div>
      )}
    </div>
  );
}
