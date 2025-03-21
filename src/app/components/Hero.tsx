import Image from "next/image";
import h1 from "../assets/Grey Minimalist Special Offer Banner Landscape.png"
export default function Hero() {
  return (
    <section className="relative bg-[#F8FAFC] text-black text-center">
      <div className="relative w-full h-[550px] overflow-hidden">
        <div className="w-full h-full flex">
          <Image
            src={h1}
            alt="Product 1"
            width={800}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
