"use client";

import { useState } from "react";

export default function CartModal({ cart, setCart, setOpen }: any) {

  // 🔥 form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  // 🔥 quantity per item
  const [quantities, setQuantities] = useState(
    cart.map(() => 1)
  );

  // 🔥 update quantity
  const updateQty = (index: number, value: number) => {
    const newQty = [...quantities];
    newQty[index] = Math.max(1, newQty[index] + value);
    setQuantities(newQty);
  };

  // 🔥 remove item
  const handleRemove = (index: number) => {
    const newCart = cart.filter((_: any, i: number) => i !== index);
    const newQty = quantities.filter((_: any, i: number) => i !== index);

    setCart(newCart);
    setQuantities(newQty);
  };

  // 🔥 total calculate
const total = cart.reduce((acc: number, item: any, i: number) => {
  return acc + item.price * (quantities[i] || 1);
}, 0);

  // 🔥 handle order (Next.js API)
  const handleOrder = async () => {
    if (!name || !phone) {
      alert("Please fill name & phone");
      return;
    }

    const res = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
        time,
        cart,
        quantities,
        total,
      }),
    });

    const data = await res.json();

    // open WhatsApp
    window.open(data.url, "_blank");

    // reset
    setCart([]);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

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
            {/* Left */}
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
              <p className="text-red-500 font-semibold">₹{item.price}</p>
            </div>

            {/* Qty */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQty(i, -1)}
                className="w-8 h-8 rounded-full bg-gray-200"
              >
                -
              </button>

              <span>{quantities[i]}</span>

              <button
                onClick={() => updateQty(i, 1)}
                className="w-8 h-8 rounded-full bg-gray-200"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => handleRemove(i)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Total */}
        <div className="text-right font-semibold text-lg mb-6">
          Total: ₹{total.toFixed(2)}
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded-lg"
          />
        </div>

        <input
          type="text"
          placeholder="Preferred Pickup Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />

        {/* Info */}
        <div className="bg-[#f1e7dd] p-4 rounded-lg mb-4 text-sm">
          Payment will be collected at pickup.
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleOrder}
            className="flex-1 bg-[#8B5E3C] text-white py-3 rounded-lg"
          >
            Place Order - ₹{total.toFixed(2)}
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