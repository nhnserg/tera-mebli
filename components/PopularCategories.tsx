"use client";

import Image from "next/image";

const PopularCategories = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-8">Популярні категорії</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Image
            src="/images/kitchens.jpg" 
            alt="Кухні"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Кухні
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/wardrobes.jpg" 
            alt="Шафи"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Шафи
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/office-furniture.jpg" 
            alt="Офісні меблі"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Офісні меблі
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/beds.jpg" 
            alt="Ліжка"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Ліжка
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/dressers.jpg" 
            alt="Комоди і тумби"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Комоди і тумби
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/sofas.jpg" 
            alt="Дивани"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Дивани
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
