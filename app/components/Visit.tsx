"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Visit() {
  return (
    <section id="visit" className="relative py-16 px-4 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Visit Us
          </h2>
          <p className="text-gray-300 mt-3 text-lg">
            Experience the vibrant vibe of The Urban Khopcha
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT - Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 space-y-6"
          >
            <div>
              <h3 className="text-yellow-400 text-xl font-semibold mb-2">
                The Urban Khopcha HP 10
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Next to Amartex, JD Mall<br />
                Rohru, Himachal Pradesh 171207
              </p>
            </div>

            {/* Info Details */}
            <div className="bg-white/10 p-5 rounded-xl text-sm space-y-3 text-white">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📍</span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Next to Amartex, JD Mall, Rohru</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">🕒</span>
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-gray-300">7:00 AM - 9:00 PM (Daily)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📞</span>
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-gray-300">+91 79863 83165</p>
                </div>
              </div>
            </div>

            {/* Exact Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5!2d77.7528!3d31.2045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1740000000000"
                width="100%"
                height="320"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Urban Khopcha Rohru - Exact Location"
              />
            </div>

            {/* Get Directions Button */}
            <a
              href="https://maps.app.goo.gl/An6y2KajjbKbP2rY9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition-all text-black font-semibold py-3.5 rounded-full text-base shadow-lg"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* RIGHT - Cafe Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/cafe.jpg"
                alt="The Urban Khopcha Cafe Interior"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-black/80 text-yellow-400 text-xs px-5 py-2 rounded-2xl border border-white/20 backdrop-blur-md">
              Khopcha Cafe
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}