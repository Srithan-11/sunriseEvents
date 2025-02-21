import Contact from "../models/Contact.js"; // ✅ Use ES Modules

// ✅ Get All Contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Add a New Contact
export const addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 🚨 Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact added successfully", contact: newContact });
  } catch (error) {
    console.error("❌ Error adding contact:", error);
    res.status(500).json({ message: "Failed to add contact", error: error.message });
  }
};
