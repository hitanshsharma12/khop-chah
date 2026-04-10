"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-8 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-yellow-400/20">

      {/* Logo */}
      <h1 className="text-2xl font-semibold text-yellow-400 tracking-wide">
        खोप Cha!
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-white"></div>

      {/* 🔥 Hanging Button */}
      <div className="relative flex items-start">

        {/* Ropes */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex justify-between w-10">
          <span className="w-[2px] h-5 bg-yellow-300/70"></span>
          <span className="w-[2px] h-5 bg-yellow-300/70"></span>
        </div>

        {/* Button */}
        <motion.button
          initial={{ rotate: -2 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
          className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-lg 
                     hover:bg-yellow-400 hover:text-black transition shadow-md bg-black/40"
        >
          Order Now
        </motion.button>

      </div>

    </nav>
  );
}