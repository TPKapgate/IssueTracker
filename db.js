// db.js
import mongoose from "mongoose";
const url = process.env.MONGODB || "0.0.0.0:27017";
export const connect = async () => {
  try {
    await mongoose.connect(`mongodb://${url}/issueTrack`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
