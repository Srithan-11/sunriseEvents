import Booking from "../models/Booking.js"; // ✅ Use 'import' instead of 'require'

// Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Add a new booking
export const addBooking = async (req, res) => {
  try {
    const { customerName, eventDate, services } = req.body;

    // ✅ Validate required fields
    if (!customerName || !eventDate || !services || !Array.isArray(services)) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newBooking = new Booking({ customerName, eventDate, services });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error in addBooking:", error.message);
    res.status(500).json({ error: "Failed to add booking", details: error.message });
  }
};
