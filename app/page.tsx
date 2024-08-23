"use client";
import PopularCategories from "@/components/PopularCategories";
import CustomSlider from "@/components/sections/Hero/CustomSlider";
import HeroCarousel from "@/components/sections/Hero/HeroCarousel";
import HitSlider from "@/components/sections/Hero/HitSlider";
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
      oldPrice: "10,000 грн",
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
    {
      id: 5,
      imageSrc: "/assets/images/krovat.jpeg",
      name: "Ліжко",
      price: "10,000 грн.",
      label: "ХІТ",
      labelColor: "bg-[#4E3A9F]",
    },
    {
      id: 6,
      imageSrc: "/assets/images/krovat.jpeg",
      name: "Ліжко",
      price: "10,000 грн.",
      label: "ХІТ",
      labelColor: "bg-[#4E3A9F]",
    },
    {
      id: 7,
      imageSrc: "/assets/images/krovat.jpeg",
      name: "Ліжко",
      price: "10,000 грн.",
      label: "ХІТ",
      labelColor: "bg-[#4E3A9F]",
    },
    {
      id: 8,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Двоярусне ліжко "Аляска"',
      brand: "MebiGrand",
      price: "12,499 грн.",
      label: "Акція",
      labelColor: "bg-blue-500",
    },
    {
      id: 9,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Двоспальне ліжко "Прованс"',
      price: "12,499 грн.",
      oldPrice: "10,000 грн",
      label: "Знижка",
      labelColor: "bg-red-500",
    },
    {
      id: 10,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Елегантне3 ліжко "Верона"',
      brand: "UMa Uta-Major",
      price: "12,499 грн.",
      label: "Новинка",
      labelColor: "bg-green-500",
    },
    {
      id: 11,
      imageSrc: "/assets/images/krovat.jpeg",
      name: 'Елегантне ліжко2 "Міро"',
      price: "12,499 грн.",
    },
    {
      id: 12,
      imageSrc: "/assets/images/krovat.jpeg",
      name: "Ліжко3",
      price: "10,000 грн.",
      label: "ХІТ",
      labelColor: "bg-[#4E3A9F]",
    },
    {
      id: 13,
      imageSrc: "/assets/images/krovat.jpeg",
      name: "Ліжко2",
      price: "10,000 грн.",
      label: "ХІТ",
      labelColor: "bg-[#4E3A9F]",
    },
    {
      id: 14,
      imageSrc: "/assets/images/krovat.jpeg",
      name: "Ліжко1",
      price: "10,000 грн.",
      label: "ХІТ",
      labelColor: "bg-[#4E3A9F]",
    },
  ];

  return (
    <main className="bg-[#F8F8F8]">
      <HeroCarousel />
      <div className="container p-6">
        <h2 className="text-2xl font-bold mb-6">Нові товари</h2>
        <CustomSlider products={products} />
      </div>
      <div className="container p-6">
        <h2 className="text-2xl font-bold mb-6">XIT продажу</h2>
        <HitSlider products={products} />
      </div>
      <Stages />
      <PopularCategories />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
