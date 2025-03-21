'use client';
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    title: "Makeup Kit",
    image:
      "https://m.media-amazon.com/images/I/71cj+2DFMpL._AC_UF894,1000_QL80_.jpg",
    rating: 4.2,
    price: 825,
    oldPrice: 944,
    discount: "12% off",
  },
  {
    id: 2,
    title: "Kids Denim Jacket",
    image: "https://m.media-amazon.com/images/I/41AG5ErzuIL._AC_.jpg",
    rating: 4.2,
    price: 825,
    oldPrice: 934,
    discount: "11% off",
  },
  {
    id: 3,
    title: "Red Check Shirt",
    image: "https://m.media-amazon.com/images/I/51bgUxvTiCL._SX679_.jpg",
    rating: 4.2,
    price: 825,
    oldPrice: 1345,
    discount: "18% off",
  },
  {
    id: 4,
    title: "Leather Boots",
    image: "https://m.media-amazon.com/images/I/51U2mhxQdaL._AC_UY1000_.jpg",
    rating: 4.2,
    price: 825,
    oldPrice: 846,
    discount: "15% off",
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  return (
    <section className="py-10 bg-[#F8FAFC] text-black px-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link href="/products">
          <button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 cursor-pointer rounded-md">
            View All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-[400px]"
          >
            {/* Image with fixed size */}
            <div className="w-full h-[200px] flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="mt-2 flex flex-col flex-grow">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-gray-500 ml-32 text-white px-2 py-1 rounded-md">
                  ⭐ {product.rating}
                </span>
              </div>
              <h3 className="font-semibold mt-1 text-center">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm text-center">
                Lorem ipsum dolor sit amet.
              </p>

              {/* Pricing Section */}
              <div className="flex items-center justify-center mt-2">
                <span className="font-bold text-lg">Rs.{product.price}</span>
                <span className="line-through text-gray-500 ml-2 text-sm">
                  Rs.{product.oldPrice}
                </span>
                <span className="text-red-500 text-sm ml-2">
                  {product.discount}
                </span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="w-full cursor-pointer bg-green-500 hover:bg-green-400 text-white py-2 rounded-md mt-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping and Payment Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl">🚚</span>
          <p className="font-semibold">Free Shipping</p>
          <p className="text-sm text-gray-500">Above all orders over Rs. 200</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">💰</span>
          <p className="font-semibold">Money Guarantee</p>
          <p className="text-sm text-gray-500">45 Days for Exchange</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">🎧</span>
          <p className="font-semibold">Online Support</p>
          <p className="text-sm text-gray-500">24/7 Customer Care</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">💳</span>
          <p className="font-semibold">Flexible Payment</p>
          <p className="text-sm text-gray-500">
            Pay with multiple Credit Cards
          </p>
        </div>
      </div>
    </section>
  );
}
