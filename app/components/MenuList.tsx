"use client";

import { useMemo } from "react";
import { Flame } from "lucide-react";

type Item = {
  name: string;
  price: string;
  category: string;
  isHot?: boolean;
};

const data: Item[] = [
  // 🔥 SPECIAL COMBOS (TOP HIGHLIGHT)
  {
    name: "Best Seller Student Combo - Kurkure Momo (4 pcs) + BBQ Burger + Cold Drink",
    price: "₹150",
    category: "Combos",
    isHot: true,
  },
  {
    name: "Combo for 2 - Kurkure Momos (6 pcs) + Dip + Sandwich (4 pcs) + 2 Cold Drinks",
    price: "₹260",
    category: "Combos",
    isHot: true,
  },

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

  // 🔥 HOT ITEMS (TOP SECTION)
  const hotItems = data.filter((item) => item.isHot);

  return (
    <section className="py-10 px-4 md:px-6 relative z-10">

      {/* 🔥 TOP HOT SECTION */}
      {category === "All Items" || category === "Combos" ? (
        <div className="max-w-3xl mx-auto mb-8">
          <h3 className="text-xl text-amber-400 font-bold mb-4 flex items-center gap-2">
            <Flame size={20} /> Best Seller Combos
          </h3>

          <div className="space-y-4">
            {hotItems.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-300/10 border border-amber-400/30"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {item.name}
                  </h3>

                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Flame size={12} /> HOT
                  </span>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-yellow-400 font-bold">
                    {item.price}
                  </span>

                  <button
                    onClick={() => handleAdd(item)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-full text-xs hover:scale-110 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* NORMAL MENU */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition"
          >
            <h3 className="text-white font-semibold text-base md:text-lg">
              {item.name}
            </h3>

            <div className="flex justify-between items-center sm:gap-4">
              <span className="text-yellow-400 font-bold">
                {item.price}
              </span>

              <button
                onClick={() => handleAdd(item)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full text-xs md:text-sm hover:scale-110 transition"
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