import Booking from "../models/Booking.js"; // ✅ Ensure Booking model is imported

// ✅ GET all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.error("❌ Error in getBookings:", error.stack);
    res.status(500).json({ success: false, error: "Failed to fetch bookings", details: error.message });
  }
};

// ✅ POST a new booking
export const addBooking = async (req, res) => {
  try {
    console.log("📩 Received Data:", req.body);

    let { customerName, email, phoneNumber, address, eventDate, services } = req.body;

    // ✅ Validate required fields
    if (!customerName || !email || !phoneNumber || !address || !eventDate || !services) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // ✅ Validate phone number format (Ensure exactly 10 digits before adding +91)
    phoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
    if (phoneNumber.length !== 10) {
      return res.status(400).json({ error: "Phone number must be exactly 10 digits." });
    }
    phoneNumber = `+91${phoneNumber}`; // Now prepend +91 after validation

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // ✅ Validate event date
    const formattedEventDate = new Date(eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(formattedEventDate.getTime()) || formattedEventDate <= today) {
      return res.status(400).json({ error: "Event date must be a valid future date." });
    }

    // ✅ Ensure services is an array
    if (typeof services === "string") {
      services = services.split(",").map((s) => s.trim());
    }
    if (!Array.isArray(services) || services.length === 0) {
      return res.status(400).json({ error: "Services must be a non-empty array of strings." });
    }

    // ✅ Save new booking
    const newBooking = new Booking({ customerName, email, phoneNumber, address, eventDate: formattedEventDate, services });
    await newBooking.save();

    res.status(201).json({ success: true, message: "✅ Booking added successfully!", booking: newBooking });
  } catch (error) {
    console.error("❌ Error in addBooking:", error.stack);
    res.status(500).json({ error: "Failed to add booking", details: error.message });
  }
};
