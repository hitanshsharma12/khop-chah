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
    location,
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

  // 🛒 ITEMS
  const itemsText = cart
    .map((item: any, i: number) => {
      const price = item.price.replace(/₹/g, ""); // remove extra ₹
      return `• ${item.name}  x${quantities?.[i] || 1}  - ₹${price}`;
    })
    .join("\n");

  // 📍 LOCATION
  const locationLink = location
    ? `https://www.google.com/maps?q=${location.lat},${location.lng}`
    : "Not Shared";

  const parkingText = parking ? "Yes" : "No";

  // 🧾 CLEAN MESSAGE
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

• Live Location:
${locationLink}

• Parking: ${parkingText}

● Total: ₹${total}
`;

  const whatsappNumber = "919805073874";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return Response.json({ url });
}