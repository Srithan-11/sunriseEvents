
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Wedding Decoration",
      description: "Transform your special day with elegant decorations that create the perfect ambiance.",
      price: "Contact for Quote",
    },
    {
      title: "Reception Setup",
      description: "Complete reception setup with elegant table arrangements and stunning decor elements.",
      price: "Contact for Quote",
    },
    {
      title: "Sangeet Decoration",
      description: "Vibrant and festive decorations perfect for sangeet celebrations.",
      price: "Contact for Quote",
    },
    {
      title: "Haldi Decoration",
      description: "Traditional and bright decorations for your haldi ceremony.",
      price: "Contact for Quote",
    },
    {
      title: "Rental Furniture",
      description: "High-quality furniture rentals for all your event needs.",
      price: "Contact for Quote",
    },
    {
      title: "Sitting Arrangement",
      description: "Strategic and comfortable seating arrangements for all types of events.",
      price: "Contact for Quote",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of event decoration services to make your special day memorable.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gold font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
