import express from "express";
import { getContacts, addContact } from "../controllers/contactController.js"; // ✅ Use ES Modules

const router = express.Router();

// ✅ Define Routes
router.get("/", getContacts);
router.post("/", addContact);

export default router; // ✅ Use ES Module export
