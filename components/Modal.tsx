"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  maxWidth?: string; 
  title?: string; 
}

export default function Modal({
  show,
  onClose,
  children,
  maxWidth = "max-w-lg",
  title,
}: ModalProps) {
  return (
    <Transition.Root as={Fragment} show={show} appear>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel
            className={`relative bg-white rounded-lg shadow-xl transform transition-all p-7 mx-auto ${maxWidth}`}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>✕
            </button>
            {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
