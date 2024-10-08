"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, ShoppingCart, LayoutDashboard } from "lucide-react";
import Icon from "../../parts/Icon";
import AuthModal from "./AuthModal";
import SearchBar from "./SearchBar";
import logo from "../public/assets/logo.webp";
import MenuModal from "./MenuModal";
import { SelectBar } from "./SelectBar";

function Header() {
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
      <header className="bg-[#D81C1B] p-4 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="pr-6">
              <Image src={logo} width={141} height={39} alt="Тера Меблі" />
            </Link>

            <div className="flex md:hidden space-x-4">
              <SearchBar />
              <Link href="/cart" className="text-white">
                <Icon icon={ShoppingCart} size={24} />
              </Link>
              <button onClick={openMenuModal} className="text-white">
                <Icon icon={Menu} size={24} />
              </button>
            </div>
          </div>
          <div className="hidden md:flex flex-grow items-center justify-between space-x-6">
            <div className="flex items-center space-x-12">
              <SelectBar />
              <Link
                href="/catalog"
                className="flex flex-col items-center text-center group focus:outline-none фф focus:ring-blue-200 hover:text-blue-200"
              >
                <Icon icon={LayoutDashboard} size={24} />
                <span>Каталог</span>
              </Link>
            </div>
            <div className="flex-grow mx-6">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-12">
              <Link
                href="/contacts"
                className="flex flex-col items-center font-semibold text-center group   focus:ring-blue-200 hover:text-blue-200"
              >
                <Icon icon={Phone} size={24} />
                <span>Контакти</span>
              </Link>
              <Link
                href="/cart"
                className="flex flex-col items-center text-center font-semibold group   focus:ring-blue-200 hover:text-blue-200"
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

export default Header;
