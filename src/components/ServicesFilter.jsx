import React, { useState } from "react";
import { Search } from "lucide-react";

export function ServicesFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Desarrollo",
    "Web",
    "Tendencias",
    "Diseño",
    "UI/UX",
    "Guía",
    "Seguridad"
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ search: value, category: activeCategory });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onFilterChange({ search: searchTerm, category });
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        <input
          type="text"
          placeholder="Buscar artículos..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}