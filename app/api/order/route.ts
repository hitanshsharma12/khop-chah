export async function POST(req: Request) {
  const body = await req.json();

  const { name, phone, cart, total, time, quantities } = body;

  //  items with quantity
  const itemsText = cart
    .map(
      (item: any, i: number) =>
        `• ${item.name} x${quantities?.[i] || 1} - ₹${item.price}`
    )
    .join("\n");

  const message = `
 *New Order - Rohru Café*

 Name: ${name}
 Phone: ${phone}

 Items:
${itemsText}

 Time: ${time}

 Total: ₹${total}
`;

  const whatsappNumber = "917018796714"; 

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return Response.json({ url });
}