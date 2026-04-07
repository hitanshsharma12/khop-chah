"use client";

import { useState } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Visit from "./components/Visit";
import About from "./components/About";
import CartModal from "./components/CartModal";
import MenuTabs from "./components/MenuTabs";
import MenuList from "./components/MenuList";

export default function Home() {
  const [category, setCategory] = useState("All Items");
  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />

      {/* 🔥 MENU SECTION */}
      <MenuTabs setCategory={setCategory} />
      <MenuList
        category={category}
        setCart={setCart}
        setOpen={setOpen}
      />

      <Visit />
      <About />
      <Footer />

      {/* 🔥 CART MODAL */}
      {open && (
        <CartModal cart={cart} setOpen={setOpen} />
      )}
    </>
  );
}