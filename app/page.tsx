"use client";

import { useState } from "react";
import Image from "next/image";

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

      {/* 🔥 MENU SECTION (SAME BACKGROUND) */}
      <section className="relative">

        {/* ✅ Background Image */}
        <Image
          src="/bg.jpg"
          alt="menu background"
          fill
          className="object-cover -z-10"
        />

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 -z-10"></div>

        {/* ✅ Menu Content */}
        <MenuTabs setCategory={setCategory} />
        <MenuList
          category={category}
          setCart={setCart}
          setOpen={setOpen}
        />

      </section>

      <Visit />
      <About />
      <Footer />

      {/* 🔥 CART MODAL */}
      {open && (
        <CartModal
          cart={cart}
          setCart={setCart}
          setOpen={setOpen}
        />
      )}
    </>
  );
}