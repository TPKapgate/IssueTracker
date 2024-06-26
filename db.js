// db.js
// import mongoose from "mongoose";
// const url = "mongodb+srv://2017ugpi006:TFHf3Ajdm0HNuUBX@cluster0.irncr8i.mongodb.net/issueTrack?retryWrites=true&w=majority";

// export const connect = async () => {
//   try {
//     await mongoose.connect(`mongodb://${url}/issueTrack`);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };
// mongodb://localhost:27017/



// db.js
// import mongoose from "mongoose";
// const url = "mongodb+srv://2017ugpi006:TFHf3Ajdm0HNuUBX@cluster0.irncr8i.mongodb.net/issueTrack?retryWrites=true&w=majority";

// export const connect = async () => {
//   try {
//     await mongoose.connect(`mongodb://${url}/issueTrack`);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };
// mongodb://localhost:27017/



import { MongoClient } from "mongodb";

const uri = "mongodb+srv://2017ugpi006:TFHf3Ajdm0HNuUBX@cluster0.irncr8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client;

export const connect = async () => {
  try {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export const getClient = () => client;

// Example function to close the MongoDB connection
export const closeConnection = async () => {
  try {
    await client.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
};

