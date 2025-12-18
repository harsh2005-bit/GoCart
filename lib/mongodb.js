import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("❌ MONGODB_URI is missing in .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    client = new MongoClient(uri);
    global._mongoClient = client.connect();
  }
  clientPromise = global._mongoClient;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
