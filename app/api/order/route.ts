// app/api/order/route.ts

let orderCount = 0;
let lastDate = "";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      cart = [],
      total,
      time,
      quantities = [],
      address,
      parking,
    } = body;

    const today = new Date().toDateString();
    if (today !== lastDate) {
      orderCount = 0;
      lastDate = today;
    }

    orderCount++;
    const orderNumber = orderCount;

    const orderTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const itemsText = cart
      .map((item: any, i: number) => {
        let price = item.price;
        let sizeText = "";

        if (typeof price === "string" && price.includes("/")) {
          const options = price.split("/").map((p: string) => p.trim());

          if (options.length === 3) {
            price = options[0];
            sizeText = " (S)";
          } else if (options.length === 2) {
            price = options[0];
            sizeText = " (Small)";
          }
        }

        return `• ${item.name}${sizeText} ×${quantities[i] ?? 1} - ${price}`;
      })
      .join("\n");

    const parkingText = parking ? "Yes" : "No";

    const message = `
● Order #${orderNumber}

● Café Khopcha Order

• Date & Time: ${orderTime}

• Name: ${name}
• Phone: ${phone}

● Items:
${itemsText}

• Pickup Time: ${time}

● Address:
${address}

• Parking: ${parkingText}

● Total: ₹${total}

⚠️ Delivery charges extra
`.trim();

    const whatsappNumber = "917986383165";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return Response.json({ success: true, url });
  } catch {
    return Response.json({ success: false });
  }
}