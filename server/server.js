// Using ES modules
// Import Express to create server
import express from "express";
// Import dotenv for environment variables
import dotenv from "dotenv";
// Import cors - allows frontend requests
import cors from "cors";
// Import database connection function
import connectDB from "./config/db.js";
// Import win routes
import winRoutes from "./routes/wins.js";
// Import auth middleware
import requireAuth from "./middleware/requireAuth.js"
import authRoutes from "./routes/auth.js";



// Load environment variables from .env
dotenv.config();
// Connect to MongoDB once at server start
connectDB();

// Creates Express app
const app = express();
// Defines port
const PORT = process.env.PORT || 3000;

// ================================
// ========== Middleware ==========
// ================================
// Allows cross-origin requests
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Parse incoming JSON data
app.use(express.json());

app.use("/api/auth", authRoutes);


// ============================
// ========== Routes ==========
// ============================
// Win-related routes start with /api/wins
app.use("/api/wins", winRoutes);
app.use("/api/auth", authRouter);

// NEW PROTECTED Test route
app.get("/api/protected", requireAuth, (req, res) => {
  res.json({ message: "Congrats! You can see this because you're logged in." });
});

// ==================================
// ========== Start Server ==========
// ==================================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
