"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white overflow-hidden">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-yellow-400 text-3xl mb-4">Contact Us</h2>

          <h3 className="text-4xl font-bold mb-4">
            The Heart of Rohru
          </h3>

          <p className="text-gray-400">
            Bringing people together with great coffee and cozy vibes.
          </p>

          <p className="mt-4">📞 +91 7018796714</p>
          <p>📍 Rohru, Himachal Pradesh</p>

          <button className="mt-6 bg-green-500 px-6 py-3 rounded-lg">
            Chat on WhatsApp
          </button>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/owner.jpg"
          className="rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

      </div>

    </section>
  );
}