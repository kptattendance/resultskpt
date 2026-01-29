import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// load env variables
dotenv.config();
import resultRoutes from "./routes/resultRoutes.js";

// 🔥 import DB (this triggers connection test)
import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/results", resultRoutes);

app.get("/", (req, res) => {
  res.send("Student Result API running");
});

export default app;
