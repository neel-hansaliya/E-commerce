// app/page.tsx
import Hero from "../app/components/Hero";
import Stats from "../app/components/Stats";
import Categories from "../app/components/Categories";
import FeaturedProducts from "../app/components/FeaturedProduct";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}
