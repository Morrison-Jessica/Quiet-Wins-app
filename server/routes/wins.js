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
      res.json(wins);
    } catch (err) {
      // Server error if something goes wrong
      res.status(500).json({ error: "Failed to fetch wins" });
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
      res.status(400).json({ error: "Failed to create win" });
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
        return res.status(404).json({ error: "Win not found" });
      }
  
      // Send updated win back
      res.json(updatedWin);
    } catch (err) {
      // Error for invalid ID or request
      res.status(400).json({ error: "Failed to update win" });
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
        return res.status(404).json({ error: "Win not found" });
      }
  
      // Confirms delete 
      res.json({ message: "Win deleted" });
    } catch (err) {
      // Error for invalid ID
      res.status(400).json({ error: "Failed to delete win" });
    }
  });
  
  // Export the router to server.js to use
  export default router;