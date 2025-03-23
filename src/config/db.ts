import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.DATABASE_URL;

if (MONGO_URL) {
  mongoose.Promise = Promise;
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error: Error) => {
      console.error("Error connecting to MongoDB:", error);
    });

  mongoose.connection.on("error", (error: Error) => {
    console.error("MongoDB connection error:", error);
  });
} else {
  console.error("MONGO_URL is not defined in the environment variables");
}
