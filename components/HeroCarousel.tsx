"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { id: 1, src: "/assets/images/mebel_1.jpg", alt: "Slide 1" },
  { id: 2, src: "/assets/images/mebel2.webp", alt: "Slide 2" },
  { id: 3, src: "/assets/images/mebel3.webp", alt: "Slide 3" },
  { id: 4, src: "/assets/images/krovat.jpeg", alt: "Slide 4" },
  { id: 5, src: "/assets/images/testphoto.webp", alt: "Slide 5" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-5">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
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
            />
            {/* Banner */}
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white text-sm rounded-tr-lg">
              Купуйте будь-яке крісло або диван і отримайте подушку у подарунок
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <div className="absolute bottom-4 right-4 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative w-4 h-4 rounded-full border-2 transition duration-300 ease-in-out ${
              index === currentSlide
                ? "bg-white border-white"
                : "bg-transparent border-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {index === currentSlide && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
