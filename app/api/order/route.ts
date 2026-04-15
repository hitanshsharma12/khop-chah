let orderCount = 0;
let lastDate = "";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    name,
    phone,
    cart,
    total,
    time,
    quantities,
    address,
    parking,
  } = body;

  // 📅 DAILY RESET
  const today = new Date().toDateString();

  if (today !== lastDate) {
    orderCount = 0;
    lastDate = today;
  }

  orderCount++;
  const orderNumber = orderCount;

  // ⏰ DATE TIME
  const orderTime = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  // 🛒 ITEMS (SAFE VERSION)
  const itemsText = cart
    .map((item: any, i: number) => {
      const price =
        typeof item.price === "string"
          ? item.price.replace(/₹/g, "")
          : item.price;

      return `• ${item.name}  x${quantities?.[i] || 1}  - ₹${price}`;
    })
    .join("\n");

  // 🚗 PARKING
  const parkingText = parking ? "Yes" : "No";

  // 🧾 FINAL MESSAGE
  const message = `
● Order #${orderNumber}

● Café Khopcha Order

• Date & Time: ${orderTime}

• Name: ${name}
• Phone: ${phone}

● Items:
${itemsText}

• Pickup Time: ${time} min

● Address:
${address}

• Parking: ${parkingText}

● Total: ₹${total}
`;

  const whatsappNumber = "919805073874";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return Response.json({ url });
}