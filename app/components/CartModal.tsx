"use client";

import { useState } from "react";

export default function CartModal({ cart, setCart, setOpen }: any) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [selectedSize, setSelectedSize] = useState(cart.map(() => 0)); // index of price

  // 🔥 convert price string → array
  const getPrices = (price: string) => {
    return price.match(/\d+/g)?.map(Number) || [0];
  };

  const updateQty = (i: number, val: number) => {
    const newQty = [...quantities];
    newQty[i] = Math.max(1, newQty[i] + val);
    setQuantities(newQty);
  };

  const handleRemove = (i: number) => {
    setCart((prev: any) => prev.filter((_: any, index: number) => index !== i));
    setQuantities((prev: any) => prev.filter((_: any, index: number) => index !== i));
    setSelectedSize((prev: any) => prev.filter((_: any, index: number) => index !== i));
  };

  // 🔥 TOTAL FIX
  const total = cart.reduce((acc: number, item: any, i: number) => {
    const prices = getPrices(item.price);
    const price = prices[selectedSize[i]] || prices[0];
    return acc + price * quantities[i];
  }, 0);

  const handleOrder = async () => {
    if (!name || !phone) {
      alert("Enter name & phone");
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
        selectedSize,
        total,
      }),
    });

    const data = await res.json();
    window.open(data.url, "_blank");

    setCart([]);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-3">

      <div className="bg-[#f8f5f2] w-full max-w-2xl rounded-xl p-4 md:p-6 overflow-y-auto max-h-[90vh] relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Order</h2>

        {/* ITEMS */}
        {cart.map((item: any, i: number) => {
          const prices = getPrices(item.price);
          const sizes = ["S", "M", "L"];

          return (
            <div key={i} className="border p-3 rounded-lg mb-3 bg-white">

              <h3 className="font-semibold">{item.name}</h3>

              {/* 🔥 SIZE SELECT */}
              {prices.length > 1 && (
                <div className="flex gap-2 my-2">
                  {prices.map((p: number, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const newSize = [...selectedSize];
                        newSize[i] = idx;
                        setSelectedSize(newSize);
                      }}
                      className={`px-3 py-1 rounded-full text-xs ${
                        selectedSize[i] === idx
                          ? "bg-[#8B5E3C] text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {sizes[idx]} ₹{p}
                    </button>
                  ))}
                </div>
              )}

              {/* PRICE */}
              <p className="text-red-500 font-semibold">
                ₹{prices[selectedSize[i]] || prices[0]}
              </p>

              {/* CONTROLS */}
              <div className="flex justify-between items-center mt-2">

                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(i, -1)} className="px-2 bg-gray-200 rounded">-</button>
                  <span>{quantities[i]}</span>
                  <button onClick={() => updateQty(i, 1)} className="px-2 bg-gray-200 rounded">+</button>
                </div>

                <button
                  onClick={() => handleRemove(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>

            </div>
          );
        })}

        {/* TOTAL */}
        <div className="text-right font-semibold text-lg mb-4">
          Total: ₹{total}
        </div>

        {/* FORM */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />

        <input
          type="text"
          placeholder="Pickup Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 rounded-lg w-full mb-3"
        />

        {/* BUTTONS */}
        <div className="flex gap-2">
          <button
            onClick={handleOrder}
            className="flex-1 bg-[#8B5E3C] text-white py-3 rounded-lg"
          >
            Order ₹{total}
          </button>

          <button
            onClick={() => setOpen(false)}
            className="flex-1 border py-3 rounded-lg"
          >
            Back
          </button>
        </div>

      </div>
    </div>
  );
}