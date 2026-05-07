"use client";

import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

// ✅ Minimum order constant
const MIN_ORDER = 150;

// ✅ iOS detection
const isIOS = () =>
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

// ✅ WhatsApp opener
const openWhatsApp = async (getUrl: () => Promise<string>) => {
  if (isIOS()) {
    const waWindow = window.open("", "_blank");
    try {
      const url = await getUrl();
      if (waWindow && !waWindow.closed) {
        waWindow.location.href = url;
      } else {
        window.location.href = url;
      }
    } catch (err) {
      waWindow?.close();
      throw err;
    }
  } else {
    const url = await getUrl();
    window.open(url, "_blank");
  }
};

export default function CartModal({ cart, setCart, setOpen }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [parking, setParking] = useState(false);

  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [selectedSize, setSelectedSize] = useState(cart.map(() => 0));

  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // 📍 LOCATION
  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Location not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        alert("Permission denied ❌");
      }
    );
  };

  // 📞 PHONE VALIDATION
  const handlePhoneChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 10) setPhone(cleaned);
  };

  const isValidPhone = (num: string) => /^[0-9]{10}$/.test(num);

  // 💰 PRICE
  const getPrices = (price: string) => {
    return price.match(/\d+/g)?.map(Number) || [0];
  };

  const updateQty = (i: number, val: number) => {
    const newQty = [...quantities];
    newQty[i] = Math.max(1, newQty[i] + val);
    setQuantities(newQty);
  };

  const handleRemove = (i: number) => {
    setCart((prev: any) =>
      prev.filter((_: any, index: number) => index !== i)
    );
    setQuantities((prev: any) =>
      prev.filter((_: any, index: number) => index !== i)
    );
    setSelectedSize((prev: any) =>
      prev.filter((_: any, index: number) => index !== i)
    );
  };

  const total = cart.reduce((acc: number, item: any, i: number) => {
    const prices = getPrices(item.price);
    const price = prices[selectedSize[i]] || prices[0];
    return acc + price * quantities[i];
  }, 0);

  // 🧾 COD ORDER
  const handleOrder = async () => {
    if (!name || !phone || !time || !address) {
      alert("⚠️ Fill all details (Name, Phone, Time, Landmark)");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Enter valid 10 digit number ❌");
      return;
    }

    // ✅ Minimum order validation
    if (total < MIN_ORDER) {
      alert(`⚠️ Minimum order value is ₹${MIN_ORDER}`);
      return;
    }

    try {
      await openWhatsApp(async () => {
        const res = await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            time,
            cart,
            quantities,
            selectedSize,
            total,
            location,
            address,
            parking,
            payment: "COD",
          }),
        });
        const data = await res.json();
        return data.url;
      });

      setCart([]);
      setOpen(false);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  // 💳 ONLINE PAYMENT
  const handleOnlinePayment = async () => {
    if (!name || !phone || !time || !address) {
      alert("⚠️ Fill all details (Name, Phone, Time, Address)");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Enter valid phone number");
      return;
    }

    // ✅ Minimum order validation
    if (total < MIN_ORDER) {
      alert(`⚠️ Minimum order value is ₹${MIN_ORDER}`);
      return;
    }

    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total, name, phone, cart, address }),
    });

    const data = await res.json();

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: data.amount,
      currency: "INR",
      name: "Cafe Khopcha",
      description: "Order Payment",
      order_id: data.id,

      handler: async function () {
        alert("Payment Successful ✅");

        try {
          await openWhatsApp(async () => {
            const orderRes = await fetch("/api/order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                phone,
                time,
                cart,
                quantities,
                selectedSize,
                total,
                location,
                address,
                parking,
                payment: "Online",
              }),
            });
            const orderData = await orderRes.json();
            return orderData.url;
          });

          setCart([]);
          setOpen(false);
        } catch (err) {
          alert("Error sending order ❌");
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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

        {cart.map((item: any, i: number) => {
          const prices = getPrices(item.price);
          const sizes = ["S", "M", "L"];

          return (
            <div key={i} className="border p-3 rounded-lg mb-3 bg-white">
              <h3 className="font-semibold">{item.name}</h3>

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

              <p className="text-red-500 font-semibold">
                ₹{prices[selectedSize[i]] || prices[0]}
              </p>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(i, -1)} className="px-2 bg-gray-200 rounded">-</button>
                  <span>{quantities[i]}</span>
                  <button onClick={() => updateQty(i, 1)} className="px-2 bg-gray-200 rounded">+</button>
                </div>

                <button onClick={() => handleRemove(i)} className="text-red-500 text-sm">
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        <div className="text-right font-semibold text-lg mb-4">
          Total: ₹{total}
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />

        <input
          type="tel"
          inputMode="numeric"
          placeholder="Phone (10 digit)"
          value={phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />

        <input
          type="text"
          placeholder="Pickup Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 rounded-lg w-full mb-3"
        />

        <input
          type="text"
          placeholder="Location Description"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />

        <div className="flex gap-2">
          <button
            onClick={handleOrder}
            className="flex-1 bg-[#8B5E3C] text-white py-3 rounded-lg"
          >
            Order Now ₹{total}
          </button>

          <button
            onClick={() => setOpen(false)}
            className="flex-1 border py-3 rounded-lg"
          >
            Add More
          </button>
        </div>

        {/* 🚚 Delivery Notice */}
        <p className="text-center text-xs text-gray-500 mt-3">
          🚚 Delivery charges will be extra as per location
        </p>

        {/* ⚠️ Minimum Order */}
        <p className="text-center text-sm text-red-500 font-medium mt-2">
          ⚠️ Minimum order value is ₹{MIN_ORDER}
        </p>

      </div>
    </div>
  );
}