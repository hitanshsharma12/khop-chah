"use client";

import { div } from "framer-motion/client";
import { useState } from "react";

const categories = [
  "All Items",
  "Coffee & Drinks",
  "Food & Sandwiches",
  "Desserts",
];

export default function MenuTabs({ setCategory }: any) {
  const [active, setActive] = useState("All Items");

  return (
    
    <section className="relative py-2 overflow-hidden ">
<h4 className="text-amber-200">menu</h4>
      {/* 🔥 Background Image */}
      <div className="absolute inset-0 bg-black">
       
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 flex gap-3 flex-wrap justify-center mb-8">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setCategory(cat);
            }}
            className={`px-5 py-2 rounded-full text-sm transition ${
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