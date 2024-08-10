"use client";

import Image from "next/image";
import Link from "next/link";
import testphoto from "../public/assets/images/testphoto.webp";

const PopularCategories = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-3xl font-semibold mb-8">Популярні категорії</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Link href="/">
            <Image
              src={testphoto}
              alt="Кухні"
              width={592}
              height={278}
              className="object-cover"
            />
          </Link>
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Кухні
          </div>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={testphoto}
              alt="Шафи"
              width={592}
              height={131}
              className="object-cover"
            />
          </Link>
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Шафи
          </div>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={testphoto}
              alt="Офісні меблі"
              width={592}
              height={131}
              className="object-cover"
            />
          </Link>
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Офісні меблі
          </div>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={testphoto}
              alt="Ліжка"
              width={592}
              height={131}
              className="object-cover"
            />
          </Link>
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Ліжка
          </div>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={testphoto}
              alt="Комоди і тумби"
              width={592}
              height={131}
              className="object-cover"
            />
          </Link>
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Комоди і тумби
          </div>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={testphoto}
              alt="Дивани"
              width={592}
              height={278}
              className="object-cover"
            />
          </Link>
          <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded">
            Дивани
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
