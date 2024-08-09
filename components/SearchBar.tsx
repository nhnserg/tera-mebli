import React, { useState } from "react";
import { Search } from "lucide-react";
import Icon from "./Icon";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      // логика поиска
      console.log("Searching for:", query);
    }
  };

  // Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative max-w-sm mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pl-2 py-2 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
        placeholder="Search..."
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        onClick={handleSearch}
      >
        <Icon icon={Search} size={24} className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
