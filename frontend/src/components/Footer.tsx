import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-6 px-4">
        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Surat,Gujarat, India
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} /> +91 9887829699
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} /> sunriseevents@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://m.facebook.com/login/?next=%2FSunriseEvent.in%2F" className="hover:text-blue-400">Facebook</a>
            <a href="https://www.instagram.com/sunriseevents.in?igsh=MTBlajhreTFtN2lxbg==" className="hover:text-blue-300">Instagram</a>
            <a href="https://youtube.com/@sunrise_events_india?si=YkQsg9Cga8oQo8tc" className="hover:text-blue-500">Youtube</a>
          </div>
        </div>

        {/* Location - Google Maps Embed */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Find Us Here</h2>
          <iframe
            title="Google Map "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3001349693473!2d72.77340029999999!3d21.140450800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05362b26e0b2b%3A0x184d69514dbd8923!2sSunrise%20Craft%20%26%20Decor!5e0!3m2!1sen!2sin!4v1740131144892!5m2!1sen!2sin"
            width="100%"
            height="150"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-sm opacity-75">
        © {new Date().getFullYear()} Sunrise Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
