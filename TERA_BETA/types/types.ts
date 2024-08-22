export interface Product {
  id: number;
  imageSrc: string;
  name: string;
  brand?: string;
  oldPrice?: string;
  price: string;
  label?: string;
  labelColor?: string;
}