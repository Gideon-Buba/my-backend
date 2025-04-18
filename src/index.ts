import express from "express";
import * as http from "node:http";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(compression());

// Use user routes
app.use("/api", userRoutes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

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
