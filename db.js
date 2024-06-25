import { MongoClient } from "mongodb";

const uri = "mongodb+srv://2017ugpi006:TFHf3Ajdm0HNuUBX@cluster0.irncr8i.mongodb.net/issueTrack?retryWrites=true&w=majority";

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
