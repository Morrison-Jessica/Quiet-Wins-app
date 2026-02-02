import express from "express";
// User model allows DB interaction
import User from "../models/User.js";


const router = express.Router();

// =======================
// ===== REGISTER =======
// =======================
router.post("/register", async (req, res) => {
  try {
    // Create a new user - request body data
    const user = await User.create(req.body);

    // creation success confirm
    res.status(201).json({ success: true, user });
  } catch (err) {
    // Handles duplicate emails or missing fields
    res.status(400).json({ message: err.message });
  }
});

// =======================
// ===== LOGIN TEMP ======
// =======================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Grab login credentials

  // Check if user exists - matching email + password
  const user = await User.findOne({ email, password });

  if (!user) {
    // If not found, deny login
    return res.status(401).json({ message: "Invalid login" });
  }

  // Login success confirm
  res.json({ success: true });
});

export default router;
// available to server.js
