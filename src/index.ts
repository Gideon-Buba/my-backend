import express from "express";
import { AppDataSource } from "./data-source";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((error) => console.log(error));
