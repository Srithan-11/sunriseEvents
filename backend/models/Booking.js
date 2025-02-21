import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  services: { type: [String], required: true },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking; // ✅ Add this line
