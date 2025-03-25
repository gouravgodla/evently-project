import mongoose from "mongoose";

// Correctly load MONGODB_URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Cache connection to avoid multiple connections during hot reloads
let cached: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null } = (global as any).mongoose || {
  conn: null,
  promise: null,
};

// Function to connect to the database
export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
