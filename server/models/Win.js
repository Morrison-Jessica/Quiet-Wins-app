// Using ES modules
import mongoose from "mongoose";

// Define Win schema 
const winSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    reflection: {
      type: String,
      trim: true,
    },
  },
  {
    // Auto adds created_at timestamp
    timestamps: { createdAt: "created_at", updatedAt: false },
  }
);

// Exports model as DEFAULT export
export default mongoose.model("Win", winSchema);
