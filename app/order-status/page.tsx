"use client";

import { useEffect, useState } from "react";

export default function OrderStatus() {
  const [stage, setStage] = useState(0);

  const steps = [
    "🔥 Order Received",
    "👨‍🍳 Cooking Started",
    "📦 Packing",
    "🚴 Out for Delivery",
    "✅ Delivered",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">

      <h1 className="text-2xl mb-6">Your Order Status</h1>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`p-3 rounded ${
              i <= stage ? "bg-green-500" : "bg-gray-700"
            }`}
          >
            {step}
          </div>
        ))}
      </div>

    </div>
  );
}