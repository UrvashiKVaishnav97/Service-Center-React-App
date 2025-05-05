import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importing for redirection
import Footer from "./Footer";

const styles = `
  .service-page {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
  }

  .page-title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343a40;
  }

  .category-title, .category-description {
    text-align: center;
  }

  .category-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
  }

  .category-description {
    font-size: 18px;
    color: #555;
  }

  .dropdown1-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }

  .dropdown1 {
    padding: 12px;
    border-radius: 8px;
    border: 2px solid #ccc;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .dropdown1:hover, .dropdown:focus {
    border-color: #888;
    outline: none;
    background-color: #f0f0f0;
    color: #333;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }

  .service-card {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .service-card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .service-image {
    width: 60%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }

  .service-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }

  .service-description {
    font-size: 14px;
    color: #555;
    margin: 10px 0;
  }

  .service-dropdown {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 8px;
    margin-top: 10px;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .service-dropdown:hover, .service-dropdown:focus {
    border-color: #888;
    outline: none;
    background-color: #f0f0f0;
    color: #333;
  }

  .service-phone {
    color: rgb(153, 50, 13);
    font-weight: bold;
    margin-top: 20px;
  }

  .banner-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 400px;
    margin-bottom: 20px;
    margin-top: 100px;
  }

  .banner-text {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    width: 90%;
    max-width: 500px;
    margin-left: -50px;
    margin-top: 35px;
  }

  .service-request-button {
    margin-top: 12px;
    padding: 8px 70px;
    border-radius: 8px;
    border: none;
    background-color:rgba(109, 81, 57, 0.94);
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .service-request-button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .banner-text {
      top: 65%;
      font-size: clamp(12px, 4.5vw, 20px);
      width: 95%;
    }

    .banner-image {
      margin-top: 90px;
    }
  }

  @media (max-width: 480px) {
    .banner-text {
      top: 60%;
      font-size: clamp(15px, 3vw, 15px);
      width: 78%;
     
     
    }
      @media (min-width: 992px) {
  .banner-text {
    font-size: 30px;
  }
}

    .banner-image {
      margin-top: 100px;
      height: 162px;
    }
  }
`;

const ServiceCard = ({ image, title, description, phone, options }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
      <select
        className="service-dropdown"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select a Service</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button
        className="service-request-button"
        onClick={() => navigate("/contact")}
      >
        Request Service
      </button>
      <p className="service-phone">Call: {phone}</p>
    </div>
  );
};

const Service = () => {
  return (
    <div className="service-page">
      <style>{styles}</style>

      <motion.div
        className="banner-container position-relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="/ServiceBannerr.avif" alt="Service Banner" className="banner-image w-100" />
        <div
          className="banner-text position-absolute top-50 start-50 translate-middle text-white text-center fw-bold"
          style={{ fontSize: "", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
        >
          Expert Home Appliance Repair & Installation Services
        </div>
      </motion.div>

      <h1 className="page-title mt-4">Our Services</h1>

      <div className="service-grid">
        <ServiceCard image="/w2.jpg" title="Washing Machines Services" description="We provide repair and maintenance services for all types of washing machines, ensuring efficient performance and extended lifespan." phone="7028787941" options={["Front Load Repair", "Top Load Repair", "Semi-Automatic Repair","Installation Services"]} />
        <ServiceCard image="/ac.jpg" title="Air Conditioner Services" description="Our expert technicians provide installation, maintenance, and repair services for all types of air conditioners, ensuring optimal cooling and energy efficiency." phone="7028787941" options={["Residential AC Repair", "Commercial AC Repair", "Installation Services"]} />
        <ServiceCard image="/ovenn.jpg" title="Microwave Services" description="Professional repair solutions for different microwave models, including solo, grill, and convection types. We diagnose and fix heating, wiring, and display issues." phone="7028787941" options={["Solo Microwave Repair", "Grill Microwave Repair", "Convection Microwave Repair","Installation Services"]} />
        <ServiceCard image="/fridgee.jpg" title="Refrigerator Services" description="We offer repair and maintenance for refrigerators of all brands, handling cooling issues, gas refilling, compressor problems, and more." phone="7028787941" options={["Single Door Repair", "Double Door Repair", "Side by Side Repair","Installation Services"]} />
        <ServiceCard image="/d1.jpg" title="Dishwasher Services" description="Our technicians specialize in fixing dishwasher drainage problems, detergent dispensers, and water leakage issues, ensuring a hassle-free kitchen experience." phone="7028787941" options={["Built-in Dishwasher Repair", "Portable Dishwasher Repair","Installation Services"]} />
        <ServiceCard image="/geyser.avif" title="Geyser Services" description="Whether your geyser has heating issues or requires installation, our professionals offer quick and efficient services for various types of geysers." phone="7028787941" options={["Electric Geyser Repair", "Gas Geyser Repair", "Tankless Geyser Repair","Installation Services"]} />
        <ServiceCard image="/ro.jpg" title="Aquaguard Services" description="Get complete Aquaguard servicing, including water filter replacement, installation, and maintenance for clean and safe drinking water." phone="7028787941" options={["Filter Replacement", "Installation", "Annual Maintenance","Installation Services"]} />
        <ServiceCard image="/lcd.avif" title="Television Services" description="We provide specialized repairs for televisions, fixing display issues, power failures, and sound problems to bring your entertainment system back to life." phone="7028787941" options={["LED TV Repair", "LCD TV Repair", "Plasma TV Repair","Installation Services"]} />
        <ServiceCard image="/Electric.jpg" title="Chimney Services" description="We offer deep cleaning, installation, and repair services for kitchen chimneys, ensuring efficient smoke and odor removal for a cleaner kitchen environment." phone="7028787941" options={["Filter Cleaning", "Motor Repair", "Installation Services"]} />
      </div>
      <Footer />
    </div>
  );
};

export default Service;
