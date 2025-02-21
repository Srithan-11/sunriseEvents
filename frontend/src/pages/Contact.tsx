import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getContacts, createContact } from "@/api"; // ✅ Fixed path alias
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const queryClient = useQueryClient();
  
  // Fetch contacts
  const { data: contacts = [], isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  // Mutation for creating a new contact
  const mutation = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      toast.success("Contact added successfully!");
      queryClient.invalidateQueries({ queryKey: ["contacts"] }); // Refresh contacts list
    },
    onError: () => {
      toast.error("Failed to add contact");
    },
  });

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded-lg shadow">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit" className="mt-2 w-full">
          Submit
        </Button>
      </form>

      <h2 className="text-xl font-bold mb-2">Recent Contacts</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-2">
          {contacts.length > 0 ? (
            contacts.map((contact: any) => (
              <Card key={contact._id}>
                <CardContent>
                  <p><strong>Name:</strong> {contact.name}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Message:</strong> {contact.message}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No contacts found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Contact; // ✅ Fixed: Added default export
