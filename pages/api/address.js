import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    if (req.method === "POST") {
      const {
        name,
        email,
        street,
        city,
        state,
        zip,
        country,
        phone,
        userId,
      } = req.body;

      if (!name || !street || !city) {
        return res.status(400).json({ error: "Invalid address" });
      }

      const address = {
        name,
        email,
        street,
        city,
        state,
        zip,
        country,
        phone,
        userId,
        createdAt: new Date(),
      };

      const result = await db.collection("addresses").insertOne(address);

      return res.status(201).json({
        ...address,
        _id: result.insertedId.toString(),
      });
    }

    if (req.method === "GET") {
      const addresses = await db.collection("addresses").find().toArray();
      return res.status(200).json(
        addresses.map(a => ({
          ...a,
          _id: a._id.toString(),
        }))
      );
    }

    res.status(405).end();
  } catch (err) {
    console.error("Address API error:", err);
    res.status(500).json({ error: "Server error" });
  }
}
