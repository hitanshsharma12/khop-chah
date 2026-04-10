"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          priority
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* 🔥 Content */}
      <div className="px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            <span className="text-yellow-400">THE URBAN</span>
            <span className="text-white"> | </span>
            <span className="text-amber-300">खोप Cha!</span>
          </h1>

          <p className="mt-4 text-gray-200 text-base md:text-lg tracking-wide">
            • FAST FOOD • DAILY NEEDS • HOME DELIVERY
          </p>

          <p className="mt-3 text-yellow-300 italic text-sm">
            “ रोहड़ू की मिट्टी, शहरी टच ”
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            View Menu ↓
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}