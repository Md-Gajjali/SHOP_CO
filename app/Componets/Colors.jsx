"use client"
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ColorPicker = () => {
  const colors = [
    { name: 'green', bg: 'bg-[#12b01a]' },
    { name: 'red', bg: 'bg-[#e51d1d]' },
    { name: 'yellow', bg: 'bg-[#f7e014]' },
    { name: 'orange', bg: 'bg-[#f58216]' },
    { name: 'cyan', bg: 'bg-[#1acdf5]' },
    { name: 'blue', bg: 'bg-[#1d46e5]' },
    { name: 'purple', bg: 'bg-[#8a1ae5]' },
    { name: 'pink', bg: 'bg-[#f51693]' },
    { name: 'white', bg: 'bg-[#ffffff]', border: 'border-gray-300' },
    { name: 'black', bg: 'bg-[#000000]' },
  ];

  const [selectedColor, setSelectedColor] = useState('blue');

  return (
    <div className="flex flex-wrap gap-4 p-6 bg-white rounded-lg">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => setSelectedColor(color.name)}
          className={`
            relative w-12 h-12 rounded-full transition-all duration-200 
            flex items-center justify-center border-2
            ${color.bg} 
            ${color.border || 'border-transparent'}
            ${selectedColor === color.name ? 'scale-110 shadow-lg' : 'hover:scale-105'}
          `}
        >
          {selectedColor === color.name && (
            <Check 
              className={`w-6 h-6 ${color.name === 'white' ? 'text-black' : 'text-white'}`} 
              strokeWidth={3}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;