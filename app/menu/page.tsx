"use client";

import { useState, useEffect } from "react";

export default function MenuPage() {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("booking");
    if (data) {
      setBooking(JSON.parse(data));
    }
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
    `.trim();

    const phone = "919805073874";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Improved WhatsApp opening (better iOS support)
    const newWindow = window.open(url, "_blank");
    
    // Fallback for iOS/Safari issues
    setTimeout(() => {
      if (!newWindow || newWindow.closed) {
        window.location.href = url;
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-center p-6">

      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Book Your Table 🍽
        </h1>

        {booking && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-yellow-400 font-semibold mb-4 text-lg">Your Details</h2>
            <div className="space-y-3 text-gray-200">
              <p><span className="text-white">👥 People:</span> {booking.people}</p>
              <p><span className="text-white">🚗 Parking:</span> {booking.parking ? "Yes" : "No"}</p>
              <p><span className="text-white">🚘 Vehicle:</span> {booking.vehicle || "Not Provided"}</p>
              <p><span className="text-white">⏱ Arriving in:</span> {booking.arrivingIn} minutes</p>
            </div>
          </div>
        )}

        <button
          onClick={sendToWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-full font-semibold text-lg transition-all active:scale-95"
        >
          Send Booking on WhatsApp 📲
        </button>

        <p className="text-xs text-gray-500 mt-6">
          You will be redirected to WhatsApp
        </p>
      </div>
    </div>
  );
}