"use client";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "./Icon";
import { Heart, ShoppingCart, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/types";

interface CustomSliderProps {
  products: Product[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 2)
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(products.length / 2)) %
        Math.ceil(products.length / 2)
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="p-2 md:p-4">
            <div className="border rounded-lg overflow-hidden bg-white shadow-md h-full flex flex-col">
              <div className="relative w-full h-48 md:h-64 lg:h-72">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
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
                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                  <span className="p-1 rounded-full backdrop-blur-md">
                    <Link href="/favorites">
                      <Icon icon={Heart} size={24} />
                    </Link>
                  </span>
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
                  <span className="p-2 rounded-full">
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
        <button onClick={handlePrev} className="p-2 rounded-full text-black">
          <Icon icon={MoveLeft} size={24} />
        </button>
        <button onClick={handleNext} className="p-2 rounded-full text-black">
          <Icon icon={MoveRight} size={24} />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
