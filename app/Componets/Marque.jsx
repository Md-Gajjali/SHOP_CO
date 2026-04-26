"use client"
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "VERSACE",
  "ZARA",
  "GUCCI",
  "PRADA",
  "Calvin Klein",
];

const LogoMarquee = () => {
  return (
    <div className="bg-black py-10 overflow-hidden flex">
      {/* Container for the marquee */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }} // অর্ধেক পর্যন্ত গেলে আবার লুপ হবে
        transition={{
          ease: "linear",
          duration: 20, // স্পিড কমাতে চাইলে এই সংখ্যা বাড়ান
          repeat: Infinity,
        }}
      >
        {/* লোগো লিস্ট - দুইবার ডুপ্লিকেট করা হয়েছে যাতে এনিমেশন নিরবচ্ছিন্ন হয় */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="text-white text-3xl md:text-5xl font-bold px-12 tracking-tighter"
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;