"use client";
import { useState } from "react";

export function SelectBar() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("UA");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedLanguage(value);
  };

  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="bg-transparent text-white font-semibold p-0 rounded"
      >
        <option value="UA" className="text-black">
          {selectedLanguage === "UA"}UA 
        </option>
        <option value="RU" className="text-black">
          {selectedLanguage === "RU"}RU
        </option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black"></div>
    </div>
  );
}
