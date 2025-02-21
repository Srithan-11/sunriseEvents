import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
const slides = [
  "/images/b4bb5004-dc38-4b72-9c90-0d755dd22bcc.png",
  "/images/6d1580a7-44ea-4995-9589-3fe50e6c2959.png",
  "/images/7bbd3d89-6c04-4384-a3d9-e8a275508c2a.png",
  "/images/3e08c1e1-dee0-46b7-95a7-3c5adb2c2732.png",
];

const services = [
  {
    title: "Wedding Decoration",
    description: "Transform your special day with our elegant wedding decorations and creative setups.",
    icon: Heart,
    image: "/images/51671196-cf26-4508-9c87-6b11adbde5bd.png"
  },
  {
    title: "Reception Setup",
    description: "Create memorable moments with our stunning reception setups and backdrops.",
    icon: Users,
    image: "/images/b771b26d-4eb6-4b3c-ae6a-774c99f654bb.png"
  },
  {
    title: "Event Planning",
    description: "Let us handle all the details while you enjoy your celebration.",
    icon: Calendar,
    image: "/images/f05fe34f-26b0-4701-97b6-136c3b5a0ad5.png"
  },
];

const recentWorks = [
  "/images/3d8ce9bd-09fc-4705-9a4b-bffbda926f7f.png",
  "/images/2a552d65-3b3f-43c3-af4a-d2e70a6ad35a.png",
  "/images/0d19332c-5fc8-48b1-8010-a3807462a92f.png",
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-playfair text-white mb-6"
            >
              Creating Unforgettable Moments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Transform your special occasions into magical experiences with our expert event planning and decoration services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/booking"
                className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-full transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-gold hover:text-gold-dark"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Work Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-4">
              Recent Works
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWorks.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt="Event decoration"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-full transition-colors"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gold-light/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-6">
            Ready to Create Your Dream Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-full transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
