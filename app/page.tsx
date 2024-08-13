import CustomSlider from "@/components/CustomSlider";
import HeroCarousel from "@/components/HeroCarousel";
import PopularCategories from "@/components/PopularCategories";
import Stages from "@/components/Stages";

import WhyChooseUs from "@/components/WhyChooseUs";

const Home = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Двоярусне ліжко "Аляска"',
      brand: "MebiGrand",
      price: "12,499 грн.",
      label: "Акція",
      labelColor: "bg-blue-500",
    },
    {
      id: 2,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Двоспальне ліжко "Прованс"',
      price: "12,499 грн.",
      oldPrice: "10,000грн",
      label: "Знижка",
      labelColor: "bg-red-500",
    },
    {
      id: 3,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Елегантне ліжко "Верона"',
      brand: "UMa Uta-Major",
      price: "12,499 грн.",
      label: "Новинка",
      labelColor: "bg-green-500",
    },
    {
      id: 4,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Елегантне ліжко "Міро"',
      price: "12,499 грн.",
    },
  ];

  return (
    <main className="bg-[#F8F8F8]">
      <HeroCarousel />
      <div className="container p-6">
        <h2 className="text-2xl font-bold mb-6">Нові товари</h2>
        <CustomSlider products={products} />
      </div>
      <Stages />
      <PopularCategories />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
