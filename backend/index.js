import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js"; 
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"; // ✅ Added missing contacts route

dotenv.config(); // ✅ Load environment variables

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // ✅ Restrict to frontend domain in production
    methods: ["GET", "POST"],
  })
);

// ✅ Connect to MongoDB & Start Server
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database Connected Successfully");

    // ✅ Use Routes
    app.use("/api/bookings", bookingRoutes);
    app.use("/api/contacts", contactRoutes); // ✅ Added contact route

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // Stop the server if DB connection fails
  }
};

startServer(); // ✅ Ensures DB connection before starting the server
