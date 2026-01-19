import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB(); // ← runs ONCE when server starts

const app = express();
app.listen(3000, () => console.log("Server running"));
