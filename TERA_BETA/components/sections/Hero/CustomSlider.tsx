"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Icon from "../../parts/Icon";
import { ShoppingCart, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/types";

interface CustomSliderProps {
  products: Product[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slidesPerView = isSmallScreen ? 2 : 4;

  const totalProducts = products.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProducts);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts
    );
  };

  const itemsToShow = [
    ...products.slice(currentIndex, currentIndex + slidesPerView),
    ...products.slice(
      0,
      Math.max(0, currentIndex + slidesPerView - totalProducts)
    ),
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        {itemsToShow.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className={`p-2 md:p-4 ${isSmallScreen ? "w-1/2" : "w-1/4"}`}
          >
            <div className="border rounded-lg overflow-hidden bg-white shadow-md h-full flex flex-col transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative w-full h-48 md:h-64 lg:h-72">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg transition-opacity duration-300 ease-in-out hover:opacity-90"
                />
                <div className="absolute top-2 left-2 flex flex-col space-y-1">
                  {product.label && (
                    <span
                      className={`px-2 py-1 text-xs text-white rounded ${product.labelColor}`}
                    >
                      {product.label}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-md font-semibold mb-1">{product.name}</h3>
                  {product.brand && (
                    <p className="text-sm text-gray-500 mb-2">
                      {product.brand}
                    </p>
                  )}
                  {product.oldPrice && (
                    <p className="text-sm text-gray-400 line-through mb-1">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-red-600">
                    {product.price}
                  </p>
                  <span className="p-2 rounded-full hover:bg-red-100 transition-colors duration-300">
                    <Link href="/cart">
                      <Icon icon={ShoppingCart} size={24} />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-4 right-4 flex space-x-2">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
        >
          <Icon icon={MoveLeft} size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
        >
          <Icon icon={MoveRight} size={24} />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
