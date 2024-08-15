import React from "react";
import CustomSlider from "./CustomSlider";
import { Product } from "@/types/types";

interface HitSliderProps {
  products: Product[];
}

const HitSlider: React.FC<HitSliderProps> = ({ products }) => {
  const hitProducts = products.filter((product) => product.label === "ХІТ");

  return <CustomSlider products={hitProducts} />;
};

export default HitSlider;
