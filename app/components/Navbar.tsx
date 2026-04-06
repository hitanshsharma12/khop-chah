"use client";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-8 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-yellow-400/20">

      {/* Logo */}
      <h1 className="text-2xl font-semibold text-yellow-400 tracking-wide">
        Rohru Café
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-white">
       
      </div>

      {/* Button */}
      <button className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
        Order Now
      </button>

    </nav>
  );
}