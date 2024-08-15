"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import mebel1 from "../public/assets/images/mebel_1.jpg";
import mebel2 from "../public/assets/images/mebel2.webp";
import mebel3 from "../public/assets/images/mebel3.webp";
import mebel4 from "../public/assets/images/krovat.jpeg";
import mebel5 from "../public/assets/images/testphoto.webp";

const slides = [
  { id: 1, src: mebel1, alt: "Slide 1" },
  { id: 2, src: mebel2, alt: "Slide 2" },
  { id: 3, src: mebel3, alt: "Slide 3" },
  { id: 4, src: mebel4, alt: "Slide 4" },
  { id: 5, src: mebel5, alt: "Slide 5" },
];

const categories = [
  { id: 1, name: "Кухонні меблі" },
  { id: 2, name: "Меблі вітальні" },
  { id: 3, name: "Меблі спальні" },
  { id: 4, name: "Меблі для передпокою" },
  { id: 5, name: "Офісні меблі" },
  { id: 6, name: "Шафи" },
  { id: 7, name: "М'які меблі" },
  { id: 8, name: "Ліжка" },
  { id: 9, name: "Матраци" },
  { id: 10, name: "Комоди і тумби" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto mt-5 px-4 md:px-6">
      <div className="hidden md:block w-1/4 p-4 bg-[#F8F8F8]">
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className="py-2 text-lg hover:text-blue-600 cursor-pointer"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-3/4 relative">
        <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white text-sm rounded-tr-lg">
                Купуйте будь-яке крісло або диван і отримайте подушку у
                подарунок
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;


 // const [categories, setCategories] = useState([]);

  // useEffect(() => {
    // Функция для загрузки данных из API
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch("/api/categories"); 
  //       const data = await response.json();
  //       setCategories(data); 
  //     } catch (error) {
  //       console.error("Ошибка при загрузке категорий:", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []); это для бд