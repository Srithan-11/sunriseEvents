import axios from "axios";

// ✅ Ensure the API URL is correctly set
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
    console.error("API URL is not defined in environment variables.");
}

// ✅ Fetch all services from backend
export const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/services`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};

// ✅ Fetch a single service by ID
export const getServiceById = async (id) => {
    if (!id) {
        console.error("getServiceById was called without an ID");
        return null;
    }

    try {
        const response = await axios.get(`${API_URL}/api/services/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching service:", error);
        return null;
    }
};

// ✅ Create a new contact
export const createContact = async (contactData) => {
    if (!contactData || typeof contactData !== "object") {
        console.error("Invalid contact data provided to createContact.");
        throw new Error("Invalid contact data");
    }

    try {
        const response = await axios.post(`${API_URL}/api/contacts`, contactData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating contact:", error);
        throw new Error("Failed to create contact");
    }
};

// ✅ Fetch all contacts
export const getContacts = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/contacts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return [];
    }
};

// ✅ Create a new booking (Fixed)
export const createBooking = async (bookingData) => {
    if (!bookingData || typeof bookingData !== "object") {
        console.error("Invalid booking data provided to createBooking.");
        throw new Error("Invalid booking data");
    }

    try {
        const response = await axios.post(`${API_URL}/api/bookings`, bookingData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating booking:", error);
        throw new Error("Failed to create booking");
    }
};
