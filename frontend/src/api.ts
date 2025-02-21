import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, ""); // ✅ Ensure no trailing slash

// 🚨 Validate API URL
if (!API_URL) {
  console.error("🚨 API URL is missing. Please check your .env file.");
  throw new Error("Missing API URL in environment variables.");
}

// ✅ Define types
export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface BookingData {
  customerName: string;
  eventDate: string;
  services: string[];
}

// ✅ Generic API Request Handler
const apiRequest = async <T>(method: "GET" | "POST", endpoint: string, data?: any): Promise<T> => {
  try {
    const response = await axios({ method, url: `${API_URL}${endpoint}`, data });
    return response.data;
  } catch (error: any) {
    console.error(`🚨 Error in ${method} ${endpoint}:`, error.response?.data || error.message);
    throw new Error(error.response?.data?.error || `Failed to process ${endpoint}`);
  }
};

// ✅ Add Contact
export const createContact = (contactData: ContactData) => apiRequest<ContactData>("POST", "/api/contacts", contactData);

// ✅ Fetch Contacts
export const getContacts = () => apiRequest<ContactData[]>("GET", "/api/contacts");

// ✅ Add Booking
export const createBooking = (booking: BookingData) => apiRequest<BookingData>("POST", "/api/bookings", booking);

// ✅ Fetch Bookings
export const fetchBookings = () => apiRequest<BookingData[]>("GET", "/api/bookings");
