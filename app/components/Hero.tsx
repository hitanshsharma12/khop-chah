"use client";

import Image from "next/image";
import { useState } from "react";
import { FaMotorcycle, FaParking } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [people, setPeople] = useState(2);
  const [parking, setParking] = useState(false);
  const [arrivingIn, setArrivingIn] = useState("");
  const [vehicle, setVehicle] = useState("");

  const router = useRouter();

  const handleStart = () => {
    localStorage.setItem(
      "booking",
      JSON.stringify({ people, parking, arrivingIn, vehicle })
    );
    router.push("/menu");
  };

  // Smooth scroll to Visit Us section
  const scrollToVisit = () => {
    const visitSection = document.getElementById("visit");
    if (visitSection) {
      visitSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden px-3">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src="/bg.jpg" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* TOP BAR */}
      <div className="absolute top-20 flex gap-3 text-xs md:text-sm 
        bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">

        <div className="flex items-center gap-1 text-white">
          <FaMotorcycle className="text-yellow-400 text-xs" />
          Home Delivery
        </div>

        <div className="w-[1px] bg-white/20"></div>

        <div className="flex items-center gap-1 text-white">
          <FaParking className="text-yellow-400 text-xs" />
          Free Parking  
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-3xl z-10">

        <h1 className="text-4xl md:text-7xl font-bold">
          <span className="text-yellow-400">THE URBAN</span>
          <span className="text-white"> | </span>
          <span className="text-amber-300">खोप Cha!</span>
        </h1>

        <p className="mt-4 text-gray-200 text-sm md:text-lg">
          • FAST FOOD • DAILY NEEDS • HOME DELIVERY
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-8 mb-4">
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Book a Table
          </button>

          <button
            className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            View Menu ↓
          </button>
        </div>
      </div>

      {/* Location Icon - Bottom Left (Fixed Position) */}
      <button
        onClick={scrollToVisit}
        className="absolute bottom-10 right-6 md:left-10 z-20 
                   flex items-center justify-center w-14 h-14 
                   bg-white/10 hover:bg-white/20 backdrop-blur-md 
                   border border-white/30 rounded-full 
                   text-white hover:text-yellow-400 
                   transition-all duration-300 hover:scale-110"
        aria-label="Visit Us Location"
      >
        <MapPin size={28} strokeWidth={2.5} />
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

          <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm text-black relative">

            <button 
              onClick={() => setOpen(false)} 
              className="absolute top-3 right-4 text-gray-500 hover:text-black font-bold"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4 mt-2">
              Book Your Table
            </h2>

            <label className="text-sm">Number of People</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="w-full border p-2 rounded mb-3"
            />

            <label className="text-sm">Arriving in (minutes)</label>
            <input
              type="number"
              value={arrivingIn}
              placeholder="e.g 30 min"
              onChange={(e) => setArrivingIn(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <label className="text-sm">Vehicle Number</label>
            <input
              type="text"
              placeholder="HP 10 AB 1234"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <button
              onClick={() => setParking(!parking)}
              className={`w-full py-2 rounded mb-4 ${
                parking ? "bg-yellow-400" : "bg-gray-200"
              }`}
            >
              🚗 {parking ? "Parking Needed" : "Need Parking?"}
            </button>

            <p className="text-xs text-gray-600 mb-4">
              💡 Select menu items in advance & your food will be ready when you arrive 🚀
            </p>

            <button
              onClick={handleStart}
              className="w-full bg-black text-white py-2 rounded"
            >
              Book Now!
            </button>

          </div>
        </div>
      )}
    </section>
  );
}