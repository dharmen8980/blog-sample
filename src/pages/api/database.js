import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL;
const dbName = "Blogs";
const options = {};

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(url, options);
    const db = client.db(dbName);
    return { client, db };
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // rethrow the error to handle it in the calling function
  }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { client, db } = await connectToDatabase();

      // Read documents from the "hacks" collection
      const collection = db.collection("hacks");
      const collectionData = await collection.find().toArray();

      res.status(200).json({ message: "Success", collectionData });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { client, db } = await connectToDatabase();

      // Extract title and content from the request body
      const { collectionName, title, introduction, bodyContent, media, author, createdAt} = req.body;

      // check for empty fields
      if (!collectionName || !title || !introduction || !bodyContent || !media || !author || !createdAt) {
        return res.status(200).json({ message: "Missing field(s). Please make sure none of the fields are empty" });
      }

      // Create a new document object with title, content, and an automatically generated _id
      const newDocument = { title, introduction, bodyContent, media, author, createdAt};

      // Insert the new document into the "hacks" collection
      const hacksCollection = db.collection(collectionName);
      const result = await hacksCollection.insertOne(newDocument);

      res
        .status(201)
        .json({ message: "Document created", documentId: result.insertedId });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  } else {
    res.status(400).json({ message: "Unsupported HTTP method" });
  }
}
