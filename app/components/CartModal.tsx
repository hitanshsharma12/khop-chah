"use client";

import { useState } from "react";

export default function CartModal({ cart, setOpen }: any) {
  const [qty, setQty] = useState(1);

  const total = cart.reduce(
    (acc: number, item: any) =>
      acc + parseFloat(item.price.replace("$", "")) * qty,
    0
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

      {/* Modal Box */}
      <div className="bg-[#f8f5f2] w-full max-w-2xl rounded-xl p-6 relative overflow-y-auto max-h-[90vh]">

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6">Your Order</h2>

        {/* Items */}
        {cart.map((item: any, i: number) => (
          <div
            key={i}
            className="flex justify-between items-center border p-4 rounded-lg mb-4 bg-white"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
              <p className="text-red-500 font-semibold">{item.price}</p>
            </div>

            {/* Qty Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full bg-gray-200"
              >
                -
              </button>

              <span>{qty}</span>

              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded-full bg-gray-200"
              >
                +
              </button>
            </div>

            <button className="text-red-500 text-sm" >Remove</button>
          </div>
        ))}

        {/* Total */}
        <div className="text-right font-semibold text-lg mb-6">
          Total: ${total.toFixed(2)}
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-4 mb-4">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
          />
        </div>

        <input
          type="text"
          placeholder="Pickup Location"
          className="border p-3 rounded-lg w-full mb-4"
        />

        {/* Payment Info */}
        <div className="bg-[#f1e7dd] p-4 rounded-lg mb-4 text-sm">
          Payment will be collected at pickup.
        </div>

        <input
          type="text"
          placeholder="Preferred Pickup Time"
          className="border p-3 rounded-lg w-full mb-4"
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#8B5E3C] text-white py-3 rounded-lg">
            Place Order - ${total.toFixed(2)}
          </button>

          <button
            onClick={() => setOpen(false)}
            className="flex-1 border py-3 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
}