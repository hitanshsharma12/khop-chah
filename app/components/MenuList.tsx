"use client";

import { useMemo } from "react";

type Item = {
  name: string;
  price: string;
  category: string;
};

const data: Item[] = [
  // 🔥 New Arrival
  { name: "Tornado Potato Spiral (Plain)", price: "₹40", category: "New Arrival" },
  { name: "Tornado Potato (Tangy)", price: "₹60", category: "New Arrival" },
  { name: "Crispy Ginger Chicken (1 leg)", price: "₹150", category: "New Arrival" },
  { name: "Crispy Ginger Chicken (2 leg)", price: "₹220", category: "New Arrival" },

  // 🍕 Pizza
  { name: "Margarita Pizza (S/M/L)", price: "₹110 / 180 / 280", category: "Pizza & Fries" },
  { name: "Paneer Corn Pizza", price: "₹130 / 190 / 280", category: "Pizza & Fries" },
  { name: "Veg Supreme Pizza", price: "₹150 / 200 / 280", category: "Pizza & Fries" },
  { name: "Fully Loaded Pizza", price: "₹160 / 230 / 300", category: "Pizza & Fries" },

  // 🍟 Fries
  { name: "Plain Fries", price: "₹80 / 120", category: "Pizza & Fries" },
  { name: "Masala Fries", price: "₹90 / 130", category: "Pizza & Fries" },
  { name: "Peri Peri Fries + Dip", price: "₹100 / 150", category: "Pizza & Fries" },

  // 🥪 Sandwich
  { name: "Cold Sandwich (4 pcs)", price: "₹80", category: "Sandwich" },
  { name: "Veg Grilled Sandwich", price: "₹90", category: "Sandwich" },
  { name: "Grilled Paneer Sandwich", price: "₹150", category: "Sandwich" },
  { name: "Khopcha Special Sandwich + Fries", price: "₹150", category: "Sandwich" },
  { name: "Shredded Chicken Sandwich", price: "₹150", category: "Sandwich" },

  // 🥟 Momos
  { name: "Steam Momo (6/10 pcs)", price: "₹50 / 90", category: "Momos" },
  { name: "Fried Momo (6/10 pcs)", price: "₹60 / 110", category: "Momos" },
  { name: "Special Kurkure Momo", price: "₹80 / 140", category: "Momos" },
];

type Props = {
  category: string;
  setCart: any;
  setOpen: any;
};

export default function MenuList({ category, setCart, setOpen }: Props) {

  const filtered = useMemo(() => {
    return category === "All Items"
      ? data
      : data.filter((item) => item.category === category);
  }, [category]);

  const handleAdd = (item: Item) => {
    setCart((prev: any) => [...prev, item]);
    setTimeout(() => setOpen(true), 100);
  };

  return (
    <section className="py-10 px-4 md:px-6 relative z-10">

      <div className="max-w-3xl mx-auto space-y-4">

        {filtered.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center 
                       gap-3 p-4 rounded-xl 
                       bg-white/10 border border-white/10 backdrop-blur-md
                       hover:scale-[1.02] transition"
          >
            {/* Left */}
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">
                {item.name}
              </h3>
            </div>

            {/* Right */}
            <div className="flex justify-between items-center sm:gap-4">

              <span className="text-yellow-400 font-bold text-sm md:text-base">
                {item.price}
              </span>

              <button
                onClick={() => handleAdd(item)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full text-xs md:text-sm 
                           hover:scale-110 active:scale-95 transition"
              >
                Add
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}