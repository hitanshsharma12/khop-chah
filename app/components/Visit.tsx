"use client";

import { motion } from "framer-motion";

export default function Visit() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover blur-sm scale-100"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10"
        >
          <h2 className="text-3xl text-yellow-400 mb-4">Visit Us</h2>

          <p className="text-gray-300 mb-4">
            Come experience the warmth of Rohru Café in the heart of the city.
          </p>

          <p className="text-gray-400 mb-6">
            A place where coffee lovers and friends come together.
          </p>

          {/* 📍 LOCATION CARD */}
          <div className="bg-white/10 p-4 rounded-lg border border-white/10">
            <p className="text-sm text-gray-300">📍 Rohru, Himachal Pradesh</p>
            <p className="text-sm text-gray-300 mt-2">🕒 7 AM - 9 PM</p>
            <p className="text-sm text-gray-300 mt-2">📞 +91 9876543210</p>
          </div>

          {/* 🔥 GOOGLE MAP */}
          <div className="mt-6 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Rohru,Himachal%20Pradesh&output=embed"
              className="w-full h-52 border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* 🔗 BUTTON */}
          <a
            href="https://www.google.com/maps?q=Rohru,Himachal%20Pradesh"
            target="_blank"
            className="inline-block mt-4 text-yellow-400 underline"
          >
            Open in Google Maps →
          </a>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.img
          src="/cafe.jpg"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

      </div>

    </section>
  );
}