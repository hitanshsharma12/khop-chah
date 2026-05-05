"use client";

import { useMemo } from "react";

type Item = {
  name: string;
  price: string;
  category: string;
};

const data: Item[] = [

  // 🥟 MOMOS
  { name: "Special Kurkure Momo (8 pcs)", price: "₹140", category: "Momos" },
  { name: "Special Kurkure Momo (5 pcs)", price: "₹80", category: "Momos" },
  { name: "Kurkure Momo with Dip (8 pcs)", price: "₹150", category: "Momos" },
  { name: "Kurkure Momo with Dip (5 pcs)", price: "₹90", category: "Momos" },
  { name: "Extra Dip", price: "₹20", category: "Momos" },
  { name: "Fried Momo (10 pcs / 6 pcs)", price: "₹110 / 60", category: "Momos" },
  { name: "Steam Momo (10 pcs / 6 pcs)", price: "₹100 / 50", category: "Momos" },

  // 🍟 FRIES
  { name: "Plain Fries", price: "₹80 / 140", category: "Fries" },
  { name: "Peri Peri Fries with Cheese Dip", price: "₹100 / 150", category: "Fries" },
  { name: "Masala Fries", price: "₹100 / 150", category: "Fries" },

  // 🍔 BURGERS
  { name: "Classic Burger", price: "₹45", category: "Burgers" },
  { name: "BBQ Burger", price: "₹50", category: "Burgers" },
  { name: "Chilli Lava Burger", price: "₹50", category: "Burgers" },
  { name: "Paneer Ginger Burger", price: "₹65", category: "Burgers" },

  // 🍕 PIZZA
  { name: "Margherita Pizza (S/M/L)", price: "₹110 / 190 / 230", category: "Pizza" },
  { name: "Paneer Corn Pizza (S/M/L)", price: "₹140 / 220 / 300", category: "Pizza" },
  { name: "Farmhouse Special (S/M/L)", price: "₹180 / 260 / 300", category: "Pizza" },
  { name: "Veg Supreme (S/M/L)", price: "₹200 / 340 / 500", category: "Pizza" },
  { name: "Full Loaded Pizza (S/M/L)", price: "₹250 / 380 / 470", category: "Pizza" },

  // 🥤 DRINKS
  { name: "Mint Mojito", price: "₹80", category: "Drinks" },
  { name: "Black Current Mojito", price: "₹80", category: "Drinks" },
  { name: "Watermelon Mojito", price: "₹80", category: "Drinks" },
  { name: "Lemon Iced Tea", price: "₹80", category: "Drinks" },
  { name: "Fresh Lime Soda", price: "₹70", category: "Drinks" },
  { name: "Cold Coffee", price: "₹80", category: "Drinks" },
  { name: "Strawberry Shake", price: "₹80", category: "Drinks" },
  { name: "Banana Shake", price: "₹90", category: "Drinks" },
  { name: "Oreo Shake", price: "₹90", category: "Drinks" },
  { name: "Pineapple Shake", price: "₹80", category: "Drinks" },
  { name: "Black Current Shake", price: "₹80", category: "Drinks" },
  { name: "Orange Shake", price: "₹80", category: "Drinks" },
  { name: "Cold Drink (Coke/Sprite/Dew)", price: "₹30", category: "Drinks" },

  // ☕ HOT BEVERAGES
  { name: "Hot Coffee", price: "₹40", category: "Hot Beverages" },
  { name: "Tea", price: "₹25", category: "Hot Beverages" },
  { name: "Kulhad Tea", price: "₹30", category: "Hot Beverages" },

  // 🎯 COMBOS
  {
    name: "Kurkure Momo + Fries + Sandwich + 2 Drinks",
    price: "₹450",
    category: "Combos",
  },
  {
    name: "Kurkure Momo + Dip + 2 Drinks + Sandwich",
    price: "₹280",
    category: "Combos",
  },
  {
    name: "Sandwich + Fries + 2 Drinks",
    price: "₹200",
    category: "Combos",
  },
  {
    name: "Paneer Corn Pizza + Kurkure Momos + 2 Drinks",
    price: "₹380",
    category: "Combos",
  },
  {
    name: "Corn Pizza + Fries + 2 Drinks",
    price: "₹220",
    category: "Combos",
  },
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

            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">
                {item.name}
              </h3>
            </div>

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