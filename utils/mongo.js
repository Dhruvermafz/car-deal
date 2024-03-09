// utils/mongo.js

import { MongoClient } from "mongodb";

// Function to connect to MongoDB
export async function connectToMongoDB() {
  try {
    // Create a new MongoClient
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connect the client to the MongoDB server
    await client.connect();

    // Set the MongoDB database and collection
    const db = client.db(process.env.MONGODB_DATABASE);
    // You can set up your database and collections here

    // Return the client and database
    return { client, db };
  } catch (err) {
    // If an error occurs, throw the error
    throw err;
  }
}
