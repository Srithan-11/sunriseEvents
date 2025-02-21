const API_BASE_URL = "http://localhost:5002/api/bookings";

// ✅ Fetch all bookings
export const fetchBookings = async () => {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch bookings: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("❌ Error fetching bookings:", error);
    throw error;
  }
};

// ✅ Create a new booking
export const createBooking = async (bookingData: any) => {
  try {
    console.log("📩 Raw Data Before Processing:", bookingData);

    // ✅ Remove non-numeric characters
    let phoneNumber = bookingData.phoneNumber.replace(/\D/g, ""); 

    // ✅ Remove "+91" if it exists
    if (phoneNumber.startsWith("91") && phoneNumber.length > 10) {
      phoneNumber = phoneNumber.substring(2); // Remove first two digits
    }

    // ✅ Ensure exactly 10 digits
    if (phoneNumber.length !== 10) {
      console.error("❌ Invalid phone number:", phoneNumber);
      throw new Error("Phone number must be exactly 10 digits.");
    }

    // ✅ Create formatted data
    const processedBookingData = {
      ...bookingData,
      phoneNumber, // Store only 10-digit number
    };

    console.log("📩 Final Data Sent to Backend:", processedBookingData);

    // ✅ Send request
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedBookingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Backend Error:", errorData);
      throw new Error(errorData.error || "Failed to process booking request");
    }

    return response.json();
  } catch (error) {
    console.error("❌ Error in createBooking:", error.message);
    throw error;
  }
};
