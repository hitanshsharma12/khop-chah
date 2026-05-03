"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-14 md:py-20 px-4 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-yellow-400 text-xl md:text-2xl mb-2 tracking-wide">
            Follow Us
          </h2>

          <h3 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
            The Heart of Rohru
          </h3>

          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Great momos. Cozy vibes. Good people.  
            A place where every bite feels like home.
          </p>

          <div className="mt-4 text-sm text-gray-300">
            <p>📍 Rohru, Himachal Pradesh</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">

            {/* WhatsApp */}
            <a href="https://wa.me/917986383165" target="_blank">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                              hover:bg-green-500 hover:scale-110 transition duration-300 shadow-lg">
                <FaWhatsapp className="text-lg" />
              </div>
            </a>

            {/* Instagram */}
           <a href="https://www.instagram.com/dhindwan/" target="_blank">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                              hover:bg-pink-500 hover:scale-110 transition duration-300 shadow-lg">
                <FaInstagram className="text-lg" />
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/anand.dhindwan.3">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                              hover:bg-blue-500 hover:scale-110 transition duration-300 shadow-lg">
                <FaFacebook className="text-lg" />
              </div>
            </a>

          </div>

          {/* BRANDING */}
          <p className="mt-6 text-xs text-gray-500">
            Crafted with ❤️ by{" "}
            <span className="text-yellow-400 font-medium">
              Hitansh Sharma
            </span>
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/cafe-gate.jpg"
            alt="cafe"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-cover w-full max-w-md md:max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}