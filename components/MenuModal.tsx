"use client";
import React from "react";
import Icon from "./Icon";
import { LayoutDashboard, Phone, Heart } from "lucide-react";
import Link from "next/link";
import Modal from "./Modal";

interface MenuModalProps {
  show: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <div>
        <h2 className="text-xl font-semibold mb-4">Меню</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/catalog" className="flex items-center">
            <Icon icon={LayoutDashboard} size={24} className="mr-2" />
            Каталог
          </Link>
          <Link href="/contacts" className="flex items-center">
            <Icon icon={Phone} size={24} className="mr-2" />
            Контакти
          </Link>
          <Link href="/favorites" className="flex items-center">
            <Icon icon={Heart} size={24} className="mr-2" />
            Улюбленне
          </Link>
        </nav>
      </div>
    </Modal>
  );
};

export default MenuModal;
