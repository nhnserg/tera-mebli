 import HeroCarousel from "@/components/HeroCarousel";
import PopularCategories from "@/components/PopularCategories";
import Stages from "@/components/Stages";
import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <HeroCarousel />
      <Stages />
      <PopularCategories />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
