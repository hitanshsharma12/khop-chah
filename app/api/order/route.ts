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

    // ✅ Reset daily order count
    const today = new Date().toDateString();

    if (today !== lastDate) {
      orderCount = 0;
      lastDate = today;
    }

    orderCount++;
    const orderNumber = orderCount;

    // ✅ Indian date/time
    const orderTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // ✅ Correct item formatting
    const itemsText = cart
      .map((item: any, i: number) => {
        const price = item.finalPrice || item.price;

        const sizeText = item.selectedSize
          ? ` (${item.selectedSize})`
          : "";

        return `• ${item.name}${sizeText} ×${
          quantities[i] ?? 1
        } - ${price}`;
      })
      .join("\n");

    const parkingText = parking ? "Yes" : "No";

    // ✅ Final WhatsApp message
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

    // ✅ Your WhatsApp number
    const whatsappNumber = "917986383165";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    return Response.json({
      success: true,
      url,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
    });
  }
}