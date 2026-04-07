"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuTabs from "./components/MenuTabs";
import MenuList from "./components/MenuList";
import Visit from "./components/Visit";
import About from "./components/About";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";

export default function Home() {
  const [category, setCategory] = useState("All Items");
  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />

      {/* MENU */}
      <MenuTabs setCategory={setCategory} />
      <MenuList
        category={category}
        setCart={setCart}
        setOpen={setOpen}
      />

      <Visit />
      <About />
      <Footer />

      {/* 🔥 FIX IS HERE */}
      {open && (
        <CartModal
          cart={cart}
          setCart={setCart}   // ✅ MUST PASS
          setOpen={setOpen}
        />
      )}
    </>
  );
}