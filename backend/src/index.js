import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "../src/routes/auth.route.js";
import messageRoutes from "../src/routes/message.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on Port: ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
