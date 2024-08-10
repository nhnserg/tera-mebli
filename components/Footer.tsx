"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Icon from "./Icon";
import logo from '../public/assets/logo.webp'
import tiktok from '../public/assets/icons/Social.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex justify-between items-start footer-container">
        <div className="flex flex-col">
          <Image
            src={logo}
            alt="Тера Меблі"
            width={150}
            height={50}
            className="pb-5"
          />
        </div>

        <div className="flex flex-col">
          <ul>
            <li className="mb-2">
              <Link href="#" className="text-gray-300 hover:text-white">
                Магазини
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-gray-300 hover:text-white">
                Про нас
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-gray-300 hover:text-white">
                Акції
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="font-semibold mb-2">Зв’язатись з нами</p>
          <div className="flex flex-col footer-hidden ">
            <a
              href="tel:+380666719366"
              className="text-gray-300 hover:text-white"
            >
              +380666719366
            </a>
            <a
              href="tel:+380976719366"
              className="text-gray-300 hover:text-white"
            >
              +380976719366
            </a>
            <a
              href="tel:+380506719366"
              className="text-gray-300 hover:text-white"
            >
              +380506719366
            </a>
          </div>
          <div className="flex mt-4 space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <Icon icon={Facebook} className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Icon icon={Instagram} className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Image
                src={tiktok}
                alt="tiktok"
                width={16}
                height={16}
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Icon icon={Youtube} className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col footer-hidden md:block">
          <p className="font-semibold mb-2">Розклад</p>
          <p className="text-gray-300">Будні: 09:00 - 19:00</p>
          <p className="text-gray-300">Вихідні: 09:00 - 19:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
