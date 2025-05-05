import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";


const AboutContact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [subtypes, setSubtypes] = useState([]);
  const [subtype, setSubtype] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [warranty, setWarranty] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const serviceOptions = {
    "Washing Machine Repair/Installation": [
      "Front Load Repair",
      "Top Load Repair",
      "Semi-Automatic Repair",
      "Installation Services",
      "Other Services",
    ],
    "Fridge Machine Repair/Installation": [
      "Single Door Repair",
      "Double Door Repair",
      "Side-by-Side Repair",
      "Installation Services",
      "Other Services",
    ],
    "AC Machine Repair/Installation": [
      "Split AC Repair",
      "Window AC Repair",
      "Installation Services",
      "Other Services",
    ],
    "Geyser Machine Repair/Installation": [
      "Electric Geyser Repair",
      "Gas Geyser Repair",
      "Installation Services",
      "Other Services",
    ],
    "LCD/LED Machine Repair/Installation": [
      "32-inch LED Repair",
      "Smart TV Repair",
      "Installation Services",
      "Other Services",
    ],
    "Microwave Oven Repair/Installation": [
      "Solo Microwave Repair",
      "Grill Microwave Repair",
      "Convection Microwave Repair",
      "Installation Services",
      "Other Services",
    ],
    "Dishwasher Repair/Installation": [
      "Built-in Dishwasher Repair",
      "Freestanding Dishwasher Repair",
      "Installation Services",
      "Other Services",
    ],
  };

  const handleServiceChange = (e) => {
    const selected = e.target.value;
    setSelectedService(selected);
    setSubtypes(serviceOptions[selected] || []);
    setSubtype("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    
    // Form validation
    if (!name || !phone || !address || !selectedService || !subtype || !warranty) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }
    
    try {
      // Send data to backend
      const response = await axios.post('https://service-center-react-app-b.onrender.com', {
        name,
        phone,
        address,
        selectedService,
        subtype,
        warranty
      });
      
      // Reset form on success
      setName("");
      setPhone("");
      setAddress("");
      setSelectedService("");
      setSubtypes([]);
      setSubtype("");
      setWarranty("");
      setSuccess(true);
      
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.response?.data?.message || "Failed to submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="contact-banner"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="banner-title "
        >
          Contact Us
        </motion.h1>
      </motion.div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center", padding: "0.50rem", marginTop: "1rem" }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ display: "flex", flexWrap: "wrap", width: "80%", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.2)", overflow: "hidden" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              style={{ flex: 1, padding: "2rem", minWidth: "300px" }}
            >
              <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Get in Touch</h2>
              <hr style={{ width: "50px", border: "2px solid #007bff" }} />
              <p style={{ marginTop: "1rem", color: "#555" }}>Reach out to us for reliable appliance repair services—call, email, or visit us today!</p>
              <div style={{ marginTop: "1.5rem" }}>
                <p style={{ fontWeight: "bold" }}>📍 Address</p>
                <p>Rameshwari Ring Road Dwarkapuri, Nagpur Maharashtra 440027</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <p style={{ fontWeight: "bold" }}>📧 Email</p>
                <p>ujwalvaishnav1802@gmail.com</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <p style={{ fontWeight: "bold" }}>📞 Call Us</p>
                <p>+91 7028787941</p>
              </div>
              <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
  <FaWhatsapp size={18} color="#25D366" />
  <a
    href="https://wa.me/917028787941?text=Hi%20there%2C%20I%20need%20help%20with%20an%20appliance%20service."
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#25D366", textDecoration: "none" }}
  >
    Message us on WhatsApp
  </a>
</div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              style={{ flex: 1, backgroundColor: "#e9f0fa", padding: "2rem", borderRadius: "0 10px 10px 0", minWidth: "300px" }}
            >
              <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>BOOK SERVICE</h2>
              <hr style={{ width: "50px", border: "2px solid #007bff" }} />

              {success && (
                <div style={{ padding: "10px", backgroundColor: "#d4edda", color: "#155724", borderRadius: "5px", marginBottom: "15px" }}>
                  Your service request has been submitted successfully!
                </div>
              )}
              
              {error && (
                <div style={{ padding: "10px", backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "5px", marginBottom: "15px" }}>
                  {error}
                </div>
              )}

              <form style={{ marginTop: "1.5rem" }} onSubmit={handleSubmit}>
                <label>Full Name *</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />

                <label>Phone Number *</label>
                <input type="tel" required value={phone} pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} style={inputStyle} />

                <label>Address *</label>
                <textarea required rows={3} value={address} onChange={(e) => setAddress(e.target.value)} style={{ ...inputStyle, resize: "none" }}></textarea>

                <label>Select Type</label>
                <select onChange={handleServiceChange} value={selectedService} required style={inputStyle}>
                  <option value="">-- Select Service Type --</option>
                  {Object.keys(serviceOptions).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                {subtypes.length > 0 && (
                  <>
                    <label>Select Subtype</label>
                    <select required value={subtype} onChange={(e) => setSubtype(e.target.value)} style={inputStyle}>
                      <option value="">-- Select Subtype --</option>
                      {subtypes.map((sub, index) => (
                        <option key={index} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </>
                )}

                <label>Warranty Expired?</label>
                <div style={{ marginBottom: "1rem" }}>
                  <input type="radio" id="yes" name="warranty" value="yes" checked={warranty === "yes"} onChange={(e) => setWarranty(e.target.value)} />
                  <label htmlFor="yes" style={{ marginLeft: "0.5rem" }}>Yes</label>
                  <input type="radio" id="no" name="warranty" value="no" checked={warranty === "no"} onChange={(e) => setWarranty(e.target.value)} style={{ marginLeft: "1rem" }} />
                  <label htmlFor="no" style={{ marginLeft: "0.5rem" }}>No</label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    backgroundColor: loading ? "#cccccc" : "#007bff", 
                    color: "#fff", 
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: loading ? "not-allowed" : "pointer", 
                    fontWeight: "bold" 
                  }}
                  disabled={loading}
                >
                  {loading ? "SUBMITTING..." : "SERVICE REQUEST"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <Footer />

      <style>{`
        .contact-banner {
          width: 100%;
          height: 70vh;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 50px;
          margin-top: 100px;
          background-image: url('./contactBanner.jpg');
        }

        .banner-title {
          color: white;
          font-size: 3rem;
          font-weight: 800;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .contact-banner {
            height: 30vh;
            padding-left: 20px;
            margin-top: 60px;
          }

          .banner-title {
            font-size: 2rem;
            text-align: center;
            margin-top: 25px;
          }
        }

        @media (max-width: 480px) {
          .contact-banner {
            height: 35vh;
            padding-left: 8px;
          }

          .banner-title {
            font-size: 1.8rem;
            text-align: center;
            margin-top: 35px;
          }
        }
      `}</style>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

export default AboutContact;