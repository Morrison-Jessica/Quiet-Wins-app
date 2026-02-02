import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true },   // No duplicate users
    password: { type: String,  // Password stored as temp text
    required: true },
});

export default mongoose.model("User", userSchema);
// Exports so routes can create/find users