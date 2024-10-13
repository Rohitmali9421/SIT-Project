import React, { useState, useEffect, useRef } from 'react';
import { FaSortDown } from 'react-icons/fa'; // Importing sort down icon
import { IoIosArrowDown } from 'react-icons/io'; // Importing down arrow icon
import ProductList from './ProductList';

function ProductFilter() {
    // State to manage the dropdown visibility
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Function to toggle the category dropdown
    const toggleCategoryDropdown = () => {
        setIsCategoryOpen((prev) => !prev);
    };

    // Function to toggle the sort dropdown
    const toggleSortDropdown = () => {
        setIsSortOpen((prev) => !prev);
    };

    // Ref to detect clicks outside of dropdowns
    const dropdownRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCategoryOpen(false);
                setIsSortOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section aria-labelledby="filter-heading" className="filters-section mb-6 px-6 md:px-14" ref={dropdownRef}>
            <div className="filter-options flex items-center justify-center space-x-4 mb-4">
                {/* Sort By Dropdown */}
                <div className="relative">
                    <button
                        className="button flex items-center px-4 py-2 text-gray-700  rounded hover:bg-gray-200"
                        id="sort-button"
                        type="button"
                        aria-expanded={isSortOpen}
                        onClick={toggleSortDropdown}
                    >
                        Sort By
                        <IoIosArrowDown className="icon w-4 h-4 ml-1" />
                    </button>

                    {/* Sort Dropdown Menu */}
                    {isSortOpen && (
                        <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg">
                            <ul className="py-1">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: Low to High</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: High to Low</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Newest Arrivals</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Best Sellers</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Category Dropdown */}
                <div className="relative">
                    <button
                        className="button flex items-center px-4 py-2 text-gray-700  rounded hover:bg-gray-200"
                        id="category-button"
                        type="button"
                        aria-expanded={isCategoryOpen}
                        onClick={toggleCategoryDropdown}
                    >
                        <span>Category</span>
                        <IoIosArrowDown className="icon w-4 h-4 ml-1" />
                    </button>

                    {/* Category Dropdown Menu */}
                    {isCategoryOpen && (
                        <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg">
                            <ul className="py-1">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 2</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 3</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 4</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <ProductList />
        </section>
    );
}

export default ProductFilter;
