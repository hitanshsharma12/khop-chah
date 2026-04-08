

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"  // apni image ka path daal dena
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Animated Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top line: THE URBAN / જોગુ Cha (exactly as image) */}
          <h1 className="text-4xl md:text-7xl font-bold">
            <span className="text-yellow-400">THE URBAN</span>
            <span className="text-white"> | </span>
            <span className="text-amber-300">खोप Cha</span>
          </h1>

          {/* Subtitle: Breakfast, Lunch, Dinner, Fast Food */}
          <p className="mt-4 text-gray-200 text-lg md:text-xl tracking-wide">
            BREAKFAST, LUNCH, DINNER, FAST FOOD
          </p>

          {/* The plastic line exactly as in image */}
          <p className="mt-4 text-yellow-300/90 italic text-sm md:text-base">
            “ रोहड़ू की मिट्टी, शहरी टच ”
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            View Menu ↓
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}