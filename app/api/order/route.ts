export async function POST(req: Request) {
  const body = await req.json();

  const { name, phone, cart, total, time, quantities, location, address } = body;

  const itemsText = cart
    .map(
      (item: any, i: number) =>
        `• ${item.name} x${quantities?.[i] || 1} - ₹${item.price}`
    )
    .join("\n");

  const locationLink = location
    ? `https://www.google.com/maps?q=${location.lat},${location.lng}`
    : "Not Shared";

  const message = `
*New Order - Café Khopcha!*

Name: ${name}
Phone: ${phone}

Items:
${itemsText}

Time: ${time || "Not given"}

📍 Address:
${address || "Not provided"}

📍 Live Location:
${locationLink}

Total: ₹${total}
`;

  const whatsappNumber = "919805073874";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return Response.json({ url });
}