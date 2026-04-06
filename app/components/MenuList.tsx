"use client";

import { useState } from "react";

const data = [
  {
    name: "Espresso",
    desc: "Single shot of premium espresso",
    price: "$3.50",
    category: "Coffee & Drinks",
  },
  {
    name: "Cappuccino",
    desc: "Espresso with steamed milk & foam",
    price: "$4.50",
    category: "Coffee & Drinks",
  },
  {
    name: "Veg Sandwich",
    desc: "Fresh & tasty sandwich",
    price: "$5.00",
    category: "Food & Sandwiches",
  },
];

export default function MenuList({ category }: any) {
  const filtered =
    category === "All Items"
      ? data
      : data.filter((item) => item.category === category);

  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* 🔥 Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover blur-sm scale-100"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">

        {filtered.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 rounded-xl 
                       bg-white/10 backdrop-blur-md border border-white/10"
          >
            {/* Left */}
            <div>
              <h3 className="font-semibold text-lg text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-300">
                {item.desc}
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <span className="font-bold text-yellow-400">
                {item.price}
              </span>

              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm hover:scale-105 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}