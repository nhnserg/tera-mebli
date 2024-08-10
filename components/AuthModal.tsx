"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "../public/assets/icons/google.svg";

const AuthModal = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Modal show={show} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          {isRegister ? "Зареєструватися" : "Вхід"}
        </h2>
        <form className="space-y-6">
          {isRegister && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ім'я"
                required
                className="mt-1 block w-full max-w-xs mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              className="mt-1 block w-full max-w-xs mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Пароль"
              required
              className="mt-1 block w-full max-w-xs mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mx-auto w-max py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isRegister ? "Зареєструватися" : "Увійти"}
            </button>
          </div>
        </form>
        <div className="text-sm mt-4">
          <p>
            {isRegister ? (
              <>
                Вже є аккаунт?{" "}
                <button
                  type="button"
                  onClick={() => setIsRegister(false)}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Увійти
                </button>
              </>
            ) : (
              <>
                Немає аккаунта?{" "}
                <button
                  type="button"
                  onClick={() => setIsRegister(true)}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Зареєструватися
                </button>
              </>
            )}
          </p>
        </div>
        <div className="mt-6">
          <p className="text-sm">або</p>
          <button
            type="button"
            onClick={() => signIn("google")}
            className="mt-4 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-auto"
          >
            Увійти з Google
            <Image
              src={google}
              alt="Google_icon"
              width={24}
              height={24}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
