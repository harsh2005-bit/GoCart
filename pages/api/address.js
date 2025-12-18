import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "gocart");

    /* ---------- SAVE ADDRESS ---------- */
    if (req.method === "POST") {
      const {
        fullName,
        phone,
        addressLine,
        city,
        state,
        pincode,
        country,
      } = req.body;

      if (!fullName || !phone || !addressLine || !city) {
        return res.status(400).json({ error: "Invalid address data" });
      }

      const address = {
        fullName,
        phone,
        addressLine,
        city,
        state,
        pincode,
        country,
        createdAt: new Date(),
      };

      const result = await db.collection("addresses").insertOne(address);

      return res.status(201).json({
        message: "Address saved successfully",
        address: { ...address, _id: result.insertedId.toString() },
      });
    }

    /* ---------- GET ADDRESSES ---------- */
    if (req.method === "GET") {
      const addresses = await db
        .collection("addresses")
        .find()
        .sort({ createdAt: -1 })
        .toArray();

      return res.status(200).json(
        addresses.map((a) => ({
          ...a,
          _id: a._id.toString(),
        }))
      );
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end();
  } catch (err) {
    console.error("❌ Address API error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
