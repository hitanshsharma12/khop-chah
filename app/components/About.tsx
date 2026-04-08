"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

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

          {/* 🔥 Social Icons */}
          <div className="mt-6 flex gap-5 text-2xl">

            <a
              href="https://wa.me/917018796714"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/cafe-gate.jpg"
          className="rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

      </div>

    </section>
  );
}