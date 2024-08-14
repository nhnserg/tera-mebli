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
      setIsMobileSearchVisible(false);
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
    <div className="relative w-full">
      <div className="flex items-center w-full">
        {/* Mobile view (less than 768px) */}
        <div className="flex md:hidden items-center w-full">
          {isMobileSearchVisible ? (
            <input
              ref={inputRef}
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
        </div>

        {/* Tablet and desktop view (768px and above) */}
        <div className="hidden md:flex items-center w-full">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-2 py-2 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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
