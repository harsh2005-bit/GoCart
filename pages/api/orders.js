import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const order = {
      ...req.body,
      status: "PLACED",
      createdAt: new Date(),
    };

    await db.collection("orders").insertOne(order);
    return res.status(201).json({ success: true });
  }

  if (req.method === "GET") {
    const orders = await db.collection("orders").find().toArray();
    return res.json(orders.map(o => ({ ...o, _id: o._id.toString() })));
  }
}
