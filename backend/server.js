// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Updated CORS configuration to explicitly allow your frontend URL
const corsOptions = {
  origin: [
    'https://shreesairefrigeration.onrender.com', 
    'http://localhost:3000'  // Keep localhost for development
  ],
  methods: ['GET', 'POST'],
  credentials: true
};

// Replace the simple cors() with the corsOptions
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

// Define service request schema
const serviceRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  serviceType: { type: String, required: true },
  subtype: { type: String, required: true },
  warrantyExpired: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Create model
const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Function to send email notification
const sendEmailNotification = async (serviceRequest) => {
  try {
    const {
      name,
      phone,
      address,
      serviceType,
      subtype,
      warrantyExpired
    } = serviceRequest;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ujwalvaishnav1802@gmail.com',
      subject: `New Service Request: ${serviceType} - ${subtype}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Subtype:</strong> ${subtype}</p>
        <p><strong>Warranty Expired:</strong> ${warrantyExpired}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// API routes
app.post('/api/service-requests', async (req, res) => {
  try {
    const { name, phone, address, selectedService, subtype, warranty } = req.body;
    
    const newServiceRequest = new ServiceRequest({
      name,
      phone,
      address,
      serviceType: selectedService,
      subtype,
      warrantyExpired: warranty
    });
    
    const savedRequest = await newServiceRequest.save();
    
    // Send email notification
    await sendEmailNotification({
      name,
      phone,
      address,
      serviceType: selectedService,
      subtype,
      warrantyExpired: warranty
    });
    
    res.status(201).json(savedRequest);
  } catch (error) {
    console.error('Error processing service request:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));