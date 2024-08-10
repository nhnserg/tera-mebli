"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Phone,
  User,
  Heart,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";
import Icon from "./Icon";
import MenuModal from "./Modal"; // Импортируем модальное меню
import AuthModal from "./AuthModal"; // Импортируем новый компонент AuthModal
import SearchBar from "./SearchBar";
import logo from "../public/assets/logo.webp";

function NavBar() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openMenuModal = () => setIsMenuModalOpen(true);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
    closeMenuModal();
  };
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <>
      <header className="bg-red-500 p-4 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Логотип и мобильное меню */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="pr-6">
              <Image src={logo} width={141} height={39} alt="Тера Меблі" />
            </Link>
            <div className="flex md:hidden space-x-4">
              <Link href="/basket" className="text-white">
                <Icon icon={ShoppingCart} size={24} />
              </Link>
              <button onClick={openMenuModal} className="text-white">
                <Icon icon={Menu} size={24} />
              </button>
            </div>
          </div>
          {/* Десктопное меню и поисковая строка */}
          <div className="hidden md:flex flex-grow items-center space-x-6">
            <div className="flex items-center space-x-12">
              {/* <SelectBar /> */}
              <Link
                href="/catalog"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={LayoutDashboard} size={24} color="white" />
                <span>Каталог</span>
              </Link>
              <Link
                href="/contacts"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={Phone} size={24} color="white" />
                <span>Контакти</span>
              </Link>
            </div>

            <div className="flex-grow max-w-sm">
              <SearchBar />
            </div>

            <div className="flex items-center space-x-12">
              <button
                onClick={openAuthModal}
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={User} size={24} className="mb-1" />
                <span>Кабінет</span>
              </button>
              <Link
                href="/favorites"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={Heart} size={24} className="mb-1" />
                <span>Улюбленне</span>
              </Link>
              <Link
                href="/basket"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={ShoppingCart} size={24} className="mb-1" />
                <span>Кошик</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <MenuModal show={isMenuModalOpen} onClose={closeMenuModal}></MenuModal>
      <AuthModal show={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
}

export default NavBar;
