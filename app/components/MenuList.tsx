"use client";

type Item = {
  name: string;
  desc: string;
  price: number;
  category: string;
};

const data: Item[] = [
  // ☕ Coffee & Drinks
  {
    name: "Espresso",
    desc: "Strong single shot coffee",
    price: 120,
    category: "Coffee & Drinks",
  },
  {
    name: "Cappuccino",
    desc: "Coffee with steamed milk foam",
    price: 180,
    category: "Coffee & Drinks",
  },
  {
    name: "Cold Coffee",
    desc: "Chilled creamy coffee",
    price: 150,
    category: "Coffee & Drinks",
  },

  // 🍔 Food & Sandwiches
  {
    name: "Veg Sandwich",
    desc: "Grilled sandwich with veggies",
    price: 100,
    category: "Food & Sandwiches",
  },
  {
    name: "Paneer Burger",
    desc: "Spicy paneer patty burger",
    price: 140,
    category: "Food & Sandwiches",
  },
  {
    name: "French Fries",
    desc: "Crispy salted fries",
    price: 90,
    category: "Food & Sandwiches",
  },

  // 🍜 Chinese
  {
    name: "Veg Chowmein",
    desc: "Stir fried noodles with veggies",
    price: 130,
    category: "Chinese",
  },
  {
    name: "Fried Rice",
    desc: "Chinese style rice with sauces",
    price: 140,
    category: "Chinese",
  },
  {
    name: "Chilli Paneer",
    desc: "Spicy paneer in Chinese sauce",
    price: 180,
    category: "Chinese",
  },

  // 🍰 Desserts
  {
    name: "Chocolate Cake",
    desc: "Rich chocolate layered cake",
    price: 120,
    category: "Desserts",
  },
  {
    name: "Brownie",
    desc: "Hot chocolate brownie",
    price: 90,
    category: "Desserts",
  },
];

type Props = {
  category: string;
  setCart: React.Dispatch<React.SetStateAction<Item[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MenuList({ category, setCart, setOpen }: Props) {
  
  const filtered =
    category === "All Items"
      ? data
      : data.filter((item) => item.category === category);

  const handleAdd = (item: Item) => {
    setCart((prev) => [...prev, item]);
    setOpen(true);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">

        {filtered.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 rounded-xl 
                       bg-white/10 backdrop-blur-md border border-white/10
                       hover:scale-[1.02] transition"
          >
            {/* Left */}
            <div>
              <h3 className="font-semibold text-lg text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-300">
                {item.desc}
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <span className="font-bold text-yellow-400">
                ₹{item.price}
              </span>

              <button
                onClick={() => handleAdd(item)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm hover:scale-105 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}