"use client";
import Link from "next/link";
import Image from "next/image";
import Icon from "./parts/Icon";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
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
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-md font-semibold mb-1">{product.name}</h3>
          {product.brand && (
            <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
          )}
          {product.oldPrice && (
            <p className="text-sm text-gray-400 line-through mb-1">
              {product.oldPrice}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-red-600">{product.price}</p>
          <span className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
            <Link href="/cart">
              <Icon icon={ShoppingCart} size={24} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
