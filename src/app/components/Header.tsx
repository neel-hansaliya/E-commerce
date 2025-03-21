"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="bg-[#FFFFFF] text-black shadow-md py-4 sticky top-0 z-5">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl text-gray-500 font-bold">
          LOGO
        </Link>
        <nav>
          <ul className="flex space-x-6 font-bold text-gray-500">
            <li className="hover:text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/categories">Categories</Link>
            </li>
            <li className="relative">
              <Link href="/cart">
                <svg
                  className="w-6 h-6 mt-0.5 text-gray-500 hover:text-black cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                  ></path>
                </svg>
              </Link>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
