import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBookings, createBooking } from "../api.ts";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const serviceOptions = [
  "Wedding Decoration",
  "Reception Setup",
  "Sangeet Decoration",
  "Haldi Decoration",
  "Rental Furniture",
  "Sitting Arrangement",
];

const Booking = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });

  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("Booking added successfully!");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });

      setCustomerName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setEventDate("");
      setSelectedServices([]);
    },
    onError: (error) => {
      toast.error(`Failed to add booking: ${error.message}`);
    },
  });

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [tempServices, setTempServices] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Fetch service from URL and pre-select it
  useEffect(() => {
    const serviceFromURL = searchParams.get("service");
    if (serviceFromURL && serviceOptions.includes(serviceFromURL)) {
      setSelectedServices([serviceFromURL]);
      setTempServices([serviceFromURL]);
    }
  }, [searchParams]);

  // Close dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleService = (service: string) => {
    setTempServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const confirmSelection = () => {
    setSelectedServices(tempServices);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName || !email || !phoneNumber || !address || !eventDate || selectedServices.length === 0) {
      toast.error("Please fill in all fields.");
      return;
    }

    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    if (cleanedPhoneNumber.length !== 10) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    mutation.mutate({
      customerName,
      email,
      phoneNumber: cleanedPhoneNumber,
      address,
      eventDate,
      services: selectedServices,
    });
  };

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-3xl font-bold mb-8">Book an Event</h1>
      <form onSubmit={handleSubmit} className="mb-10 p-6 border rounded-lg shadow-lg space-y-4">
        <Input
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Enter 10-digit phone number"
          value={phoneNumber}
          onChange={(e) => {
            const input = e.target.value.replace(/\D/g, "");
            if (input.length <= 10) setPhoneNumber(input);
          }}
          required
        />
        <Input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        {/* ✅ Multi-Select Dropdown with Preselected Option */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="w-full p-2 border rounded-md cursor-pointer bg-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedServices.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedServices.map((service) => (
                  <span
                    key={service}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedServices(selectedServices.filter((s) => s !== service));
                    }}
                  >
                    {service} ✕
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-500">Select services...</span>
            )}
          </div>

          {dropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-10 p-2">
              {serviceOptions.map((service) => (
                <div
                  key={service}
                  className={`p-2 cursor-pointer flex items-center gap-2 ${
                    tempServices.includes(service) ? "bg-blue-100" : "hover:bg-gray-100"
                  }`}
                  onClick={() => toggleService(service)}
                >
                  <input
                    type="checkbox"
                    checked={tempServices.includes(service)}
                    readOnly
                  />
                  {service}
                </div>
              ))}
              <Button className="mt-2 w-full" onClick={confirmSelection}>
                OK
              </Button>
            </div>
          )}
        </div>

        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Booking;
