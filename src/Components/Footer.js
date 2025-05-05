import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">About Us</h5>
            <p className="small text-light">
              We provide expert repair & installation services for home appliances like ACs, Washing Machines, Refrigerators, Water Purifiers, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="small text-light"><FaMapMarkerAlt className="me-2" /> Nagpur, India</p>
            <p className="small text-light"><FaPhone className="me-2" /> +91 7028787941</p>
            <p className="small text-light"><FaEnvelope className="me-2" /> ujwalvaishnav1802@gmail.com</p>

            {/* Social Media */}
            <div className="mt-3">
              <a href="https://www.facebook.com/share/19AR1h7REv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaFacebook size={20} /></a>
              <a href="https://www.instagram.com/ujwal_vaishnav?igsh=MXFndmo4cTVmYXkwcQ==" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaInstagram size={20} /></a>
              <a href="https://x.com/ujwal97180?s=21" target="_blank" rel="noopener noreferrer" className="text-white me-3"><FaTwitter size={20} /></a>
              <a href="https://wa.me/917028787941" target="_blank" rel="noopener noreferrer" className="text-white"><FaWhatsapp size={20} /></a>
            </div>
          </div>
        </div>
        <hr className="bg-light my-4" />
        <p className="text-center small text-light">&copy; 2025 Shree Sai Refrigeration. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
