"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Icon from "./Icon";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [isMobileSearchVisible, setIsMobileSearchVisible] =
    useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
      setIsMobileSearchVisible(false); // Hide input after search
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleSearchInput = () => {
    setIsMobileSearchVisible((prev) => !prev);
  };

  // Close search when clicking outside the input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsMobileSearchVisible(false);
      }
    };

    if (isMobileSearchVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileSearchVisible]);

  return (
    <div className="relative max-w-sm mx-auto">
      <div className="flex items-center">
        {/* Mobile view for screens up to 767px */}
        <div className="flex md:hidden items-center w-full">
          {isMobileSearchVisible ? (
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-2 py-2 border-gray-300 rounded w-full max-w-xs min-w-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Пошук..."
              autoFocus
            />
          ) : (
            <div className="cursor-pointer" onClick={toggleSearchInput}>
              <Icon icon={Search} size={24} className="text-white" />
            </div>
          )}
          {isMobileSearchVisible && (
            <div className="ml-2 cursor-pointer" onClick={handleSearch}>
              <Icon icon={Search} size={24} className="text-blue-500" />
            </div>
          )}
        </div>

        {/* Tablet view from 768px to 1024px */}
        <div className="hidden md:flex lg:hidden items-center w-full flex-col">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={toggleSearchInput}
          >
            <Icon icon={Search} size={24} className="text-white" />
            <span className="text-white">Пошук</span>
          </div>
          {isMobileSearchVisible && (
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="mt-2 pl-2 py-2 border-gray-300 rounded max-w-[400px] min-w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-black z-50 absolute top-full left-1 md:left-auto md:right-auto"
              placeholder="Пошук..."
              autoFocus
            />
          )}
        </div>

        {/* Desktop view for screens larger than 1024px */}
        <div className="hidden lg:flex items-center w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-2 py-2 border-gray-300 rounded w-full max-w-[600px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Пошук..."
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleSearch}
          >
            <Icon icon={Search} size={24} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
