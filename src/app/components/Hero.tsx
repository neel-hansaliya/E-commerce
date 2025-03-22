import Image from "next/image";
import h1 from "../assets/Grey Minimalist Special Offer Banner Landscape.png";

export default function Hero() {
  return (
    <section className="relative bg-[#F8FAFC] text-black text-center">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image
          src={h1}
          alt="Product 1"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
