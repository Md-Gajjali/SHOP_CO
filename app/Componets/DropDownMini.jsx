"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // আপনি চাইলে সাধারণ SVG-ও ব্যবহার করতে পারেন

const options = [
  "Most Popular",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-[16px] focus:outline-none"
      >
        <span className="text-gray-500">Sort by:</span>
        <span className="font-semibold text-black flex items-center gap-1">
          {selected}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* স্ক্রিনের যেকোনো জায়গায় ক্লিক করলে ড্রপডাউন বন্ধ হওয়ার জন্য Overlay */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            ></div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-xl z-20 overflow-hidden"
            >
              <ul className="py-1">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-4 py-2 text-sm cursor-pointer transition-colors
                      ${selected === option 
                        ? "bg-gray-100 font-bold text-black" 
                        : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}