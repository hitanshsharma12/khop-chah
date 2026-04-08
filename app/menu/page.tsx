"use client";

import { useState } from "react";
import MenuTabs from "../components/MenuTabs";
import MenuList from "../components/MenuList";

export default function MenuPage() {
  const [category, setCategory] = useState("All Items");
  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#c06600] p-6">

      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Our Menu
      </h1>

      <MenuTabs setCategory={setCategory} />

      <MenuList
        category={category}
        setCart={setCart}
        setOpen={setOpen}
      />

    </div>
  );
}