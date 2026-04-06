"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover blur- scale-100"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold text-yellow-400"
        >
          ROHRU CAFÉ
        </motion.h1>

        <p className="mt-4 text-gray-300">
          Best Coffee in Rohru ☕
        </p>

        <button className="mt-6 px-6 py-3 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
          View Menu
        </button>
      </div>

    </section>
  );
}