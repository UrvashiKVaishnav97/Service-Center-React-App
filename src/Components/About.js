import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textFade = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.3 } },
};

const AboutAndDesignPackages = () => {
  return (
    <div className="about-container-fluid">
      {/* Banner Section */}
      <motion.div
        className="banner"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="banner-text text-light fw-bold"
          variants={textFade}
        >
          About Us
        </motion.h1>
      </motion.div>

      <div className="content">
        {/* First Section */}
        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div className="text-container">
            <h2 className="heading">Get to Know Us</h2>
            <p className="description">
              Welcome to Shree Sai Refrigeration, your trusted partner for home
              appliance services in Nagpur. With over a decade of experience, we
              specialize in providing high-quality repair and maintenance
              services for a wide range of home appliances. Whether it's your
              washing machine, fridge, air conditioner, microwave oven,
              dishwasher, geyser, or LED TV, our expert technicians are ready to
              offer prompt and reliable services.
            </p>
            <p className="description">
              At Shree Sai Refrigeration, our mission is to deliver unparalleled
              customer satisfaction by providing reliable, affordable, and
              efficient services. We are committed to keeping your home
              appliances in perfect working condition, ensuring a hassle-free
              experience for our clients.
            </p>
          </div>
          <div className="image-container">
            <img src="/3.jpg" alt="Essentials" className="image" />
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="section reverse"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div className="text-container">
            <h2 className="heading">Our Vision</h2>
            <p className="description ">
              To be the leading service provider in the region for all home
              appliance needs, known for our quality, customer service, and
              innovation. We aim to expand our service offerings and build
              long-lasting relationships with our customers, ensuring that they
              always have a trusted service partner for their appliances.
            </p>
          </div>
          <div className="image-container">
            <img src="/2.jpg" alt="Design Package" className="image" />
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="why-choose-us">
          <h2 className="section-title">WHY CHOOSE US?</h2>
          <div className="cards-container">
            {[
              "EXPERT TECHNICIANS",
              "QUICK RESPONSE",
              "GENUINE PARTS",
              "AFFORDABLE PRICING",
            ].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="card"
              >
                <span className="card-number">0{index + 1}.</span>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">
                  {title === "EXPERT TECHNICIANS" &&
                    "Our technicians are highly trained, experienced, and knowledgeable, ensuring that your appliances are handled with care."}
                  {title === "QUICK RESPONSE" &&
                    "We offer doorstep services within 60 minutes, minimizing downtime for your appliances."}
                  {title === "GENUINE PARTS" &&
                    "We only use 100% genuine and high-quality spare parts, giving you peace of mind that your appliance will run like new."}
                  {title === "AFFORDABLE PRICING" &&
                    "We believe in offering top-notch services at competitive and transparent pricing, ensuring value for money."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutAndDesignPackages;

// CSS Styles
const styles = `
.banner {
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./aboutBannerr.avif');
}

@media (max-width: 1024px) {
  .banner {
    height: 80vh;
    background-size: contain;
  }
  .banner-text {
    font-size: 2rem;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    padding: 0 15px;
    font-weight: bold;

  }
}

@media (max-width: 768px) {
  .banner {
    height: 80vh;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -155px;
    margin-bottom: -280px;
  }

  .banner-text {
    font-size: 2rem;
    text-align: center;
     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    padding: 0 15px;
    
  }
}

@media (max-width: 480px) {
  .banner {
    height: 95vh;
    margin-top: -145px;
    margin-bottom: -300px;
  }

  .banner-text {
    font-size: 1.5rem;
     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      font-weight: 800px;
  }
}

.content {
  padding: 50px 20px;
  max-width: 100%;
  margin: auto;
}

.section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  opacity: 0;
}

.reverse {
  flex-direction: row-reverse !important;
}

.text-container {
  width: 50%;
  padding: 20px;
}

.heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Times New Roman', serif;
}

.description {
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
}

.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
}

.image {
  width: 80%;
  height: 400px;
  object-fit: cover;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.why-choose-us {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.cards-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 100%;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  width: 250px;
  text-align: center;
  transition: transform 5s;
  border: 1px solid grey;
}

.card:hover {
  animation: bounce 0.3s ease-in-out;
}

@keyframes bounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.card-number {
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}

.card-description {
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .section {
    flex-direction: column;
    text-align: center;
  }

  .reverse {
    flex-direction: column !important;
  }

  .text-container, .image-container {
    width: 100%;
  }

  .image {
    width: 90%;
    height: auto;
  }

  .cards-container {
    flex-direction: column;
    gap: 10px;
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
