import mongoose, { Connection } from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongoose: { conn: Connection | null; promise: Promise<Connection> | null };
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo(): Promise<Connection> {
  if (cached.conn) {
    console.log("Already connected to MongoDB");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
      })
      .then((mongooseInstance) => {
        console.log("Connected to MongoDB");
        return mongooseInstance.connection;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;

