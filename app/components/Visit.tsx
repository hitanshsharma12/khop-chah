"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Visit() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="bg"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10"
        >
          <h2 className="text-2xl text-yellow-400 mb-3">Visit Us</h2>

          <p className="text-gray-300 text-sm">
            Come experience the vibe of Khopcha!
          </p>

          <div className="mt-4 bg-white/10 p-3 rounded-lg text-sm text-white">
            <p>📍 The Urban Khopcha HP 10</p>
            <p className="mt-1">5PXX+M74, Rohru, Himachal Pradesh 171207</p>
            <p className="mt-1">🕒 7 AM - 9 PM</p>
            <p className="mt-1">📞 +91 7986383165</p>
          </div>

          {/* 🔥 EXACT MAP EMBED */}
          <div className="mt-4 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=5PXX+M74,Rohru,Himachal%20Pradesh&output=embed"
              className="w-full h-44 border-0"
              loading="lazy"
            />
          </div>

          {/* 🔥 DIRECT NAVIGATION BUTTON */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=5PXX+M74,Rohru,Himachal%20Pradesh"
            target="_blank"
            className="inline-block mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Get Directions →
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/cafe.jpg"
            alt="cafe"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}