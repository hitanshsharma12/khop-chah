"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMotorcycle, FaParking } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden px-4">

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

      {/* 🔥 TOP MINI FEATURE BAR (COMPACT) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-20 flex gap-3 text-xs md:text-sm 
                   bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      >
        <div className="flex items-center gap-1 text-white">
          <FaMotorcycle className="text-yellow-400 text-xs" />
         Home Delivery
        </div>

        <div className="w-[1px] bg-white/20"></div>

        <div className="flex items-center gap-1 text-white">
          <FaParking className="text-yellow-400 text-xs" />
          Free Parking  
        </div>
      </motion.div>

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-3xl">

      

        {/* 🔥 HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-bold leading-tight"
        >
          <span className="text-yellow-400">THE URBAN</span>
          <span className="text-white"> | </span>
          <span className="text-amber-300">खोप Cha!</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-200 text-sm md:text-lg tracking-wide"
        >
          • FAST FOOD • DAILY NEEDS • HOME DELIVERY
        </motion.p>

        <p className="mt-2 text-yellow-300 italic text-xs md:text-sm">
          “ रोहड़ू की मिट्टी, शहरी टच ”
        </p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          View Menu ↓
        </motion.button>
      </div>

    </section>
  );
}