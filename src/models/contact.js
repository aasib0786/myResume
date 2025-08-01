// File: src/models/contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Prevent model overwrite on hot reload
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
