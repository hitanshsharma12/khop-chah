"use client";

import { useState } from "react";

const categories = [
  "All Items",
  "New Arrival",
  "Pizza & Fries",
  "Sandwich",
  "Momos",
];

export default function MenuTabs({ setCategory }: any) {
  const [active, setActive] = useState("All Items");

  return (
    <section className="py-10 text-center relative z-10">

      <h2 className="text-4xl font-bold text-white">
        Our <span className="text-amber-400">Specialties</span>
      </h2>

      <p className="text-gray-300 mb-6 text-sm uppercase tracking-widest">
        Menu
      </p>

      <div className="flex gap-2 flex-wrap justify-center px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setCategory(cat);
            }}
            className={`px-4 py-2 rounded-full text-xs md:text-sm ${
              active === cat
                ? "bg-[#8B5E3C] text-white"
                : "bg-white/20 text-white backdrop-blur-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

    </section>
  );
}