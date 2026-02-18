import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { categories, levels } from '../../data/courses';
import Button from '../ui/Button';

const FilterSidebar = ({ onFilterChange, mobileFiltersOpen, setMobileFiltersOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category, level: selectedLevel, priceRange });
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    onFilterChange({ category: selectedCategory, level, priceRange });
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    const newRange = [0, value];
    setPriceRange(newRange);
    onFilterChange({ category: selectedCategory, level: selectedLevel, priceRange: newRange });
  };

  const clearFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedLevel('All Levels');
    setPriceRange([0, 500]);
    onFilterChange({ category: 'All Categories', level: 'All Levels', priceRange: [0, 500] });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-72 bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 h-fit sticky top-24">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[20px] font-bold text-[#162726]">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-[13px] font-bold text-[#6C706F] hover:text-[#07A698] transition-colors uppercase tracking-wider"
          >
            Clear All
          </button>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <h4 className="text-[16px] font-bold text-[#162726] mb-5">Categories</h4>
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => handleCategoryChange(category)}
                    className="peer h-5 w-5 border-gray-300 text-[#07A698] focus:ring-[#07A698] transition-all"
                  />
                </div>
                <span className="ml-3 text-[15px] text-[#6C706F] group-hover:text-[#07A698] transition-colors font-medium">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div className="mb-10">
          <h4 className="text-[16px] font-bold text-[#162726] mb-5">Course Level</h4>
          <div className="space-y-3">
            {levels.map((level) => (
              <label key={level} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="level"
                  value={level}
                  checked={selectedLevel === level}
                  onChange={() => handleLevelChange(level)}
                  className="h-5 w-5 border-gray-300 text-[#07A698] focus:ring-[#07A698] transition-all"
                />
                <span className="ml-3 text-[15px] text-[#6C706F] group-hover:text-[#07A698] transition-colors font-medium">
                  {level}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-[16px] font-bold text-[#162726] mb-5">Price Range</h4>
          <div className="mb-6">
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#07A698]"
            />
          </div>
          <div className="flex justify-between items-center bg-[#F2F4F7] p-3 rounded-xl border border-gray-100">
            <span className="text-[14px] font-bold text-[#162726]">$0</span>
            <span className="text-[14px] font-bold text-[#07A698]">${priceRange[1]}</span>
            <span className="text-[14px] font-bold text-[#162726]">$500</span>
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter Courses
        </Button>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-[#F2F4F7]">
                  <h2 className="text-[20px] font-bold text-[#162726]">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2.5 rounded-xl text-[#6C706F] hover:bg-white hover:shadow-sm transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8">
                  {/* Categories */}
                  <div className="mb-10">
                    <h3 className="text-[16px] font-bold text-[#162726] mb-5">Categories</h3>
                    <div className="space-y-4">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="mobileCategory"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={() => handleCategoryChange(category)}
                            className="h-5 w-5 border-gray-300 text-[#07A698] focus:ring-[#07A698]"
                          />
                          <span className="ml-3 text-[15px] text-[#6C706F] group-hover:text-[#07A698] transition-colors font-medium">
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Levels */}
                  <div className="mb-10">
                    <h3 className="text-[16px] font-bold text-[#162726] mb-5">Course Level</h3>
                    <div className="space-y-4">
                      {levels.map((level) => (
                        <label key={level} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="mobileLevel"
                            value={level}
                            checked={selectedLevel === level}
                            onChange={() => handleLevelChange(level)}
                            className="h-5 w-5 border-gray-300 text-[#07A698] focus:ring-[#07A698]"
                          />
                          <span className="ml-3 text-[15px] text-[#6C706F] group-hover:text-[#07A698] transition-colors font-medium">
                            {level}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="text-[16px] font-bold text-[#162726] mb-5">Price Range</h3>
                    <div className="mb-6">
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#07A698]"
                      />
                    </div>
                    <div className="flex justify-between items-center bg-[#F2F4F7] p-3 rounded-xl">
                      <span className="text-[14px] font-bold text-[#162726]">$0</span>
                      <span className="text-[14px] font-bold text-[#07A698]">${priceRange[1]}</span>
                      <span className="text-[14px] font-bold text-[#162726]">$500</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 p-8 bg-white">
                  <div className="flex gap-4">
                    <button
                      onClick={clearFilters}
                      className="flex-1 px-6 py-4 rounded-full border border-gray-200 text-[#162726] font-bold text-[14px] hover:bg-gray-50 transition-all"
                    >
                      Reset
                    </button>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="flex-1 px-6 py-4 rounded-full bg-[#07A698] text-white font-bold text-[14px] hover:bg-[#162726] transition-all shadow-lg shadow-[#07A698]/20"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;