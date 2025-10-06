const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const ContactMessage = require('./models/ContactMessage');
const Visitor = require('./models/Visitor');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware to log visitor info
app.use(async (req, res, next) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // For simplicity, location is not resolved here. You can integrate a geoip service if needed.
    const location = 'Unknown';
    await Visitor.create({ ip, location });
  } catch (err) {
    console.error('Error logging visitor:', err);
  }
  next();
});

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /contact endpoint
app.post('/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  try {
    // Save to database
    const contactMessage = new ContactMessage({ name, email, phone, subject, message });
    await contactMessage.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject ? `New Contact Form Message: ${subject}` : 'New Contact Form Message',
      text: `You have a new message from ${name} (${email}):\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error handling contact form:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// GET /api/visitors endpoint
app.get('/api/visitors', async (req, res) => {
  try {
    const totalVisitors = await Visitor.countDocuments();
    const lastVisitor = await Visitor.findOne().sort({ date: -1 });
    res.json({ totalVisitors, lastVisitor: lastVisitor ? lastVisitor.date : null });
  } catch (error) {
    console.error('Error fetching visitors:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
