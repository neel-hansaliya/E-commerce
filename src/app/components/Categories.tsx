import Image from "next/image";

// Importing images from assets folder
import men from "../assets/man-in-suit-and-tie.png";
import female from "../assets/woman-avatar.png";
import kids from "../assets/little-kid.png";
import cosmetics from "../assets/skincare.png";
import accessories from "../assets/accessory.png";
import home from "../assets/home-icon-silhouette.png";
import footwear from "../assets/mountain.png";
import sports from "../assets/football.png";

const categories = [
  { name: "Men", icon: men },
  { name: "Women", icon: female },
  { name: "Kids", icon: kids },
  { name: "Cosmetics", icon: cosmetics },
  { name: "Accessories", icon: accessories },
  { name: "Home", icon: home },
  { name: "Footwears", icon: footwear },
  { name: "Sports", icon: sports },
];

export default function Categories() {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl font-bold text-black mb-4">Categories</h2>
      <p className="text-gray-500 mb-6">Shop by your favorite categories.</p>

      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 place-items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="bg-gray-200 p-4 rounded-full w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image src={category.icon} alt={category.name} width={40} height={40} />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
