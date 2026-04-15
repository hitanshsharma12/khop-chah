"use client";

import { useState, useEffect } from "react";

export default function MenuPage() {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("booking");
    if (data) setBooking(JSON.parse(data));
  }, []);

  const sendToWhatsApp = () => {
    if (!booking) return;

    const message = `
📍 *Table Booking Request*

👥 People: ${booking.people}
🚗 Parking: ${booking.parking ? "Yes" : "No"}
🚘 Vehicle: ${booking.vehicle || "Not Provided"}
⏱ Arriving in: ${booking.arrivingIn} mins

📌 Please confirm my table.
    `;

    const phone = "919805073874";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-center p-6 text-center">

      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Book Your Table 🍽
      </h1>

      {booking && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 w-full max-w-md">

          <p>👥 {booking.people}</p>
          <p>🚗 {booking.parking ? "Yes" : "No"}</p>
          <p>🚘 {booking.vehicle || "Not Provided"}</p>
          <p>⏱ {booking.arrivingIn} mins</p>

        </div>
      )}

      <button
        onClick={sendToWhatsApp}
        className="w-full max-w-md bg-green-500 py-3 rounded-full font-semibold"
      >
        Send Booking on WhatsApp 📲
      </button>

    </div>
  );
}