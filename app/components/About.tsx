"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 px-4 bg-[#0a0a0a] text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-yellow-400 text-2xl mb-2">Follow Us</h2>

          <h3 className="text-3xl font-bold mb-3">
            The Heart of Rohru
          </h3>

          <p className="text-gray-400 text-sm">
            Great coffee. Cozy vibes. Good people.
          </p>

          <div className="mt-4 text-sm">
           
            <p>📍 Rohru, Himachal Pradesh</p>
          </div>

          {/* SOCIAL */}
          <div className="mt-5 flex gap-4 text-xl">
            <a href="https://wa.me/917018796714" target="_blank">
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a href="#">
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/cafe-gate.jpg"
            alt="cafe"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}