import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "../src/routes/auth.route.js";
import messageRoutes from "../src/routes/message.route.js";

import { connectDB } from "./lib/db.js";

import { app, server } from "./lib/socket.js";

dotenv.config();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on Port: ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
