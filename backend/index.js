import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js"; 
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();  // ✅ Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
connectDB()
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // Stop the server if DB connection fails
  });

// ✅ Use Routes
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
