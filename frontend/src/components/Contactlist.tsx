import { useEffect, useState } from "react";
import { getContacts } from "../api";  // ✅ Corrected Import

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
}

interface ContactData {
  _id: string;
  name: string;
  email: string;
  message: string;
}

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts().then((data: ContactData[]) => {
      const convertedData: Contact[] = data.map((item) => ({
        _id: item._id,
        name: item.name,
        email: item.email,
        message: item.message,
      }));
      setContacts(convertedData);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id} className="border p-2 rounded-lg shadow mb-2">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Message:</strong> {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
