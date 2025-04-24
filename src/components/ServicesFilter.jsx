import React, { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";

export default function ServicesFilter({ onFilterChange = () => {} }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
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

  // Efecto para aplicar los filtros cuando cambian
  useEffect(() => {
    // Verificar que onFilterChange sea una función antes de llamarla
    if (typeof onFilterChange === 'function') {
      onFilterChange({ search: searchTerm, category: activeCategory });
    }
  }, [searchTerm, activeCategory, onFilterChange]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="w-full mb-8 service-card">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-12 py-3 rounded-lg border border-border bg-background/80 text-foreground backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            aria-label="Buscar artículos"
          />
          {searchTerm && (
            <button 
              onClick={clearSearch}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            aria-label="Mostrar filtros"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        <div className={`flex flex-wrap gap-2 ${isFilterOpen ? 'flex' : 'md:flex hidden'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-background/60 text-muted-foreground hover:bg-background/80 backdrop-blur-sm border border-border"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
        
        {activeCategory !== "Todos" && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Filtro activo:</span>
            <span className="px-2 py-1 rounded-md bg-primary/10 text-primary flex items-center gap-1">
              {activeCategory}
              <button 
                onClick={() => setActiveCategory("Todos")} 
                className="hover:text-white transition-colors"
                aria-label="Eliminar filtro"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}