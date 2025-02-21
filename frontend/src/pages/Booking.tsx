import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBookings, createBooking } from "../api.ts";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Booking = () => {
  const queryClient = useQueryClient();
  
  // ✅ Fetch all bookings
  const { data: bookings, isLoading } = useQuery({ queryKey: ["bookings"], queryFn: fetchBookings });

  // ✅ Mutation for creating a new booking
  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("Booking added successfully!");
      queryClient.invalidateQueries({ queryKey: ["bookings"] }); // Refresh data
    },
    onError: () => {
      toast.error("Failed to add booking");
    },
  });

  const [customerName, setCustomerName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [services, setServices] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ✅ Ensure fields are not empty
    if (!customerName || !eventDate || !services) {
      toast.error("Please fill in all fields.");
      return;
    }

    // ✅ Convert services into an array
    mutation.mutate({ customerName, eventDate, services: services.split(",").map(s => s.trim()) });

    // ✅ Clear form after submission
    setCustomerName("");
    setEventDate("");
    setServices("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book an Event</h1>
      
      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg shadow space-y-2">
        <Input placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
        <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
        <Input placeholder="Services (comma separated)" value={services} onChange={(e) => setServices(e.target.value)} required />
        <Button type="submit" className="mt-2 w-full">Submit</Button>
      </form>

      {/* Display Recent Bookings */}
      <h2 className="text-xl font-bold mb-2">Recent Bookings</h2>
      {isLoading ? <p>Loading...</p> : (
        <div className="grid gap-2">
          {bookings?.length > 0 ? (
            bookings.map((booking: any) => (
              <Card key={booking._id}>
                <CardContent>
                  <p><strong>Customer:</strong> {booking.customerName}</p>
                  <p><strong>Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p>
                  <p><strong>Services:</strong> {booking.services.join(", ")}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No bookings available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Booking;
