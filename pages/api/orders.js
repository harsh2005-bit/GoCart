import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "gocart");

    /* ================= CREATE ORDER ================= */
    if (req.method === "POST") {
      const { items, total, address, paymentMethod } = req.body;

      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "Items are required" });
      }

      if (!address) {
        return res.status(400).json({ error: "Address is required" });
      }

      const order = {
        items,
        total,
        address,
        paymentMethod: paymentMethod || "COD",
        status: "PLACED",
        createdAt: new Date(),
      };

      const result = await db.collection("orders").insertOne(order);

      return res.status(201).json({
        message: "Order placed successfully",
        orderId: result.insertedId.toString(),
      });
    }

    /* ================= FETCH ORDERS ================= */
    if (req.method === "GET") {
      const orders = await db
        .collection("orders")
        .find()
        .sort({ createdAt: -1 })
        .toArray();

      return res.status(200).json(
        orders.map((order) => ({
          ...order,
          _id: order._id.toString(),
        }))
      );
    }

    /* ================= METHOD NOT ALLOWED ================= */
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({
      error: `Method ${req.method} Not Allowed`,
    });
  } catch (error) {
    console.error("❌ Orders API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
