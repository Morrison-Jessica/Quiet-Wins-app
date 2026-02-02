// Using ES modules
// Import Express - creates a router
import express from "express";
// Import Win model to interact with MongoDB
import Win from "../models/Win.js";

// Create a new router instance
const router = express.Router();

// ======================
// ==== GET all wins ====
// ======================
router.get("/", async (req, res) => {
    try {
      // Find all - sort newest first
      const wins = await Win.find().sort({ created_at: -1 });
      // Send back as JSON
      res.status(200).json(wins);
    } catch (err) {
      // Server error if something goes wrong
      console.error("GET /wins error:", err);
      res.status(500).json({ message: "Failed to fetch wins", error: err.message });
    }
  });

// ======================
// ==== GET by id ======= 
// ======================
router.get("/:id", async (req, res) => {
  try {
    const win = await Win.findById(req.params.id); // Find _id
    if (!win) {
      return res.status(404).json({ message: "Win not found" });
    }
    res.status(200).json(win);
  } catch (err) {
    console.error("GET /wins/:id error:", err);
    const message = err?.message || String(err);
    res.status(500).json({ message: "Failed to fetch win", error: message });
  }
});
  
  
  // ======================
  // ==== POST new win ====
  // ======================
  router.post("/", async (req, res) => {
    try {
      // Creates a new Win - data from the request body
      const win = new Win(req.body);
  
      // Saves win to database
      const savedWin = await win.save();
  
      // Sends back new win
      res.status(201).json(savedWin);
    } catch (err) {
      // Error if validation fails
      res.status(400).json({ message: "Failed to create win", error: err.message });
    }
  });
  
  
  // ========================
  // ==== UPDATE a win ======
  // ========================
  router.put("/:id", async (req, res) => {
    try {
      // Find win by ID and update it
      const updatedWin = await Win.findByIdAndUpdate(
        req.params.id, // ID from URL
        { $set: req.body},      // New data - $set means only update provided fields
        { new: true, runValidators: true }  // Return updated document, prevent invalid data
      );
  
      // If no win was found with that ID
      if (!updatedWin) {
        return res.status(404).json({ message: "Win not found" });
      }
  
      // Send updated win back
      res.json(updatedWin);
    } catch (err) {
      // Error for invalid ID or request
      res.status(400).json({ message: "Failed to update win", error: err.message });
    }
  });
  
  
  // ======================
  // ==== DELETE a win ====
  // ======================
  router.delete("/:id", async (req, res) => {
    try {
      // Find win by ID and delete it
      const deletedWin = await Win.findByIdAndDelete(req.params.id);
  
      // If no win was found with that ID
      if (!deletedWin) {
        return res.status(404).json({ message: "Win not found" });
      }
  
      // Confirms delete & returns deleted win
      res.status(200).json({ message: "Win deleted", deletedWin });
    } catch (err) {
      // Error for invalid ID (400) means client sent bad data. Changed to (500) for server/db failure. Message updated.
      res.status(500).json({ message: "Failed to delete win", error: err.message });
    }
  });
  
  // Export the router to server.js to use
  export default router;